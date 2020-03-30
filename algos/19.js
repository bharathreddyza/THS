//// 19)  Write a program to check whether given character is vowel or consonant

var give = prompt("give a letter");
     if( `aeiou`.includes(give)){
       console.log("that is a vowel")
     }else if(`bcdfghjklmnpqrstvwxyz`.includes(give)){
       alert("that is a consonant")
     }else{
       alert("that isn't a letter")
     }