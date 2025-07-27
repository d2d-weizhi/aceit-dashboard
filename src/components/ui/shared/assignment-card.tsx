import { observer } from "mobx-react-lite";
import { useStore } from "@/app/providers";
import { IStudentAssignment } from "@/stores/state-interfaces";
import { convertGradeToLetter, formatAssignmentDateForDisplay, formatDueDate } from "@/lib/helper";
import { useState, useEffect } from "react";

interface IAssignmentCardProps {
  studentAssignment: IStudentAssignment;
}

export default observer(function AssignmentCard({
  studentAssignment,
}: IAssignmentCardProps) {
  const store = useStore();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    async function getProgress(assignmentId: string) {
      const Aprogress = await store.getAssignmentProgress(assignmentId);
      setProgress(Aprogress);
    }

    getProgress(studentAssignment.assignment.assignmentId);
  }, []);

  return (
    <div className="assignment-card bg-white border border-gray-200 rounded-lg p-5 mb-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          {studentAssignment.assignment.tags?.slice(0, 3).map((tag) => (
            <span 
              key={tag.tagId}
              className="px-2 py-1 text-xs rounded-full mr-2"
              style={{
                backgroundColor: `${tag.tagColor}20`,
                color: tag.tagColor,
                borderColor: tag.tagColor,
                border: "1px solid"
              }}
            >
              {tag.tagName}
            </span>
          ))}
          <h3 className="text-lg font-medium mt-2">{studentAssignment.assignment.title}</h3>
        </div>
        {studentAssignment.status === "graded" ? (
          <div className="flex items-center">
            {studentAssignment.grade! >= 85 && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-1" viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
            )}
            <span 
              className={`font-bold ${convertGradeToLetter(studentAssignment.grade || 0).color}`}>
              {convertGradeToLetter(studentAssignment.grade!).letter}
            </span>
          </div>
        ) : (
          <span className="text-orange-500 text-sm font-medium">
            {formatDueDate(studentAssignment.assignment.dueDate)}
          </span>
        )}
          
      </div>
      <p className="text-gray-600 text-sm mb-4">
        {studentAssignment.assignment.description}
      </p>
      {studentAssignment.status === "ongoing" && (
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium">{Math.floor(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="progress-bar"
              style={{
                backgroundColor: "var(--aceit-gradient-ocean-flow)",
                width: `${Math.floor(progress)}%`,
              }}
            ></div>
          </div>
        </div>
      )}

      {studentAssignment.status === "submitted" && (
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium">40%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="progress-bar bg-yello-400"
              style={{
                width: `100%`,
              }}
            ></div>
          </div>
        </div>
      )}
        
      <div className="flex justify-between items-center">
        {/* We use isGroup here for conditional rendering */}
        {studentAssignment.assignment.isGroup && studentAssignment.status !== "graded" ? (
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
            {studentAssignment.status === "graded" && (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-1" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm text-gray-500">
                  Completed on {formatAssignmentDateForDisplay(studentAssignment.submissionDate || studentAssignment.assignment.dueDate)}
                </span>
              </>
            )}

            {studentAssignment.status === "submitted" && (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-1" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm text-gray-500">
                  Submitted on {formatAssignmentDateForDisplay(studentAssignment.submissionDate || studentAssignment.assignment.dueDate)}
                </span>
              </>
            )}

            {studentAssignment.status === "ongoing" && (
              <>
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
                <span className="text-sm text-gray-500">
                  {formatAssignmentDateForDisplay(studentAssignment.assignment.dueDate)}
                </span>
              </>
            )}
          </div>
        )}
        <div className="flex items-center space-x-2">
          <button className="aceit-button-primary text-white px-4 py-2 rounded-lg text-sm">
            View Details
          </button>
          {studentAssignment.status === "ongoing" && (
            <button className="aceit-button-outline px-4 py-2 rounded-lg text-sm text-blue-600 hover:text-white">
              Go to Tasks
            </button>
          )}
        </div>
      </div>
    </div>
  );
});
