namespace Subjects {
    export class Subject {
        teacher: Subjects.Teacher;

        // setter method
        set setTeacher(teacher: Subjects.Teacher) {
            this.teacher = teacher;
        }
    }
}