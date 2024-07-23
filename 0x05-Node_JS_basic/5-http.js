// Creating a more complex HTTP server using Node's HTTP module
const http = require('http');
const fs = require('fs'); // Import the File System module

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : 'database.csv';

const countStudents = (dBPath) => new Promise((resolve, reject) => {
  if (!dBPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dBPath) {
    fs.readFile(dBPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const results = [];
        const fileLines = data.toString('utf-8').trim().split('\n');
        const students = {};
        const dbFields = fileLines[0].split(',');
        const studentNames = dbFields.slice(
          0,
          dbFields.length - 1
        );

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentValues = studentRecord.slice(
            0,
            studentRecord.length - 1
          );
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(students).includes(field)) {
            students[field] = [];
          }
          const studentEntries = studentNames.map((name, index) => [
            name,
            studentValues[index]
          ]);
          students[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(students).reduce(
          (pre, cur) => (pre || []).length + cur.length
        );
        results.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(students)) {
          results.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', ')
          ].join(' '));
        }
        resolve(results.join('\n'));
      }
    });
  }
});

const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler (_, res) {
      const responseText = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    },
  },
  {
    route: '/students',
    handler (_, res) {
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
    },
  },
];

app.on('request', (req, res) => {
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
