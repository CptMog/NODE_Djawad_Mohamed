const pug = require('pug');
const fs = require('fs');
const http = require('http');

const menuItems = [
    { path: '/', title: 'Home', isActive: true },
    { path: '/about-me', title: 'About', isActive: false },
    { path: '/references', title: 'References', isActive: false },
    { path: '/contact-me', title: 'Contact', isActive: false },
];

http.createServer((req,res)=>{
    if(req.url === '/'){
        const compiledfile = pug.compileFile('template.pug');
        const data = compiledfile({menuItems})
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.end(data)
    }
}).listen(1234,'localhost',()=>{
    console.log('server running on http://localhost:1234');
})