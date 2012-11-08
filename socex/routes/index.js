
/*
 * GET home page.
 */
var fs   = require('fs');
var vPage = fs.readFileSync('./index.html');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
  res.end(vPage);

  var server = require("socket.io").listen(8000);
var ws = require("websocket-server");
var serve = ws.createServer();

serve.addListener("connection", function(client){
    console.log("new connection");
    client.send("aaaaaa");
    client.addListener("message", function(msg){
    	console.log(msg);
    	server.sockets.emit("sendEvent", msg);
    });
});

serve.listen(1234);

server.sockets.on("connection", function(message)
{
    message.on("newMessage", function(msg)
    {
        server.sockets.emit("sendEvent", msg);
    });
});




};