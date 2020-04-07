// /download should download 
const http = require("http");
const port = 3000;

//respond with plain text if the rqq.url is  /text
//respond with json wif req.url -s /json 
//respond with 404 not found error for everything else 


function responseText(req,res){
    res.setHeader('Content-Type',"text/plain");
    res.end("this is plain text")
}

function responseJson(req,res){
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({msg:"how you doing"}))
}

function responseNotFound(req,res){
    res.setHeader('Content-Type',"text/plain")
    res.end("404 ERROR nor found")
}
function responseSendFile(res,req){
    res.setHeader('Content-Type',"text/plain");
    res.responseSendFile()
}

const server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url === '/') return responseText(req,res)
    if(req.url === '/json') return responseJson(req,res)
    responseNotFound(req,res)
})

server.listen(port, ()=> console.log(`the server is running at port ${port}`))