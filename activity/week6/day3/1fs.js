const fs = require('fs')
console.log(typeof fs)
//ascycronous read from file 

fs.readFile('./hello/text.txt',{encoding: 'utf8'},(error,data)=> {
    //if an error happens output it and return 
    if(error) return console.log(error)

    // no error happens retunr ther content 
    console.log('data from the files ', data )
})
console.log("2")

//2 goes first become of asych behaviour 
