var readlinesync = require('readline-sync');
readlinesync = readlinesync.question('give a number')
input()
function input(){
if (Number(readlinesync% 2 == 0)) { console.log(readlinesync + " is an even number"); 
} else if(Number(readlinesync % 2 !== 0)){ console.log(readlinesync + " is an odd number");
} else{
    console.log('that doesnt look like a number');
    input();
}
}