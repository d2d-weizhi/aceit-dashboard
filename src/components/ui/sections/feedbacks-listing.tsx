interface IFeedbacksListingProps {
	student_id: string;
}

export default function FeedbacksListing({ student_id }: IFeedbacksListingProps) {
	return (
		<div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Latest Feedback</h2>
      <div className="space-y-3">
				{/* We will map and loop over upcoming milestones across ongoing assignments */}
			</div>
		</div>
	);
}