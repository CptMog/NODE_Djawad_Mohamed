const http = require('http')

http.createServer((req,res)=>{

    res.statusCode = 200;
    res.setHeader('Content-type','application/json');
    const date = new Date();

    const msg = { msg: 'Helle World !'+date.toTimeString() }
    console.log(JSON.stringify({msg}))
    res.end(JSON.stringify({msg}))

}).listen(8080,'localhost',()=>{
    console.log('server running on http://localhost:8080')
})