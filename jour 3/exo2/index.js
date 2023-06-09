const fs = require('fs');
const http  = require('http');

http.createServer((req,res)=>{

    if(req.url === "/"){

        res.setHeader("Content-Type", "text/html;charset=utf8");
        res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>Exerxcice 2 : API</title>   
            </head>
            <body>
                <h1>Hello world : test API</h1>
                <form onSubmit='handleSubmit()'>
                    <input type='text' id='name' name='name'/>
                    <button type='send'>Chercher</button>
                </form>
                <p><a href="/all">All</a></p>
            </body>
            <script>
                    const inputName = document.querySelector('#name');
                    function handleSubmit(e){
                        e.preventDefault();
                        window.location.replace('http://localhost:1001/search/'+inputName.value);
                    }
            </script>
        </html>
        `)
    }

    if(req.url === "/all"){
        fs.readFile(__dirname+req.url+'.json', (err,data)=>{
            if(err){
                console.log(__dirname+req.url)
                res.write(404);
                res.end('erreur')
                return;
            }
            res.setHeader("Content-Type", "text/json;charset=utf8");
            res.end(data);
        })
    }

    if(req.url.match('^(\/search\/[a-z]+)')){
        fs.readFile(__dirname+req.url+'.json', (err,data)=>{
            if(err){
                res.setHeader("Content-Type", "text/json;charset=utf8");
                res.end('Je ne connais pas cette données')
            }
            res.setHeader("Content-Type", "text/json;charset=utf8");
            res.end(data);
        })
    }

    
}).listen(1001,'localhost',()=>{
    console.log("server running on http://localhost:1001")
})


