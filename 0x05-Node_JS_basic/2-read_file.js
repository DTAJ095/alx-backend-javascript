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
    .readFileSync(path, { encoding: 'utf8' })
    .toString('utf-8')
    .trim()
    .split('\n')
    const students = {};
    const dbFields = data[0].split(',');
    const studentNames = dbFields.slice(0, dbFields.length - 1);

    for (const line in data.slice(1)) {
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
};

module.exports = countStudents;