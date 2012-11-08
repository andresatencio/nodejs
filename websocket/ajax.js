/*var http = require('http');
var ws = require("websocket-server");

http.createServer(function (req, res) {

	var server = ws.createServer();

	server.addListener("connection", function(client){
    console.log("new connection");
    client.send("Te conectaste ok");
    client.addListener("message", function(msg){
    	console.log('request received');
   		res.writeHead(200, {'Content-Type': 'text/plain'});
    	res.end('_testcb(\'{"message":'+msg+' "Hello world!"}\')');
    	client.send("Conexion devuelta por node: "+msg);
    	console.log(msg);
	    });
	});

	server.listen(8080);
	console.log("Esperando conexion");

    console.log('request received');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('_testcb(\'{"message": "Hello world!"}\')');
}).listen(8124);*/
var http = require('http');

http.createServer(function (req, res) {
    console.log('request received');
    res.write('<p>sssssss</p>');
}).listen(8124);