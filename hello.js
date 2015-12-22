/**
 * Created by hpyzik on 16.12.15.
 */
var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.end(':P :D');
}).listen(7770);

console.log('Server running at http://127.0.0.1:7770');
