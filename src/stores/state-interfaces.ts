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
	moduleId: string;
	moduleCode: string;
	moduleTitle: string;
	moduleDesc: string;
	semester: number;
	lecturer: ILecturer;
	createdAt: Date;
}