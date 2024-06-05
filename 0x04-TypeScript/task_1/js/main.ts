/* Teacher's interface */
export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [newIndex: string]: any;
}

/* Directors interface */
export interface Directors extends Teacher {
    numberOfReports: number;
}

/* PrintTeacher function */
export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

/* Interface for printTeacher function */
export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

/* StudentClass class */
export class StudentClass {
    private _firstName!: string;
    private _lastName!: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this._firstName;
    }
}
/* StudentConstructorInterface and StudentClassInterface interfaces */
export interface StudentConstructorInterface {
    new(firstName: string, lastName: string): StudentClass;
}
export interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}