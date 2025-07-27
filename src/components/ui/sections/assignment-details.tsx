interface IAssignmentDetailsProps {
  assignment_id: string;
}

export default function AssignmentDetails({
  assignment_id,
}: IAssignmentDetailsProps) {
  return (
    <div
      id="assignment-details"
      className="assignment-details bg-white rounded-xl shadow-sm p-6 mb-6"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Assignment Details
        </h2>
        <button
          id="close-details"
          className="text-gray-400 hover:text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-2">
          <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
            Group Project
          </span>
          <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
            Marketing
          </span>
        </div>
        <h3 className="text-lg font-medium">Social Media Marketing Campaign</h3>
        <p className="text-sm text-gray-600 mt-2">
          Develop a comprehensive social media marketing strategy for a new
          product launch, including content calendar, platform selection, and
          KPI measurement plan.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="font-medium text-gray-800 mb-3">Team Members</h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="team-member flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">
              JL
            </div>
            <div>
              <p className="font-medium">Jason Lee</p>
              <p className="text-xs text-gray-500">Content Strategy</p>
            </div>
          </div>
          <div className="team-member flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mr-3">
              MT
            </div>
            <div>
              <p className="font-medium">Maria Tan</p>
              <p className="text-xs text-gray-500">Analytics</p>
            </div>
          </div>
          <div className="team-member flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold mr-3">
              KW
            </div>
            <div>
              <p className="font-medium">Kevin Wong</p>
              <p className="text-xs text-gray-500">Creative Design</p>
            </div>
          </div>
          <div className="team-member flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold mr-3">
              CT
            </div>
            <div>
              <p className="font-medium">Chloe Tan</p>
              <p className="text-xs text-gray-500">Project Lead</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium text-gray-800 mb-3">Current Tasks</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 rounded mr-3"
              />
              <span className="text-sm">Complete audience research report</span>
            </div>
            <span className="text-xs text-gray-500">Due tomorrow</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 rounded mr-3"
              />
              <span className="text-sm line-through text-gray-400">
                Platform selection analysis
              </span>
            </div>
            <span className="text-xs text-gray-500">Completed</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 rounded mr-3"
              />
              <span className="text-sm">Draft content calendar</span>
            </div>
            <span className="text-xs text-gray-500">Due in 2 days</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 rounded mr-3"
              />
              <span className="text-sm">Create KPI measurement framework</span>
            </div>
            <span className="text-xs text-gray-500">Due in 3 days</span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-medium text-gray-800">Progress</h4>
          <span className="font-medium">65%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div className="progress-bar" style={{ width: "65%" }}></div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              ></path>
            </svg>
            Due May 15, 2023
          </div>
          <button
            id="teamChatButton"
            className="aceit-button-primary text-white px-4 py-2 rounded-lg text-sm"
          >
            Team Chat
          </button>
        </div>
      </div>
    </div>
  );
}
