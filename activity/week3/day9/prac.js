//Create a function addTwo that accepts a number, and returns the number plus 2.

// ADD CODE HERE
function addTwo(num){
    var a = num + 2;
    return a;
}
// Uncomment these to check your work!
console.log(typeof addTwo); // should log: 'function'
console.log(addTwo(10)); // should log: 12


//------------------------------------------------------------------
// Challenge 2: addS
// Create a function addS that accepts a string, and returns the string with an "s" added to the end.

// ADD CODE HERE
function addS(str){
    var a = str + 's';
    return a
}

// Uncomment these to check your work!
console.log(typeof addS); // should log: 'function'
console.log(addS('cat')); // should log: 'cats'

// Challenge: Passing Arguments
// Examine the code given to you.
// Determine what arguments must be passed into isX1 and isX2 respectively to obtain an output of true for both, and pass in the arguments accordingly.

///////////////////***************************************///////////////
const x = 3;

function isX1(num) {
    const x = 5;
    return num === x;
}

function isX2(num) {
    return num === x;
}

const one = isX1( 5/* ADD CODE HERE */);
const two = isX2(3/* ADD CODE HERE */);

// Uncomment these to check your work!
console.log(one); // should log: true
console.log(two); // should log: true



//Challenge: Invoking Functions
//Examine the code given to you. Try to make the calls variable equal to 'JerryKramerGeorgeElaine' with only a single invocation to the function jerry.

let calls = "";

function jerry(str) {
//concat str with the name jerry 
    calls +=  'jerry'
 // return george
   return kramer(calls)
}
function kramer(str) {
    calls += 'kramer'
     return george(calls)
}

function george(str) {
    calls +=  'george';
    return elaine(calls) ;

}

function elaine(str) {
    calls += 'elaine'
    return calls

}





// should return: 'JerryKramerGeorgeElaine'
calls = jerry(calls);



// Challenge: getRemainder
// Create a function getRemainder that takes two numbers and returns the remainder (value left over from division) of dividing the larger number by the smaller one.
    
}

// Hint- You have no guarantee which number will be the bigger number, how can you determine which is which?

//******************************************************************////////////////
function getRemainder(num1, num2) {

    //your code goes here...
    if(num1 > num2){
       var rem = num1 % num2;
       return rem 
    }
    else{
        var rem = num2 % num1 ;
        return rem 
    }
  
  }
  
  //Uncomment the lines below to test your code
  
  console.log(getRemainder(17, 5)); //=> 2
  console.log(getRemainder(20, 5)); //=> 0
  console.log(getRemainder(8, 22)); //=> 6
  console.log(getRemainder(7, 42)); //=> 0




  // Challenge: lastLetter
// Create a function lastLetter that takes a word (string) and returns the last character/letter of that string.

// Hint- Remember that each character/letter in a string has an index position that you can access with brackets- '[]'


function lastLetter(word) {
    //your code goes here...
    var wr = word.charAt(word.length - 1);
    return wr ;
  
  }
  
  //Uncomment the lines below to test your code
  
  console.log(lastLetter("hello")); //=> "o"
  console.log(lastLetter("goodbye!")); //=> "!"
  console.log(lastLetter("ZeltoiD")); //=> "D"
  console.log(lastLetter("I love Javascript")); //=> "t"



  // Challenge: gradeCalculator
// Create a function gradeCalculator which takes a grade (number) and returns its letter grade.

// grades 90 and above should return "A"

// grades 80 to 89 should return "B"

// grades 70 to 79 should return "C"

// grades 60 to 69 should return "D"

// 59 and below should return "F"

//****************************************************//////////////
function gradeCalculator(grade) {
    //your code goes here...
    if(grade <= 59){
        return 'F' ;
    }
    if(60 <= grade && grade <= 69){
        return 'D';
    }
     
    if(70 <= grade && grade <= 79){
        return 'C';
    }
    if(80 <= grade && grade <= 89){
        return 'B';
    }
    if(90 <= grade){
        return 'A';
    }




  
  }
  
  //Uncomment the lines below to test your code
  
  console.log(gradeCalculator(92)); //=> "A"
  console.log(gradeCalculator(84)); //=> "B"
  console.log(gradeCalculator(70)); //=> "C"
  console.log(gradeCalculator(61)); //=> "D"
  console.log(gradeCalculator(43)); //=> "F"



  // Challenge: wereAwesome
// Write a function wereAwesome that takes you and your pair programming partner's name and returns the a string of "[your buddy's name] and [you] are awesome!"

//*************************/////////////////
function wereAwesome(you, yourBuddy) {
    // your code here...
    return  yourBuddy + ' and ' + you + " are awesome! "
  
  }
  
  
  //Comment in the code below to test your function:
  
  console.log(wereAwesome("Dave", "Will")); //=> "Will and Dave are awesome!"
  console.log(wereAwesome("Victoria", "Jenny")); //=> "Jenny and Victoria are awesome!"
  console.log(wereAwesome("Chris", "Jac")); //=> "Jac and Chris are awesome!"
  console.log(wereAwesome("Phillip", "Skyler")); //=> "Phillip and Skyler are awesome!"



  // Challenge: disemvowel
// Write a function disemvowel that takes in a string and returns a new string with all vowels removed.


function disemvowel(string) {
    // your code here...
  var result =  string.replace(/[aeiou]/ig,'')
    return result
}
  
  //Comment in the code below to test your function:
  
  console.log(disemvowel('Code')); // => 'Cd'
  console.log(disemvowel('BANANA')); // => 'BNN'
  console.log(disemvowel('hello world')); // => 'hll wrld'


  // Challenge: arrayBuilder
// Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. The order of the elements in the array does not matter, but repeated elements should be grouped.

// **************************************/////////
function arrayBuilder(obj) {
    // your code here...

    for (key  in obj) {
        console.log(`${key}: ${obj[key]}`);
      }

  
  }
  
  //Comment in the code below to test your function:
  
  console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
  console.log(arrayBuilder({})); //=> []


