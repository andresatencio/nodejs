
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , socketio = require('socket.io')
  , socketweb = require('websocket-server')
  , path = require('path');

var app = express();


app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  //app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/socketjs', routes.socketjs);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

/**
 * 
 */

var server = require("socket.io").listen(80);
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

serve.listen(8080);

server.sockets.on("connection", function(message)
{
    message.on("newMessage", function(msg)
    {
        server.sockets.emit("sendEvent", msg);
    });
});
