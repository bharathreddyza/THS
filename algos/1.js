

// 3)Write a program to decide given N is Prime or not.
var readlineSync = require('readline-sync')
 
function checkforprime(n){
    var con = 2;
    if(n% con !== 0){
        con++;
     return   checkforprime(n)
    }else if(n% con ===0){
        console.log(n +' is divisible by' + con)
    }
}

checkforprime(readlineSync.question("enter any number: "))
