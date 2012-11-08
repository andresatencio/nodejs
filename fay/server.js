var server = require("socket.io").listen(6969);
var ws = require("websocket-server");
var fs   = require('fs');
var http = require('http');

var serve = ws.createServer();
var vPage = fs.readFileSync('indexx.html');

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200,{'Content-type':'text/html; charset=utf-8'});
    res.end(vPage);
}).listen(1337);
console.log('Server running at http://127.0.0.1:1337/');


 



serve.addListener("connection", function(client){
    console.log("new connection");
    client.send("aaaaaa");
    client.addListener("message", function(msg){
    	console.log(msg);
    	server.sockets.emit("sendEvent", msg);
    });
});

serve.listen(8080);

server.sockets.on("connection", function(message)
{
    message.on("newMessage", function(msg)
    {
        server.sockets.emit("sendEvent", "ss");
    });
});

