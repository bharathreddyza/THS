

const http = require("http")

const port = 3000 

const server = http.createServer(function(Request,Response){
    console.log(Response)
    Response.setHeader('Content-Type', 'application/json')
    Response.end(JSON.stringify({ first:  "hi how are you", secong: " after fisrt"}))
})
server.listen(port,()=> console.log(`server is listeing at ${port}`))