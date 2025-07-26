/**
 * Represents a single record of the `lecturer` table.
 * 
 * @property lecturerId {@type string}	The unique id of each lecturer record.
 * @property firstName {@type string}		Lecturer's first name.
 * @property lastName {@type string}		Lecturer's last name.
 * @property email {@type string}				Lecturer's work email.
 * @property title {@type string}				Official work title (e.g. Senior Lecturer)
 * @property department {@type string}	Lecturer's department (e.g. School of Design & Media)
 * @remarks
 * - We can expand this interface in the future when adding the staff portal expansion.
 * - Also possible to include login details.
 * - we don't include the `created_at` field here because it has no purpose from a data model perspective.
 * 
 * @see {@link IModule}
 * 
 * @author Chen Weizhi
 * @since v1.0.0
 * @updated 2025-07-26
 * @category State Interfaces
 * @interface
 */
export interface ILecturer {
	/** Each lecturer's unique record id */
	lecturerId: string;

	/** Each lecturer's first name. */
	firstName: string;

	/** Each lecturer's last name. */
	lastName: string;

	/** Each lecturer's work/school email. */
	email: string;

	/** Each lecturer's official title (e.g. Senior Lecturer) */
	title: string;

	/** The lecturer's department (e.g. School of Design & Media) */
	department: string;
}

/**
 * The individual modules that are taught by a particular course/program.
 * 
 * @property moduleId {@type string}			The unique id of each module.
 * @property moduleCode {@type string} 		The unique code that represents each module (e.g. "DX1111", or "IT2222")
 * @property moduleTitle {@type string}		The full title of each module.
 * @property moduleDesc {@type string}		The full description of each module and what is covered.
 * @property semester {@type number}			Represents the individual semester in sequential order.
 * @property lecturer {@type ILecturer}		The assignment lecturer teaching this module. {@link ILecturer}
 *  
 * @remarks
 * - next time we can link this up to our lecturers too, what modules have they taught before.
 * - we don't include the `created_at` field here because it has no purpose from a data model perspective.
 * 
 * @see {@link IModule}
 * 
 * @author Chen Weizhi
 * @since v1.0.0
 * @updated 2025-07-26
 * @category State Interfaces
 * @interface
 */
export interface IModule {
	/** The unique identifier for each module record. */
	moduleId: string;

	/** The unique string for representing each module (e.g. DX1212) */
	moduleCode: string;

	/** The full title of each module. */
	moduleTitle: string;

	/** The description of what the module is about. */
	moduleDesc: string;

	/** The semester that this module will be taught/covered. */
	semester: number;

	/** The assigned lecturer that will be teaching this module. */
	lecturer?: ILecturer;
}

/**
 * Represents each `student` record.
 * 
 * @property studentId {@type string}									The unique identifier for each student record.
 * @property firstName {@type string}									The student's first name.
 * @property lastName {@type string}									The student's last name.
 * @property email {@type string}											The student's school email.
 * @property assignments {@type IStudentAssignment[]}	A list of all the assignments this student has, both past and present. 
 * 																										See {@link IAssignment} for more details.
 * 
 * @remarks
 * - We will expand those properties and table columns later when we get to the student profile/details page.
 * - we don't include the `created_at` field here because it has no purpose from a data model perspective.
 * 
 * @see {@link IAssignment}
 * 
 * @author Chen Weizhi
 * @since v1.0.0
 * @updated 2025-07-26
 * @category State Interfaces
 * @interface
 */
export interface IStudent {
	/** The unique identifier for each student record. */
	studentId: string;

	/** Student's first name */
	firstName: string;

	/** Student's last name */
	lastName: string;

	/** Student's school issued email */
	email: string;

	/** 
	 * An array of all the student's assignments, both past and present.
	 * See {@link IStudentAssignment} 
	 */
	assignments: IStudentAssignment[];
}

/**
 * Represents each record from the `tags` table.
 * 
 * @property tagId {@type string}				The unique identifier of each tag record.
 * @property tagName {@type string}			The name of the tag.
 * @property tagColor {@type string}		The hex colour value for the tag pill (e.g. `"#f6f189"`)
 * @property description {@type string}	The description of each tag.
 * 
 * @see {@link IAssignment}, {@link ITask}
 * 
 * @author Chen Weizhi
 * @since v1.0.0
 * @updated 2025-07-26
 * @category State Interfaces
 * @interface
 */
export interface ITag {
	tagId: string;
	tagName: string;
	tagColor: string;
	description: string;
}

/**
 * Represents a single Assignment record.
 * 
 * @property assignmentId {@type string}		The unique identifier for each assignment record.
 * @property module {@type IModule}					The module that this assignment belongs to. See {@link IModule} for more details.
 * @property title {@type string}						The lecturer assigned title.
 * @property description {@type string}			The usually lengthy description provided for each assignment.
 * @property createdAt {@type Date}					This is important here because it is the date the assignment is issued (not start date).
 * @property dueDate {@type Date}						This is the final deadline for the assignment's submission.
 * @property maxCredits {@type number}			In some schools, it is also often referred to as max credits.
 * @property isGroup {@type boolean}				Is this a group assignment or individual assignment?
 * @property tags {@type ITag[]}						An array of the associated tags. See {@link ITag}.
 * 
 * @remarks
 * - when the table was first created, a status column was added, and now removed to avoid confusion with the status from `student_assignments`.		
 * 
 * @see {@link IModule}, {@link IStudent}, {@link IStudentAssignment}, {@link ITag}
 * 
 * @author Chen Weizhi
 * @since v1.0.0
 * @updated 2025-07-26
 * @category State Interfaces
 * @interface
 */
export interface IAssignment {
	/** The unique identifier for each assignment record. */
	assignmentId: string;

	/** 
	 * The module that this assignment belongs to.
	 * See {@link IModule} for more details.
	 */
	module: IModule;

	/** The lecturer assigned title for the assignment. */
	title: string;

	/** The usually lengthy description provided for each assignment. */
	description: string;

	/** This is important here because it is the date the assignment is issued (not start date). */
	createdAt: Date;

	/** This is the final deadline for the assignment's submission. */
	dueDate: Date;

	/** In some schools, it is also often referred to as max credits. */
	maxCredits: number;

	/** Is this a group assignment or individual assignment? */
	isGroup: boolean;

	/** 
	 * Up to 3 tags can be associated with each Assignment.
	 * See {@link ITag}. 
	 */
	tags?: ITag[];
}

/**
 * Represents each of the `student_assignments` records. But in a data modeling format, we only need the assignment and not the 
 * student's details. Students will have an array of this type.
 * 
 * @property id {@type Number} 									The unique identifier of each record.
 * @property assignment {@type IAssignment} 		A single instance of IAssignment. See {@link IAssignment}.
 * @property tasks {@type ITask[]}							@optional An array of all the tasks that have been added to this assignment.
 * 																							See {@link ITask}.
 * @property submissionDate {@type Date}				@optional The final submission deadline.
 * @property grade {@type Number}								@optional Student's final grade for this assignment.
 * @property status {@type string}							Has one of three values: "ongoing", "submitted", "completed"
 * @property groupName {@type string}						@optional Only if this assignment is a group assignment.
 * 
 * @see {@link IStudent}, {@link IAssignment}, {@link ITask}
 * 
 * @author Chen Weizhi
 * @since v1.0.0
 * @updated 2025-07-26
 * @category State Interfaces
 * @interface
 */
export interface IStudentAssignment {
	/** The unique identifier of each record. */
	id: Number;

	/**
	 * A single instance of IAssignment.
	 * See {@link IAssignment}.
	 */
	assignment: IAssignment;

	/**
	 * Contains an array of all the tasks that have been added to this assignment.
	 * @optional
	 * See {@link ITask}.
	 */
	tasks?: ITask[];

	/**
	 * The final submission deadline.
	 * @optional
	 */
	submissionDate?: Date;

	/**
	 * Student's final grade for this assignment.
	 * @optional
	 */
	grade?: Number;

	/**
	 * Has one of three values: "ongoing", "submitted", "completed"
	 */
	status: string;

	/**
	 * Only if this assignment is a group assignment.
	 * @optional
	 */
	groupName?: string;
}

/**
 * Represents a single record from the `tasks` table.
 * 
 * @property taskId {@type string}				The unique identifier of each task record.
 * @property studentId {@type string}			The student assigned to this task.
 * @property taskTitle {@type string}			The title of the task.
 * @property description {@type string} 	The detailed description of the task.
 * @property tags {@type ITag[]}					@optional 5 tags associated with this task. See {@link ITag}.
 * @property startDate {@type Date}				The date the task was started.
 * @property dueDate {@type Date}					Student's estimated completion date for this task.
 * @property finishedDate {@type Date}		The actual date the task was completed.
 * @property status {@type string}				The status of the task. Used for filtering/sorting in KanBan view.
 * @property priority {@type string}			@optional Possible values include `"High"`, `"Medium"`, `"Low"`.
 * @property createdAt {@type Date}				The date the task was added.
 * @property isMilestone {@type boolean}	@optional Is this a milestone task?
 * 
 * @see {@link IStudentAssignment}, {@link ITag}
 * 
 * @author Chen Weizhi
 * @since v1.0.0
 * @updated 2025-07-26
 * @category State Interfaces
 * @interface
 */
export interface ITask {
	/** The unique identifier of each task record. */
	taskId: string;

	/** The student assigned to this task. */
	studentId: string;

	/** The title of the task. */
	taskTitle: string;

	/** The detailed description of the task. */
	description: string;

	/**
	 * 5 tags associated with this task.
	 * @optional
	 * See {@link ITag}.
	 */
	tags?: ITag[];

	/** The date the task was started. */
	startDate: Date;

	/** Student's estimated completion date for this task. */
	dueDate: Date;

	/** The actual date the task was completed. */
	finishedDate: Date;

	/** The status of the task. Used for filtering/sorting in KanBan view. */
	status: string;

	/**
	 * Possible values include `"High"`, `"Medium"`, `"Low"`.
	 * @optional
	 */
	priority?: string;

	/**
	 * The date the task was added.
	 */
	createdAt: Date;

	/**
	 * Is this a milestone task?
	 * @optional
	 */
	isMilestone?: boolean;
}