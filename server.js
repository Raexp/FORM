
require("dotenv").config();


const http = require('http');
const express = require('express');
const app = express();

//ttemplate engine integration
app.set('view engine', 'ejs');

app.get("/",(req, res)=>{
    res.render('index',{
        "title": "This is the title"
    });
});

app.get("/:id",(req, res)=>{
    const {id} = req.params;
    res.send(`Your id is ${id}`);
});

const hostname = 'localhost';
const port = process.env.PORT||3000;

const server = http.createServer(app);



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});