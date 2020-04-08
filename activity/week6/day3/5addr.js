// listinig directory content 
const fs = require('fs')

// asycnh read directory 
fs.readdir(__dirname, (err,data)=>{
    // on error 
    if(err) console.log(err);

    //dsiplay the directory content 
    console.log(data)
})

//synch
const filesynch  = fs.readdirSync("../../")