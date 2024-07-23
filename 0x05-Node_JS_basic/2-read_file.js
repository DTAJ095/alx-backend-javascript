// Reading a file synchronously with Node JS
const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const data = fs
    .readFileSync(path, { encoding: 'utf-8' })
    .toString('utf-8')
    .trim()
    .split('\n');
  const students = {};
  const dbFields = data[0].split(',');
  const studentNames = dbFields.slice(0, dbFields.length - 1);

  for (const line of data.slice(1)) {
    const studentRecord = line.split(',');
    const studentValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];
    if (!Object.keys(students).includes(field)) {
      students[field] = [];
    }
    const studentEntries = studentNames
      .map((value, idx) => [value, studentValues[idx]]);
    students[field].push(Object.fromEntries(studentEntries));
  }

  const totalStudents = Object
    .values(students)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, value] of Object.entries(students)) {
    const names = value.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${value.length}. List: ${names}`);
  }
};

module.exports = countStudents;
