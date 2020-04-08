const fs  =require('fs')
   fs.writeFile('./hello/createdusingwritefile.txt' ,"hello world" ,(err)=>{
       if(err) console.log(err)
       console.log("succefully added")
   })

//save binary data to a file binary.txt in the hello folder 
// again the opertions will complete in the bakground 
// seqeunces of bytes --> array of bytes 

const buffer = new Buffer([0x48,0x65,0x6c,0x6c,0x6f])
fs.writeFile('./hello/binary.txt',buffer,(err) => {
    if(err) console.log(err)
    console.log("buffer data written succesfully ")
})

//write data to file ascycronously 
try{
fs.writeFileSync('./hello/createdusingwritefilesync.txt', "this data is created using writefilesync ")
}
    catch(err){
            console.log(err)
    }
