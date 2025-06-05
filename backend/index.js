const express = require('express');
require('./db/config');
const User = require('./db/User');
const app = express();

// Middleware to get data from api
app.use(express.json());

app.post("/register",(req,resp)=>{
    resp.send(req.body)
});

app.listen(5000)