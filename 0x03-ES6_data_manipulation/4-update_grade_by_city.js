export default function updateStudentGradeByCity(ListStudents, city, newGrades) {
    const defaultGrade = { grade: 'N/A' };
    if (ListStudents instanceof Array) {
        return ListStudents
        .filter((student) => student.location === city)
        .map((student) => ({
            id: student.id,
            firstName: student.firstName,
            location: student.location,
            grade: (newGrades.find((grade) => grade.id === student.id) || defaultGrade).grade,
        }));
    }
    return [];
}