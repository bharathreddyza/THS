function takeshower(){
  return "showering"
}
function eatbreakfast(){
    let meal = cookfood()
    return `eating ${meal}`

}
function cookfood(){
    let items = ["oats","eggs"]
    return items[Math.floor(Math.random()* items.length)]
}

function wakeup(){
    takeshower()
    eatbreakfast()
    console.log("blablabla")
}

wakeup()

 
//sum of numbers 
// 4 -> 4+3/+2+1
// return 1 if n ===1
//else num + sumrange(n-1)
 
function sumrange(){
    if(num ===1 ) return 1 
    return num + sumrange(n-1)}

    
function fun(x,y){
    if(x === 0)
        return y
     
     return fun(x - 1,x +y)
}

fun(4,3)


//write  a factorial algo using recursion 
 function factorial(num){
     if(num === 1)
     return num;
     return num * factorial(num -1)
 }

 factorial(6);


 //write function productOfArray
 // it accepts an argument of array of numbers 
 // it returns the product of all of them

  var arr = [1,4,78,9]
 function productOfArray(arr){
     if(arr.length === 0)
     return 1
     return arr[0]*productOfArray(arr.slice(1))
    
 }
 productOfArray(arr);


 //write a recursive function called fib
 //which accets a number and then rerurn thr nth number in fibonnaci sequence 
 // fibonacci is the sequence of whole number 
 //1,2,2,3,5,8,13
 //starts from 1 and 1 and every number thereafter is equal to sum of preevius two numbers 


  function fib(x){
   if(n <= 2) 
 return 1;
 
  return fib(x-1) + fib(x-2);
}

  fib(3);



function fun(x,y){
      if(y ===0) return 0;
      return x + fun(x,y-1)

  }
  fun(4,3)

  // [1,2,3,4,5]
  // collect al the odd value -- [1,3,5];
  
  function collectOddValues(arr){
    let yes = []
    if(arr.length === 0){
        return yes
    }
    if(arr[0] % 2 !== 0){  yes.push(arr[0])
    }
        yes = yes.concat(collectOddValues(arr.slice(1)))    
      return yes 
  } 
  collectOddValues([1,2,3,4,5]) //[1,3,5]




  // recursiveRange
// Write a function called recursiveRange which accepts a number
// and adds up all the numbers from 0 to the number passed to the function.

function recursiveRange(num) {
    if(num <= 1) 
    return num;
    return num + recursiveRange(num-1)
    //write here
   }
   
   console.log(recursiveRange(6)); // 21
   console.log(recursiveRange(10)); // 55



   // power
// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow().
// Do not worry about negative bases and exponents.

function power(num, pow) {
    if (pow === 0) return 1;
    return num * power(num, pow-1);

    
  }
  
  console.log(power(2, 0)); // 1
  console.log(power(2, 2)); // 4
  console.log(power(2, 4)); // 16



  // reverse
// Write a recursive function called reverse
// which accepts a string and returns a new string in reverse.

function reverse(str) {                            
      if(str.length <= 0)return str
      return reverse(str.slice(1) + str[0])
}


console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'



// capitalizeFirst
// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.
const result  = [];
function capitalizeFirst(arr) {
    if(!arr.length)
    return result

     result.push(arr[0][0].toUpperCase() + arr[0].slice(1))
       
  
    return result.concat(capitalizeFirst(arr.slice(1)));
  }
  
  console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']



  // isPalindrome
// Write a recursive function called isPalindrome which returns true
// if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.

function isPalindrome(str) {
   if(str.length ===1) return true
   if(str.length ===2)  return str[0] === str[1]
   if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1));

}

console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false


//What does the following recursive algorithm do?
 //Analyse outputs for multipleinputs and find out what the below algorithm is solution for.function
       
    function fun(n){
            if (n == 0 || n == 1) 
                   return n;
            if (n%3 != 0)     
               return 0;  
                 return fun(n/3);}   
    // this function gives out 0 for all numbers which 3 is a sqaure root of 



    function f( n){ 
           if(n <= 1)
                   return 1; 
                      if(n%2 == 0)
                              return f(n/2);
                                  return f(n/2) + f(n/2+1);}
f(11));  //13930




function foo(n, r){
    if(n >0) return (n%r + foo (n/r, r) );
    else return 0;

}
foo(513,2)
///4


function robot(n,a,b){ 
      if (n <= 0)  return; 
        robot(n-1, a, b+n); 
          console.log(n,a,b);
             robot(n-1, b, a+n);}
             
robot(9,5,2)
  



////////////////



