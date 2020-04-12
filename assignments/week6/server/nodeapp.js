
const http = require('http');
const port = 3000;
const path = require('path');
const fs = require('fs');

const filename = __dirname + '/files/text.txt'
console.log(filename)

const readfile = fs.readFile(filename , {encoding: 'utf8'},(error,data)=>{
    console.log(data)


const replacedata = data.replace('inside','edited text in ' )
fs.writeFile(filename,'text.txt' ,{encoding:'utf8'},(error ,data)=>{
 console.log(replacedata)
})


})

