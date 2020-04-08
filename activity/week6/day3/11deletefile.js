//delete the file 

//async deleting 
const fs = require('fs')

fs.unlink('./hello/text.txt',(err,data)=>{
    if(err) console.log(err)
    console.log('done')
})
console.log("after asyn delete")

//sync delete
try{
fs.unlinkSync('./hello/todelete.txt')
}catch(err){
    console.log(err)
}
console.log("after sync executed")
