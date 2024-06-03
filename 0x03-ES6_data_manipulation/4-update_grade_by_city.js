export default function updateStudentGradeByCity(ListStudents, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };
  if (ListStudents instanceof Array) {
    return ListStudents
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades.filter((grade) => grade.studentId === student.id).pop() || defaultGrade).grade
      }));
  }
  return [];
}
