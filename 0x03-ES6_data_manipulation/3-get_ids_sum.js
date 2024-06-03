export default function getStudentIdsSum(ListStudents) {
  if (ListStudents instanceof Array) {
    return ListStudents.reduce(
      (prevStudent, currStudent) => prevStudent.id || prevStudent + currStudent.id,
      0,
    );
  }
  return [];
}
