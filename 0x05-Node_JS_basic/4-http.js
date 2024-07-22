// Creating a small HTTP server using Node's HTTP module
const http = require('http');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

app.on('request', (req, res) => {
  const response = 'Hello Holberton School!';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', response.length);
    res.statusCode = 200;
    res.write(Buffer.from(response));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

module.exports = app;