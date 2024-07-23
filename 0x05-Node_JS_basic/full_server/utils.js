import fs from 'fs';

/**
 * read the database file
*/
const readDatabase = (path) => new Promise((resolve, reject) => {
    if (!path) {
        reject(Error('Cannot load the database'));
    }
    if (typeof path !== 'string') {
        reject(Error('Cannot load the database'));
    }
    if (path === '') {
        reject(Error('Cannot load the database'));
    }
    if (path) {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(Error('Cannot load the database'));
                return;
            }
            if (data) {
                const lines = data.toString('utf-8').trim().split('\n');
                const students = {};
                const dbFields = lines[0].split(',');
                const studentNames = dbFields.slice(0, dbFields.length - 1);

                for  (const line of lines.slice(1)) {
                    const studentData = line.split(',');
                    const studentValues = studentData.slice(0, studentData.length - 1);
                    const field = studentData[studentData.length - 1];
                    if (!Object.keys(students).includes(field)) {
                        students[field] = [];
                    }
                    const student = studentValues.map((value, index) => [value, studentNames[index]]);
                    students[field].push(Object.fromEntries(student));
                }
                resolve(students);
            }
        });
    }
});

export default readDatabase;
module.exports = readDatabase;