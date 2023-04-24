const express = require('express');
const pug = require('pug');
const fs = require('fs');
const http = require('http')
const app = express();
const server = http.Server(app)
const io = require('socket.io')(server) 

io.on('connection', (socket) => {
    console.log('Client', socket.id, 'is connected via WebSockets')
})

app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'pug')

app.get('/',(req,res)=>{
    const compiledFile = pug.compileFile('./public/views/index.pug');
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

server.listen(9000, () => console.log(`✓ Le serveur écoute sur le port 9000`))
