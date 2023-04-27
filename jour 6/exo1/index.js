const express = require('express');
const pug = require('pug');
const fs = require('fs');
const http = require('http')
const app = express();
const server = http.Server(app)
const io = require('socket.io')(server) 
let ROOM = ""

io.on('connection', (socket) => {
    console.log('Client', socket.id, 'is connected via WebSockets')

    socket.on('change channel',(room)=>{
        
        if(ROOM !== "")socket.leave(ROOM);
        ROOM=room;
        socket.join(ROOM);
    })
    
    socket.on('message send', (msg) => {

        io.to(ROOM).emit('message send', msg);
    });

    socket.on('users connected',(user)=>{
        io.to(ROOM).emit('users connected',user)
    })

    socket.on('notify typing',(userTyp)=>{
        io.to(ROOM).emit('notify typing',userTyp)
    })
    

})

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'pug')

app.get('/',(req,res)=>{
    const compiledFile = pug.compileFile('./views/index.pug');
    const data = compiledFile()
    res.sendStatus = 200
    res.setHeader('Content-type','text/html');
    res.send(data)
})

app.get("/style",(req,res)=>{
    res.statusCode = 200;
    const css = fs.readFileSync("./public/css/style.css"); // on envoit le fichier au client
    res.write(css);
    res.end();
    return;
}) 

server.listen(9000, () => console.log(`✓ Le serveur écoute sur le port http://localhost:9000`))
