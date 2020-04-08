const fs = require('fs')
console.log(typeof fs)
//sncycronous read from file 

var data = fs.readFileSync('./hello/text.txt',{encoding:'utf8'}
)
console.log("1",data)
console.log("2 after one")