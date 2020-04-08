//checking if file exist 


//asynch 
const fs = require('fs')

fs.stat('./hello/text.txt',(err)=>{
    if(err) return console.log(err)
    console.log("the asynch file exists")
})

//sync
//error handling using try and catch 
try{
    fs.statSync('./hello/text.txt')
    console.log("synchcronous file exist ")
}catch(err){
       if(err.code === 'ENOENT'){
           console.log("synch file directory doesnt exist ")
       }
}
