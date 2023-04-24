const express = require('express');

const app = express();

app((req,res,next)=>{
    res.setHeader('Acces-Control-Allow-Origin','*');
    res.setHeader('Acces-Control-Allow-Origin','Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Acces-Control-Allow-Origin','GET, POST, PUT, DELETE, PATCH, OPTION');
})

// app.use((req,res)=>{
//    res.json({message : 'Une bien belle jounée'});
// })

// app.use((req,res,next) =>{
//     console.log('test');
//     next();
// })

// app.use((req,res,next) =>{
//     res.json({message : 'Une bien belle jounée'});
//     next();
// })

// app.use((req,res,next) =>{
//     res.status(201);
// })

//requete GET avec route
app.use('/data/movies', (req,res,next) =>{
    const movies = [
        {
            id:'1',
            title: 'Alien',
            real: 'Ridley Scott'
        },
        {
            id:'2',
            title: 'Blade Runner',
            real: 'Ridley Scott'
        },
    ]
})

//requete POST avec route
app.post('data/form',(req,res,next)=>{
    console.log(req.body);
    res.status(201);
})


module.exports = app;