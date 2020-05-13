const http = require('http');
const port = '3000';

http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end('Hello Sia World! \n');    
}).listen(port);

console.log("server is running...");
