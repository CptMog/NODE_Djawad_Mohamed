const http = require('http');
const pug = require ('pug');
const fs = require('fs');
const u = require('./utils');

require('dotenv').config();

const students = [
    { name : "Sonia", birth : "2019-14-05"},
    { name : "Antoine", birth : "2000-12-05"},
    { name : "Alice", birth : "1990-14-09"},
    { name : "Sophie", birth : "2001-10-02"},
    { name : "Bernard", birth : "1980-21-08"}
];

u.utils.formatDateAllBirth(students);

http.createServer((req,res)=>{
    
    if(req.url === '/'){
        fs.readFile(__dirname+req.url+'view/home.html',(err,data)=>{
            if(err){
                res.statusCode = 404;
                res.setHeader('Content-Type','application/json')
                res.end(JSON.stringify(err))
            }
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html')
            res.end(data)
        })
    }

    if(req.url === '/style'){
        res.statusCode = 200;
        const css = fs.readFileSync("./assets/css/style.css"); // on envoit le fichier au client
        res.write(css);
        res.end();
        return;
    }


    if(req.url === '/users'){
        const compiledFile = pug.compileFile('./view/users.pug');
        const data = compiledFile({students})
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html')
        res.end(data)
    }

    if (req.method === 'POST') {
        let newStudent = '';
        req.on('data', data => {
            newStudent += data;
        });
        
        req.on('end', () => {
            const data = newStudent.split('&');
            const name = data[0].toString().split('=');
            const birth = data[1].toString().split('=');
            students.push({name : name[1], birth: birth[1]})
            u.utils.formatDateAllBirth(students)
        });
    }

}).listen(8000,'localhost',()=>{
    console.log(`server running on http://localhost:8000`)
})