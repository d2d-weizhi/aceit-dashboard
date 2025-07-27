import { makeObservable, observable } from "mobx";
import { createClient } from '@/utils/supabase/client';
import { IAssignment, IStudent, IStudentAssignment, ITag } from "./state-interfaces";

export class AceItStore {
  private supabase = createClient();
	public instanceId = Math.random().toString(36).substr(2, 9);

	hasBackFilled: boolean = false;

	constructor() {
		makeObservable(this, {
			student: observable,
		});
	}

	/**
	 * When we work on the student profile, details and login, then we can work on retrieving the student's 
	 * details from the database. We will need a dedicated `StudentManager` State Manager class too.
	 */
	student: IStudent = {
		studentId: "std_001",
		firstName: "Weiling",
		lastName: "Tan",
		email: "weilingtan@student.nyp.edu.sg",
		assignments: [],
	};

	/** 
	 * For any student, the default is 1. But when we build up the student profile, we will include 
	 * their current semester. 
	 */
	currentSemester: number = 4;

	getCurrSemester() {
		return this.currentSemester;
	}

	getAssignments(): IStudentAssignment[] {

    return this.student.assignments;
  }

	async getAssignmentsFromDB(studentId: string, semester: number) {
    // Fetch assignments with all related data
    const { data: assignmentsData, error: assignmentsError } = await this.supabase
      .from('student_assignments')
      .select(`
				id,
        assignment_id,
        status,
        grade,
        submission_date,
				group_name,
        assignments!inner (
          assignment_id,
          title,
          description,
          due_date,
          max_credits,
          is_group,
          created_at,
          modules!inner (
            module_id,
            module_code,
            module_title,
            description,
            semester,
						lecturers (
							lecturer_id,
							first_name,
							last_name,
							email,
							title,
							department
						)
          )
        )
      `)
      .eq('student_id', studentId)
			.eq('assignments.modules.semester', semester);
    
    if (assignmentsError) {
      throw new Error(`Failed to fetch assignments: ${assignmentsError.message}`);
    }

		// Extract assignment IDs for tags query
		const assignmentIds = assignmentsData.map(stdAssignment => {
			const assignment = Array.isArray(stdAssignment.assignments)
				? stdAssignment.assignments[0]
				: stdAssignment.assignments;
			return assignment.assignment_id;
		});

		// Fetch all the assignment associated tags
		const { data: tagsData, error: tagsError } = await this.supabase
			.from('assignment_tags')
			.select(`
				assignment_id,
				tags(
					tag_id,
					tag_name,
					tag_color,
					description
				)
			`)
			.in('assignment_id', assignmentIds);
		
		if (tagsError) {
			throw new Error(`Failed to fetch tags: ${tagsError.message}`);
		}

		// Create a tags lookup map
		const tagsMap = new Map<string, ITag[]>();
		tagsData?.forEach(tagRelation => {
			const assignmentId = tagRelation.assignment_id;
			if (!tagsMap.has(assignmentId)) {
				tagsMap.set(assignmentId, []);
			}

			const tag = Array.isArray(tagRelation.tags)
				? tagRelation.tags[0]
				: tagRelation.tags;
			
			tagsMap.get(assignmentId)?.push({
				tagId: tag.tag_id,
				tagName: tag.tag_name,
				tagColor: tag.tag_color,
				description: tag.description
			});
		});

		// Important note: Because of the way the tables are named in Supabase, using a "plurals" 
		// naming convention, it might confuse future me, or other devs because that `assignments`
		// is supposed to be a single record in this context, but it can be easily confused as multiple 
		// records.
		assignmentsData.map(stdAssignment => {
			const assignment = Array.isArray(stdAssignment.assignments)
				? stdAssignment.assignments[0]
				: stdAssignment.assignments;

			const module = Array.isArray(assignment.modules)
				? assignment.modules[0]
				: assignment.modules;

			const lecturer = Array.isArray(module.lecturers)
				? module.lecturers[0]
				: module.lecturers;

			this.student.assignments.push({
				id: stdAssignment.id,
				status: stdAssignment.status,
				grade: stdAssignment.grade,
				submissionDate: stdAssignment.submission_date
					? new Date(stdAssignment.submission_date)
					: undefined,
				groupName: stdAssignment.group_name,
				assignment: {
					assignmentId: assignment.assignment_id,
					title: assignment.title,
					description: assignment.description,
					createdAt: new Date(assignment.created_at),
					dueDate: new Date(assignment.due_date),
					maxCredits: assignment.max_credits,
					isGroup: assignment.is_group,
					tags: tagsMap.get(assignment.assignment_id) || [],
					module: {
						moduleId: module.module_id,
						moduleCode: module.module_code,
						moduleTitle: module.module_title,
						moduleDesc: module.description,
						semester: module.semester,
						lecturer: {
							lecturerId: lecturer.lecturer_id,
							firstName: lecturer.first_name,
							lastName: lecturer.last_name,
							email: lecturer.email,
							title: lecturer.title,
							department: lecturer.department
						}
					}
				}
			})
		});
  }

	async getAssignmentsForLastSem(studentId: string, lastSemester: number) {
		// check for back filling
		if (this.hasBackFilled) {
			console.log("Already back filled assignments, skipping...");
			return;
		}

		// store current assignments
		const currentAssignments = [...this.student.assignments];

		// Clear and load preview semester
		this.student.assignments = [];
		await this.getAssignmentsFromDB(studentId, lastSemester);

		const completedPrevious = this.student.assignments;

		console.log("Current Assignments:", currentAssignments.length);
		console.log("Last Sem's Assignments:", completedPrevious.length);

		// Restore current + add previous completed
		this.student.assignments = [...currentAssignments, ...completedPrevious];

		this.hasBackFilled = true;
	}
}

let store: AceItStore | undefined;
export const initializeStore = () => {
	// Only create store on client side
	if (typeof window === "undefined") {
		return new AceItStore();	// Temporary server instance
	}

	// Client-side singleton
	if (!store) {
		store = new AceItStore();
	} else {
		console.log("♻️ Reusing existing store instance");
	}

	return store;
};