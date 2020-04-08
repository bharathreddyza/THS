// /download should download 
const http = require("http");
const port = 3000;
const path = require('path')
const fs = require('fs')
const filename =  __dirname + '/about.html'

 const server = http.createServer( (req,res)=>{
     fs.readFile(filename, {encoding:"utf8"} , (err,data)=>{
         if(err) console.error(err);
         res.end(data)
     })
 })




server.listen(port,()=> console.log(`the server is running at ${port}`))