export default function getStudentsByLocation(ListStudents, city) {
  if (ListStudents instanceof Array) {
    return ListStudents.filter((student) => student.location === city);
  }
  return [];
}
