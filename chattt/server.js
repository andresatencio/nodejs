var app = require('http').createServer()
var io = require('socket.io').listen(app);

app.listen(8080);

var usernames = {};

io.sockets.on('connection', function (socket) {

    socket.on('sendChat', function (data) {
        io.sockets.emit('updateChat', socket.username, data);
    });
 
    socket.on('newUser', function(username){
        socket.username = username;
        usernames[username] = username;
        console.log(socket.username);
        io.sockets.emit('updateUsers', usernames);
        socket.emit('updateChat', 'SERVER', 'you have connected ');
        socket.broadcast.emit('updateChat', 'SERVER', username + ' has connected');
    });

    socket.on('disconnect', function(){
        if(usernames[socket.username]){
            delete usernames[socket.username];
            io.sockets.emit('updateUsers', usernames);
            socket.broadcast.emit('updateChat', 'SERVER', socket.username + ' has disconnected');
        }
    });

    socket.on('logout', function(){
        console.log("se activo logout");
        delete usernames[socket.username];
        io.sockets.emit('updateUsers', usernames);
        socket.broadcast.emit('updateChat', 'SERVER', socket.username + ' has disconnected');
    });
});