// Step 1: Import the HTTP module
const http = require('http');

// Step 2: Create the server
// The createServer method takes a callback function with two parameters: req (request) and res (response).
const server = http.createServer((req, res) => {
  // Log the requested URL and HTTP method
  console.log(`Request received: ${req.method} ${req.url}`);

  // Step 3: Handle different routes based on the URL
  if (req.url === '/' && req.method === 'GET') {
    // Handle the root URL ("/")
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set response header
    res.end('Welcome to the Home Page!'); // Send the response and end it
  } else if (req.url === '/about' && req.method === 'GET') {
    // Handle the "/about" URL
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set response header
    res.end('This is the About Page.'); // Send the response and end it
  } else {
    // Handle any undefined routes (404 Not Found)
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found.');
  }
});

// Step 4: Define the port and start the server
const PORT = 3000; // The port on which the server will listen
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
