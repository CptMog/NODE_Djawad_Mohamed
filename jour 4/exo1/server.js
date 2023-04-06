const http = require('http');
const fs = require('fs');
const students = [
    { name : "Sonia"},
    { name : "Antoine"}
];

http.createServer((req,res)=>{
    
    if(req.url == '/'){ 
        try {
            const data = fs.readFileSync(__dirname+req.url+'view/home.html','utf-8')
            res.writeHead(200, { "Content-Type" : "text/html;charset=utf8" });
            res.end(data)
        } catch (err) {
            res.statusCode = 404;
            res.end(JSON.stringify(err))
        }        

    }

    if(req.url == '/users'){
        res.writeHead(200, { 'Content-Type' : 'application/json' });
        res.end(JSON.stringify(students))
    }

    if (req.url === "/bootstrap") {
        res.writeHead(200, { "Content-Type": "text/css" });
        const css = fs.readFileSync("./asset/css/bootstrap.min.css"); // on envoit le fichier au client
        res.write(css);
        res.end();
        return;
      }

    if (req.method === 'POST') {
        // Handle post info...
        let body = '';
        req.on('data', data => {
            body += data;
        });
    
        // On écoute maintenant la fin de l'envoi des données avec la méthode on et l'attribut end
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type' : 'application/json' });
            res.end( JSON.stringify({ "result" : body }));
            const name = body.split('=')
            students.push({name : name[1]})
        });
    }

}).listen(8000,'localhost',()=>{
    console.log('server running on http://localhost:8000')
})