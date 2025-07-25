interface IAssignmentsListingProps {
  student_id: string;
}

export default function AssignmentsListing({
  student_id,
}: IAssignmentsListingProps) {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Ongoing Assignments
        </h2>

        {/* With our assignments array, we will map and loop over it to render the on-going assignments */}
      </div>

      {/* Submitted and Completed Assignments */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Submitted &amp; Completed Assignments
        </h2>

        {/* With our assignments array, we will map and loop over it to render the submitted & completed assignments */}
      </div>
    </div>
  );
}
