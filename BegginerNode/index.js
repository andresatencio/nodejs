var server = require("./server");
var router = require("./router")
var sockete = require("./sockete")
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/favicon.ico"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

server.iniciar(router.route, handle);
sockete.iniciarSo(router.route, handle);