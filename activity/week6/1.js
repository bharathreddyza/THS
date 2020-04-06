// Challenge 1
/**
 * Create a function createFunction that creates and returns a function.
 * When that created function is called, it should print "hello".
 */

function createFunction() {
    //write here
    function creater(){
        console.log("hello")
    }
    creater()
   }
   
   // UNCOMMENT THESE TO TEST YOUR WORK!
   var function1 = createFunction();
   function1();
   // ***********************************************************************************
   //***********************************************************************************
   // Challenge 2
   /**
    * Create a function createFunctionPrinter that accepts one input and returns
    * a function. When that created function is called, it should print out
    * the input that was used when the function was created.
    */
   function createFunctionPrinter(input1) {
   //write here
function hello(input1){
    console.log( input1)
}       
 return hello()
   }
   
   // UNCOMMENT THESE TO TEST YOUR WORK!
   var printSample = createFunctionPrinter("sample");
   printSample();
   var printHello = createFunctionPrinter("hello");
   printHello();
   
   // Challenge 3
   /**
    * Now we are going to create a function addByX that returns a function
    * that will add an input by x
    */
   function addByX(x) {
    //write here 
    var input = 2;
    function add(x){
        input+= x
    }
    return add()
   }
   
   var addByTwo = addByX(x);
   // UNCOMMENT THESE TO TEST YOUR WORK!
   addByTwo(1); //should return 3
   addByTwo(2); //should return 4
   addByTwo(3); //should return 5
   
   // var addByThree = addByX(3);
   // addByThree(1); //should return 4
   // addByThree(2); //should return 5
   
   // var addByFour = addByX(4);
   // addByFour(4); //should return 8
   // addByFour(10); //should return 14