//  1)Write a program to given input Check whether  Even or odd.
var oddeven = prompt("whats your fav number"); 

if (Number.oddeven % 2 == 0) { alert(oddeven + " is an even number"); 
} else alert(oddeven + " is an odd number");



//16)Write a program  to find Mean of given Array Elements?
var arr = [21,4,554,33,44];
var a = 0;
var b = 0;
for(var i =0;i<arr.length;i++){
   a += arr[i]
 b = a / arr.length
} 


//2)Write a program to Generate Even and Odd Number less than N and Generate ‘N’ Even and OddNumbers.



//3)Write a program to decide given N is Prime or not.

function Prime(x){
  for(var i = 0 ; i < x ; i++){
    y = x -i
    if(y % x == 0){
      console.log('x is not prime number ')
    }
  
  }

}


//5)Write a program to find remainder of two numbers without using modulus (%) operator
function integers(x, y){
  var greater;
  var lesser;
  if(x > y){
    greater = x
    lesser = y
  }else{
    greater = y
    lesser = x
  }
  var rem = greater - lesser

  for(var i =0 ;i <=   rem ; i++){
       if( rem >= lesser){
         return integers(rem,lesser)
       }
       else{
         console.log(rem)
       }
       console.log(rem)

  }}



// 6)Write a program to generate Prime  Numbers less than N and Generate ‘N’ Prime Numbers/in givenrange


//7)Write a program that prints the numbers from 1 to 100 and for multiples of '3' print "Fizz" instead ofthe number and for the multiples of '5' print "Buzz".
for(var i = 0 ; i<=100;i++){
  if(i%3 ===0){
 
  console.log("FIZZ")
  }   else if(i%5 ==0){
    console.log("BUZZ")
  }
  else{
  console.log(i)
  }
}


//11)Write a program to find the Sum of Array Elements.
var arr = [9,8,7,99];
var sum = 0;
for(var i =0;i< arr.length ; i++){
  sum += arr[i]
} console.log(sum)



//12)Write a  program for swapping of two arrays
 
var arr1 = [1,2,5,46,74];
var arr2 = [3,6,8,24,65];
function swap(item1,item2){

  for(var i =0;i < arr1.length ; i++){
    arr1[i] = arr2[i]
  }
  
  for(var j = 0 ;j<arr2.length; j++ ){
    arr2[j] = arr1[j]
  }
}  ////not working 


//13)Write a program to find the maximum number in an array using function
var arr1 = [1,2,5,46,74];
var max = arr.reduce(function(a, b) {
  return Math.max(a, b);
});
max --> 74


//14)Write a program to find Median of the given Array?
var arr1 = [1,85,50,46,74];
var a;
   arr1.sort;
   for(var i =0;i<arr1.length;i++){
      a =(arr1.length +1)/2
  
    }


  //  15)Write a program to find the highest and the lowest number in array
    var arr1 = [23,56,78,42,5,80];
    var max = arr1.reduce(function(a,b){
      return Math.max(a, b);
    })

    var min = arr1.reduce(function(a, b){
      return Math.min(a, b);
    })

// 19)  Write a program to check whether given character is vowel or consonant
var give = prompt("give a letter");
     if( `aeiou`.includes(give)){
       console.log("that is a vowel")
     }else if(`bcdfghjklmnpqrstvwxyz`.includes(give)){
       alert("that is a consonant")
     }else{
       alert("that isn't a letter")
     }


// 20) Write a program to find the largest number among three numbers
Math.max(5,7,8)