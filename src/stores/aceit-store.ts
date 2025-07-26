import { makeObservable } from "mobx";
import { createClient } from '@/utils/supabase/client';
import { IAssignment, IStudent, IStudentAssignment } from "./state-interfaces";

export class AceItStore {
  private supabase = createClient();

	constructor() {
		makeObservable(this);
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

	getAssignments(): IStudentAssignment[] {

    return this.student.assignments;
  }

	async getAssignmentsFromDB(studentId: string) {
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
        assignments (
          assignment_id,
          title,
          description,
          due_date,
          max_credits,
          is_group,
          created_at,
          modules (
            module_id,
            module_code,
            module_title,
            description,
            semester
          )
        )
      `)
      .eq('student_id', studentId);
    
    if (assignmentsError) {
      throw new Error(`Failed to fetch assignments: ${assignmentsError.message}`);
    }

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

			this.student.assignments.push({
				id: stdAssignment.id,
				status: stdAssignment.status,
				grade: stdAssignment.grade,
				submissionDate: stdAssignment.submission_date,
				groupName: stdAssignment.group_name,
				assignment: {
					assignmentId: assignment.assignment_id,
					title: assignment.title,
					description: assignment.description,
					createdAt: new Date(assignment.created_at),
					dueDate: new Date(assignment.due_date),
					maxCredits: assignment.max_credits,
					isGroup: assignment.is_group,
					module: {
						moduleId: module.module_id,
						moduleCode: module.module_code,
						moduleTitle: module.module_title,
						moduleDesc: module.description,
						semester: module.semester
					}
				}
			})
		});
  }
}

let store: AceItStore | undefined;
export const initializeStore = () => {
	const _store = store ?? new AceItStore();
	if (typeof window === "undefined") return _store;
	if (!store) store = _store;
	return _store;
}