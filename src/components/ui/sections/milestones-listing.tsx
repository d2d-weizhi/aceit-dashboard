interface IMilestonesListingProps {
	student_id: string;
}

export default function MilestonesListing({ student_id }: IMilestonesListingProps) {
	return (
		<div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Milestones</h2>
      <div className="space-y-3">
				{/* We will map and loop over upcoming milestones across ongoing assignments */}
			</div>
		</div>
	);
}