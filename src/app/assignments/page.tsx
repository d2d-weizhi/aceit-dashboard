"use client";

import AssignmentsListing from "@/components/ui/sections/assignments-listing";
import AssignmentDetails from "@/components/ui/sections/assignment-details";
import MilestonesListing from "@/components/ui/sections/milestones-listing";
import FeedbacksListing from "@/components/ui/sections/feedbacks-listing";
import { useStore } from "../providers";
import { IStudentAssignment } from "@/stores/state-interfaces";

interface IAssignmmentsPage {
	student_id: string;
}

export default function AssignmentsPage({ student_id = "std_001" }: IAssignmmentsPage) {
	const store = useStore();

	return (
		<>
			<div className="flex mb-6">
				<nav className="flex" aria-label="Breadcrumb">
					<ol className="flex items-center space-x-1 text-sm">
						<li className="breadcrumb-item">
							<a href="index.html" className="text-blue-600 hover:text-blue-800">Home</a>
						</li>
						<li className="breadcrumb-item">
							Assignments
						</li>
					</ol>
				</nav>
			</div>
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold text-gray-800"
					onClick={() =>  {
						if (store.student.assignments.length > 0) {
							store.student.assignments.map(studentAssignment => {
								console.log("Module:", studentAssignment.assignment.module.moduleCode, " Title:", studentAssignment.assignment.title);
							});
						} else {
							store.getAssignmentsFromDB(student_id);
						}
					}}
				>My Assignments</h1>
				<div>
					<button
						className="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-lg text-sm mr-2 hover:bg-gray-50">
						<span className="flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
								stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
									d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z">
								</path>
							</svg>
							Filter
						</span>
					</button>
					<button className="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
						<span className="flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
								stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
									d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path>
							</svg>
							Sort
						</span>
					</button>
				</div>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<div className="lg:col-span-2">

					{/* Assignments Listing */}
					<AssignmentsListing student_id={student_id} />

				</div>
				<div className="lg:col-span-1">

					{/* Assignment Details */}
					<AssignmentDetails assignment_id="asn21" />

					{/* Milestones Listing */}
					<MilestonesListing student_id={student_id} />

					{/* Feedbacks Listing */}
					<FeedbacksListing student_id={student_id} />

				</div>
			</div>
		</>
	);
}