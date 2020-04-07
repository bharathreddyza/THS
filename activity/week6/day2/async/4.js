//async programming 

console.log("good morhing")
function now(){
    return 21;
}
function later(){
    answer  = answer *2;
    console.log("meaning" , answer)
}

var answer = now()
setTimeout(later,3000)
console.log(answer)
console.log("bye")