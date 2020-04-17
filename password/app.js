const express = require('express');
const app = express();
const port = 5600;

app.get('/users',(req,res)=>{
    res.json(users)
})

app.listen(port,()=>console.log(`port is running at ${port}`))