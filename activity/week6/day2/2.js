const http = require('http')
const port  = 3000;

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type",'application/json')
    console.log("opened server")
    res.end(JSON.stringify({msg:"hi google crome"}))
})

server.listen(port,()=> console.log("server is runnig at port 3000"))