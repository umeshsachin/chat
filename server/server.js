const path = require('path');
const express = require('express');

const pubpath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(pubpath));

app.get('pubpath',(req,res)=>{
    res.render('index.html');
});

app.listen(port, ()=>{
    console.log(`server is on port ${port}`);
});