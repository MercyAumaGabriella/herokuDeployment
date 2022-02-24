const express = require('express');
const app = express();
require("dotenv").config();
const router = express.Router();
const path = require('path');

const port = process.env.PORT || 3000;

router.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html');
})

app.use('/', router);
app.listen(port, ()=>{
    console.log(`Example website running on port: ${port}`);
})