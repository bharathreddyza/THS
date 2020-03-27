/* var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices); */
//////  make it into for loop 
var indices = [];
var array = ['a','b','c','d'];
var element = 'a';
var idx = array.indexOf(element);
for(i=0;)


// Ffunctions get a new memory every run or invocation 
 function multilyby2(input){
     const result = input * 2 ;
     return result;
 }
 const output = multilyby2(6)

function creatdfunction(){
    function multiplyby2(num){
        return num *2 
    }
    return multilyby2
    }
}
const generatedfunv = createfunction()
const result = generated(4)
//funtion with memorys 
// 3 
//9
// 3
//4
//5
//7 and kill the function createFunction but multiplyby2 function is returned to generatedfunc
// 9
// 10 
//9
//excute 4 in multiplyby2 



Create a function createFunction that creates and returns a function. When that newly created function is called, it should return the string 'hello world'.

const myFunction = createFunction();
 // Let's call the function we created and log its return value
console.log(myFunction()); //should log: 'hello world'
When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.

//******************************//////////////
// ADD CODE HERE
function  createFunction() {
    function  insideFunction(hello) {
        return "hello world"
    }
    return insideFunction
    
}
// Uncomment these to check your work!
const myFunction = createFunction();
console.log(myFunction()); //should log: 'hello world'

/////////////////////////////////////////////////////////////////////////////////////////


Challenge: createFunctionWithInput
Create a function createFunctionWithInput that accepts one input and returns a function. When that created function is called, it should return the input that was passed to createFunctionWithInput when it was created.

const sampleFunc = createFunctionWithInput('sample');
const helloFunc = createFunctionWithInput('hello');

// Now we'll call the functions we created and log the result
console.log(sampleFunc()); 
// should log 'sample' to the console
console.log(helloFunc());
// should log 'hello' to the console

//*********************************************************///////////
// ADD CODE HERE
function  createFunctionWithInput(give) {
    
    function  insideFunction() {
        return give
        
    }
    return insideFunction;
};

// UNCOMMENT THESE TO TEST YOUR WORK!
const sampleFunc = createFunctionWithInput('sample');
console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput('hello');
console.log(helloFunc()); // should log: 'hello'


var a = "this will not be undefined";

console.log(b);

var b = "this will return undefined";
  console.log(c);
  console.log(a);
