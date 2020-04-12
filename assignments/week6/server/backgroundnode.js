//Create a Background Node Service whichwill execute every 2 minutes in LinuxOperating System, that performsstreaming operation on the attached file‘content.txt’ with buffer size ‘16KB’KB- KiloBytes to the destination file‘destination.txt’
const fs = require('fs')

const http = require('http');

const bufferData = new Buffer(" buffer numbers ")

console.log("buffer data" ,bufferData)
setTimeout(()=>{
    const filepath = path.join(__dirname,'/files/destination.txt')
   const readstream = fs.readstream(filepath,{encode:'utf8',highWaterMark: 16 *1024})
},2000)