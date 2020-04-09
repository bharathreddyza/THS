const fs = require('fs');
const http = require('http');
const port = 3000;
const path = require('path');
const filepath = path.join(__dirname+'/index.html');
console.log(filepath)
console.log(__dirname)

const savefilepath = path.join(__dirname +'/db/users.js')

function postData(req,res){
    req.on('data' , function(data){
        const newdata = data.toString()
        fs.appendFile(savefilepath,newdata , {endcoding: 'utf8'} , (err,data)=>{
            if(err) console.log(err)
            res.end("done savvvveddd")
        })
    })
}

function readHTMl(req,res){
    fs.readFile(filepath,{encoding:'utf8'} ,(err,data)=>{
        if(err) console.error(err)
        
        res.end(data)
    })
}

const server = http.createServer((req,res)=>{
    if(req.url === '/') return readHTMl(req,res)
     if(req.url === '/data') return postData(req,res)     
})

server.listen(port , ()=> console.log(`server ${port}`))
