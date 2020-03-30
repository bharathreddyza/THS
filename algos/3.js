

// 3)Write a program to decide given N is Prime or not.
// var readlineSync = require('readline-sync')
// checkforprime(readlineSync.question("enter any number: "))

// var readline =  Number(readlineSync)
//  checkforprime(readline)
// function checkforprime(n){
//     var two = 2;
//     for(var i =0; i < n;i++){
//         if(n ===2){
//             console.log("2 is prime")
//             break;
//         }
//     else if(n % two === 0){
        
//      console.log("that not prime ")
//      break;
     
//     } else if(n % 2 !== 0){
//         console.log("that is prime")
//           break;
//     }
    
// } 

// }
function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }