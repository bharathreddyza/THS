//read the file text.txt
//data.replace(/hello..,"")
//write the file in the index.txt
const fs = require("fs")

fs.readFile('./hello/text.txt',{encoding:'utf8'} ,(err,data)=>{
    if(err) console.log(err)
   const replacedata = data.replace(/hello/ ,'goodbye')
    fs.writeFile("./hello/text.txt",replacedata ,'utf8' , (err)=>{
        if(err) console.log(err)
        console.log("done")
    })

})

