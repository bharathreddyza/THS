const fs = require('fs')
console.log(typeof fs)
console.log('current direwctory',__dirname)
//ascycronous read from file 
const filepath  = __dirname + '/hello/text.txt'
console.log(filepath )

fs.readFileSync(filepath , {encoding: 'utf8'},(error,data)=> {
    //if an error happens output it and return 
    if(error) return console.log(error)

    // no error happens retunr ther content 
    console.log('data from the files async ', data )
})
console.log("2")

//2 goes first become of asych behaviour 
