const http = require('http');
const port = 3000;

const server = http.createServer((req,res)=>{
    console.log(req.url);
})


server.listen(port, ()=> console.log(`server is running atc${port}`))