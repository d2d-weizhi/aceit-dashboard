import { observer } from "mobx-react-lite";
import { useStore } from "@/app/providers";
import { IStudentAssignment } from "@/stores/state-interfaces";

interface IAssignmentCardProps {
  studentAssignment: IStudentAssignment;
}

export default observer(function AssignmentCard({
  studentAssignment,
}: IAssignmentCardProps) {
  return (
    <div className="assignment-card bg-white border border-gray-200 rounded-lg p-5 mb-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
            Economics
          </span>
          <h3 className="text-lg font-medium mt-2">{studentAssignment.assignment.title}</h3>
        </div>
        <span className="text-orange-500 text-sm font-medium">
          Due in 5 days
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        {studentAssignment.assignment.description}
      </p>
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Progress</span>
          <span className="font-medium">40%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="progress-bar"
            style={{
              width: `40%`,
            }}
          ></div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        {/* We use isGroup here for conditional rendering */}
        {studentAssignment.assignment.isGroup ? (
          <div className="flex -bg-conic-120space-x-2">
            <div className="h-8 w-8 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
              JL
            </div>
            <div className="h-8 w-8 rounded-full border-2 border-white bg-green-500 flex items-center justify-center text-white text-xs font-bold">
              MT
            </div>
            <div className="h-8 w-8 rounded-full border-2 border-white bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
              KW
            </div>
            <div className="h-8 w-8 rounded-full border-2 border-white bg-yellow-500 flex items-center justify-center text-white text-xs font-bold">
              CT
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-sm text-gray-500">May 18, 2023</span>
          </div>
        )}
        <div className="flex items-center space-x-2">
          <button className="aceit-button-primary text-white px-4 py-2 rounded-lg text-sm">
            View Details
          </button>
          <button className="aceit-button-outline px-4 py-2 rounded-lg text-sm text-blue-600 hover:text-white">
            Go to Tasks
          </button>
        </div>
      </div>
    </div>
  );
});
