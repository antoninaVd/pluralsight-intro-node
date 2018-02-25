var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var handler = function(req, res){
    fs.readFile(__dirname + '/index.html', function(err, data){
        if(err){
            res.writeHead(500);
            return res.end('Cannot read index.html');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    })
}

var app = http.createServer(handler);
var io = socketio.listen(app);

io.sockets.on('connection', function(socket){
    setInterval(function(){
        var timestamp = Date.now();
        console.log('Emitted: '+timestamp);
        socket.emit('time', timestamp);
    },2000);
    socket.on('submit', function(data){
        console.log('Submitted: '+data);
    });

});

app.listen(3000);
console.log('Server running ...');