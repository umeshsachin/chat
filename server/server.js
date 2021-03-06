const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');



const pubpath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();

var server = http.createServer(app);
var io = socketIO(server);
io.on('connection',(socket)=>{
    console.log('new user connected');
    
    socket.on('disconnect',()=>{
    console.log('client disconnected');
});
});



app.use(express.static(pubpath));

app.get('pubpath',(req,res)=>{
    res.render('index.html');
});

server.listen(port, ()=>{
    console.log(`server is on port ${port}`);
});