var ws = require("websocket-server");

function iniciarSo(route, handle){

var server = ws.createServer();


server.addListener("connection", function(client){
    console.log("new connection");
    client.send("Te conectaste ok");
    client.addListener("messa", function(msg){
    	console.log(msg);
    });
});

server.listen(8080);
console.log("Esperando conexion");
}