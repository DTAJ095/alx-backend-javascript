// creating a more complex HTTP server with express
const express = require('express');
const fs = require('fs');

const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : 'database.csv';
const app = express();

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dataPath) {
    fs.readFile(dataPath, (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const results = [];
        const fileLines = data.toString('utf-8').trim().split('\n');
        const students = {};
        const dbFields = fileLines[0].split(',');
        const studentNames = dbFields.slice(
          0,
          dbFields.length - 1,
        );

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentValues = studentRecord.slice(
            0,
            studentRecord.length - 1,
          );
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(students).includes(field)) {
            students[field] = [];
          }
          const studentEntries = studentNames.map((name, idx) => [
            name,
            studentValues[idx],
          ]);
          students[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(students).reduce(
          (pre, cur) => (pre || []).length + cur.length,
        );
        results.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(students)) {
          results.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        resolve(results.join('\n'));
      }
    });
  }
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const globalResponse = ['This is the list of our students'];

  countStudents(DB_FILE)
    .then((report) => {
      globalResponse.push(report);
      const responseText = globalResponse.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    })
    .catch((err) => {
      globalResponse.push(err instanceof Error ? err.message : err.toString());
      const responseText = globalResponse.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
