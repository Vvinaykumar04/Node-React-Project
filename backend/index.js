const express = require('express');
require('./db/config');
const User = require('./db/User');
const app = express();

app.post("/register",(req,resp)=>{
    resp.send("Api is working now...........")
});

app.listen(5000)