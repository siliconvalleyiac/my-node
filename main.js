
var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello Allen \n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://18.207.112.191:8081/');
//commit to test git pull
// try web hook again
