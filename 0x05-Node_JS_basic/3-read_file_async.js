// Reading a file asynchronously with Node JS
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(Error('Cannot load the database'));
      return;
    }
    const students = {};
    const dbFields = data.split('\n')[0].split(',');
    const studentNames = dbFields.slice(0, dbFields.length - 1);

    for (const line of data.split('\n').slice(1)) {
      const studentData = line.split(',');
      const studentValues = studentData.slice(0, studentData.length - 1);
      const field = studentData[studentData.length - 1];
      if (!Object.keys(students).includes(field)) {
        students[field] = [];
      }
      const student = studentValues.map((value, index) => [value, studentNames[index]]);
      students[field].push(Object.fromEntries(student));
    }

    const totalStudents = Object.values(students).reduce((acc, val) => (acc || 0).length + val.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, value] of Object.entries(students)) {
      const names = value.map((student) => student.name).join(', ');
      console.log(`Number of students in ${field}: ${value.length}. List: ${names}`);
    }
    resolve();
  });
});

module.exports = countStudents;