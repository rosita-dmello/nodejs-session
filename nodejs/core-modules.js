// File System Module
const fs = require('fs');

// Create a new, empty file using the open() method
fs.open('mynewfile1.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
}); 

// Append "This is my text." to the end of the file "mynewfile1.txt":
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
}); 

// <------------------------------------------------------------------------>



// Path Module
const path = require('path');

const filePath = '/user/local/file.txt';
console.log(path.basename(filePath)); // Output: file.txt
console.log(path.extname(filePath)); // Output: .txt
console.log(path.join('/user', 'local', 'file.txt')); // Output: /user/local/file.txt

// <------------------------------------------------------------------------>



// HTTP Module
const http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080 

// <------------------------------------------------------------------------>



// Events Module
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Listener for the 'greet' event
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Emitting the 'greet' event
myEmitter.emit('greet', 'Alice'); // Output: Hello, Alice!

// <------------------------------------------------------------------------>