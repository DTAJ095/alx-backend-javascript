// creating a more complex HTTP server with express
const express = require('express');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const DB_FILE = process.argv.length > 2 ? process.argv[2] : 'database.csv';
const app = express();

const countStudents = (path) => new Promise((resolve, reject) => {
    if (!path) {
        reject(Error('Cannot load the database'));
    }
    if (path) {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(Error('Cannot load the database'));
                return;
            }
            if (data) {
                const results = [];
                const lines = data.toString('utf-8').trim().split('\n');
                const students = {};
                const dbFields = lines[0].split(',');
                const studentNames = dbFields.slice(0, dbFields.length - 1);

                for (const line of lines.slice(1)) {
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
                results.push(`Number of students: ${totalStudents}`);
                for (const [field, value] of Object.entries(students)) {
                    const names = value.map((student) => student.name).join(', ');
                    results.push(`Number of students in ${field}: ${value.length}. List: ${names}`);
                }
                resolve(results.join('\n'));
            }
        });
    }
});

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    const response = ['This is the list of our students'];
    countStudents(DB_FILE)
        .then((data) => {
            response.push(data);
            const responseText = response.join('\n');
            res.setHeader('Content-Type', 'text/plain');
            res.setHeader('Content-Length', responseText.length);
            res.statusCode = 200;
            res.write(Buffer.from(responseText));
        })
        .catch((error) => {
            response.push(error instanceof Error ? error.message : error.toString());
            const responseText = response.join('\n');
            res.setHeader('Content-Type', 'text/plain');
            res.setHeader('Content-Length', responseText.length);
            res.statusCode = 200;
            res.write(Buffer.from(responseText));
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}/`);
});

module.exports = app;