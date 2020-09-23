// console.log("Hello World");
// require() is used to load and cache JavaScript  modules
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// hhtp.createServer() method turns our computer into an HTTP Server.
// https.createServer()  creates an HTTP Server Object
// http Server Object can listen to ports on our cmputer and execute a function, a requestListener, each time a request is made


// Syntax - http.createServer(requestListener);
// requestListener - optional. Specifies a function to be executed 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader() - native method of Node.js and res.header() is an alias of res.set() method  from Express framework
//  both sets the Headers HTTP response
// res.setHeader - allows to set a singular header
// res.header() - allows to set multiple headers
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});