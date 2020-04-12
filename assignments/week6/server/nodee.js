// get the dir name 

const http = require('http');
const port = 3000;

const server = http.createServer((req,res)=>{
    console.log(__dirname);
    const obj = {__dirname}
    console.log(obj)
    res.end(__dirname)
})


server.listen(port, ()=> console.log(`server is running atc${port}`))