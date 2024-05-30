export default class HolbertonCourse {
  constructor(name, length, students) {
    // Validate attributes type during object creation
    if (Object.getPrototypeOf(name) !== String.prototype) {
      throw TypeError('Name must be a string');
    }
    if (Object.getPrototypeOf(length) !== Number.prototype) {
      throw TypeError('Length must be a number');
    }
    if (Object.getPrototypeOf(students) !== Array.prototype) {
      throw TypeError('Students must be an array');
    }
    students.forEach((student) => {
      if (Object.getPrototypeOf(student) !== String.prototype) {
        throw TypeError('Students must be an array of strings');
      }
    });

    // Assign attributes
    this._name = name;
    this._length = length;
    this.students = students;
  }

  // setter for name
  set name(newName) {
    if (Object.getPrototypeOf(newName) !== String.prototype) {
      throw TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // setter for length
  set length(newLength) {
    if (Object.getPrototypeOf(newLength) !== Number.prototype) {
      throw TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // setter for students
  set students(newStudents) {
    if (Object.getPrototypeOf(newStudents) !== Array.prototype) {
      throw TypeError('Students must be an array');
    }
    newStudents.forEach((student) => {
      if (Object.getPrototypeOf(student) !== String.prototype) {
        throw TypeError('Students must be an array of strings');
      }
    });
    this._students = newStudents;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // getter for length
  get length() {
    return this._length;
  }

  // getter for students
  get students() {
    return this._students;
  }
}
