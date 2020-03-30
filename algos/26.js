//26 Write a program check whether given character is an alphabet or not
var giveal = prompt("give an alphabet")
if(giveal.length ==1){
    if(giveal =  /^[0-9a-zA-Z]+$/){
        alert("thats an alphabet");
        alert('plz give a number')
        giveal;
    }
} alert('thats not a alphabet')
giveal;