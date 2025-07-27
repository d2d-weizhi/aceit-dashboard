export function formatDueDate(dueDate: Date): string {
  const now = new Date();
  const diffInMonths = dueDate.getTime() - now.getTime();
  const diffInDays = Math.ceil(diffInMonths / (1000 * 60 * 60 * 24));

  if (diffInDays < 0) {
    return "Overdue";
  } else if (diffInDays == 0) {
    return "Due Today";
  } else if (diffInDays == 1) {
    return "Due Tomorrow";
  } else if (diffInDays <= 7) {
    return "Due in ${diffInDays} days";
  } else if (diffInDays <= 30) {
    const weeks = Math.ceil(diffInDays / 7);
    return weeks === 1 ? "Due in 1 week" : `Due in ${weeks} weeks`;
  } else {
    const months = Math.ceil(diffInDays / 30);
    return months === 1 ? "Due in 1 month" : `Due in ${months} months`;
  }
}

export function convertGradeToLetter(numericGrade: number): { letter: string, color: string } {
  if (numericGrade >= 85) {
    return { letter : "A", color: "text-green-600" };
  } else if (numericGrade >= 75) {
    return { letter: "B", color: "text-blue-600" };
  } else if (numericGrade >= 65) {
    return { letter: "C", color: "text-yellow-600" };
  } else if (numericGrade >= 50) {
    return { letter: "D", color: "text-orange-600" };
  } else
    return { letter: "F", color: "text-red-600" };
}

export function formatAssignmentDateForDisplay(date:Date): string {
  return date.toLocaleDateString("en-SG", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}