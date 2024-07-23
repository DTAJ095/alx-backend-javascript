// Reading a file asynchronously with Node JS
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const fileLines = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const students = {};
      const dbFields = fileLines[0].split(',');
      const studentNames = dbFields
        .slice(0, dbFields.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentValues = studentRecord
          .slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(students).includes(field)) {
          students[field] = [];
        }
        const studentEntries = studentNames
          .map((propName, idx) => [propName, studentValues[idx]]);
        students[field].push(Object.fromEntries(studentEntries));
      }

      const totalStudents = Object
        .values(students)
        .reduce((pre, cur) => (pre || []).length + cur.length);
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(students)) {
        const names = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${names}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
