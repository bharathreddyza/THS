//1)Explain the concept of “strict” in JavaScript with any codesample ?
  4 == "4" 
  // will return true because the operator in javascript is only seeing for the value anf type

  4 === "4"
  // this code will give false because not only the value but also the type is also taken into account
  // this is the concept of strict in javascript
  
   

  2)Consider the two functions below. Will they both return thesame thing? Why or why not?
  function foo1(){
        return {  
                bar: "hello" 
             };}
             
    function foo2(){
          return  { 
                   bar: "hello" 
                 };}
/// both the functions will return the same object  because both the functions are creating a local object 



3) ​In what order will the numbers 1-4 be logged to the consolewhen the code below is executed? Why?
     (function() {  
           console.log(1); 
              setTimeout(function(){
    console.log(2)}, 1000);
        setTimeout(function(){
            console.log(3)}, 0);    
            console.log(4);})();

// 1 will be first as it is immediately executed \
// then 4 will be executed as time hasnt been set 
// then 3 will be excuted as 0 seconds has been set 
// then after 1 sec 2 will be executed 

4) ​What will the code below output to the console and why?
   var arr1 = "john".split('');var arr2 = arr1.reverse();var arr3 = "jones".split('');arr2.push(arr3);console.log("array 1: length=" + arr1.length + " last=" +arr1.slice(-1));console.log("array 2: length=" + arr2.length + " last=" +arr2.slice(-1));

   // array 1: length=5 last= 
   //array 2: length=5 last=j, o,n, e, s



// 5) ​What is a “closure” in JavaScript? Provide an example.
 when a parent  function returns a child function the child funtion also returns all the child elements which are called from inside the child function




// 6) ​What will the following code output to the console:
console.log((function f(n){return ((n > 1) ? n * f(n-1) :n)})(10));
if n is greater than 1 it will multiply n into th function  (n-1)  and the loop continues until n is equal to 1  else it will return n  



7) ​Consider the code snippet below. What will the consoleoutput be and why?
(function(x) {   
    return (function(y) {   
            console.log(x);  })
            (2)})
            
            (1);
when we call the the function it is going to return the function(y) which console.log(x) as the value given is 1 it will return 1 



8) ​Consider the following code. What will the output be, andwhy?
(function () {
       try { 
          throw new Error();    } 
          catch (x) {        
             var x = 1, y = 2;     
                console.log(x);    }  
                  console.log(x);    
                  console.log(y);})
                  ();
// try will see uf there are any errors 
// thorough will create new errors 
// catch will tell what to do after an error has happen 
// output 1 2 




//9) ​What will the following code output and why?
    var b = 1;
    function outer(){
       var b = 2
       function inner(){
           b++;      
             var b = 3;     
                console.log(b)  }   
                 inner();}
                 
                 
outer();
// outer() --> 3

/*   1. What will be the output of the following statements?
a. console.log(8 * null);Ans: -->  0
b. console.log("5" - 1);Ans:  -->  4
c. console.log("5" + 1);Ans:  -->  51
d. console.log(“five" * 1);   -->   syntax error
e. console.log(false == 0);Ans:  -->  true
*/


2. What's the output?
var x = `foo ${y}`, y = `bar ${x}`;  
console.log(x);
console.log(y);
 Ans: foo bar foo bar 
       bar foo bar foo


 3. What’s the result of:
       typeof typeof(null)
       a. “undefined” 
       b. SyntaxError  
       c. “string”    
       d. “object”      
       e. TypeErro    
       
       ans --> typeof(null) is "object"  
          --> typeof "object" is "string"



 4. Are the algorithms of the following checks completely equivalent?
          typeof foo == 'undefined' and
          typeof foo === 'undefined'
          a. Yes
          b. No
          c. Maybe

          yes because typeof foo is a string "undefined"\


   5. What’s the result of:
          var a = (1,5 - 1) * 2;
          a. 0.999999999
          b. 1
          c. 0.5
          d. 8
          e. -0.5
          f. 4
          ans --> 8


 6. What will the code below output to the console and why ?
          console.log(1 + "2" + "2");
          Ans:122
          console.log(1 + +"2" + "2");
          Ans:32
          console.log(1 + -"1" + "2");
          Ans:02
          console.log(+"1" + "1" + "2");
          Ans:112
          console.log( "A" - "B" + "2");
          Ans:NaN2
          console.log( "A" - "B" + 2);
          Ans:NaN
          
          
 7. What do the following lines output, and why?

          console.log(1 < 2 < 3); // true 
          console.log(3 > 2 > 1); // false 
           
         
 8. How do you add an element at the beginning of an array? How do you add one at the end?
          For example:
          var myArray = ['a', 'b', 'c', ‘d’]; //after adding an element in the start and at the end of an array, resulting array should like:
          ["start", "a", "b", "c", "d", “end"]
          Note: Do not manually hard code the values at indexes with myArray[0]. Assume you don’t know the length of the
          array. It should still insert an element at the start and end of the array without disturbing the existing the elements in
          the array. Also, assume the array has a few elements in it already.
                   
   
myArray.push('e');  // adds to the end
myArray.unshift('0');   //adds to the beggining 


9. Imagine you have this code:
var a = [1, 2, 3];
a) Will this line gives an error?
    a[10] = 99;
   // it will return undefined as   a is already existing but the 10th element of a is still not given 

b) What will this output?
console.log[a(6)];
// type error as we gave brackets instead of square brackets 

c) What will this output?
console.log(a[6]);
// undefined
Explain with output and reasoning.


10. What would the following lines of code output to the console?
console.log("0 || 1 = "+(0 || 1));
Ans: true = true
console.log("1 || 2 = "+(1 || 2));
Ans:  true = 1
console.log("0 && 1 = "+(0 && 1));
Ans: false = 0
console.log("1 && 2 != "+(1 & 2));
Ans:  false != TypeError




11. What will be the output of this code?
var x = 21;
var getgirl = function ()
{
console.log(x);
var x = 20;
};
getgirl ();
Ans: undefined because var x is given after console.log hence var x will be initilized but its value will not declared



12. What is the value of typeof undefined == typeof NULL?
Ans: true since undefined == "undefined"  === would give false 




