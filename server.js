const express = require('express');
const app = express()
require("dotenv").config();

const port = process.env.PORT || 3000;

app.get('/', (req, res)=> {
    res.sendFile('index.html');
})

app.listen(port, ()=>{
    console.log(`Example website running on port: ${port}`);
})