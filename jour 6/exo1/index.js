const express = require('express');
const pug = require('pug');
const fs = require('fs');
const http = require('http')
const app = express();
const server = http.Server(app)
const io = require('socket.io')(server) 

const users =[];

io.on('connection', (socket) => {
    console.log('Client', socket.id, 'is connected via WebSockets')
    socket.on('message send', (msg) => {
        io.emit('message send', msg);
    });

    socket.on('users connected',(user)=>{
        users.push(users)
        io.emit('users connected',user)
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
