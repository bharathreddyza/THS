// how ++ operator works 

function plusplus(x){
    
    var newx = number(x);
    x = newx + 1;

return x


}



//create a variable and print the output
var firstName = "Jenny";

// Try un-commenting the line below
// console.log("Hi, " + firstName)

// ADD CODE HERE

var lastName = "benny"
// Uncomment the line below to check your work!
// console.log("Hi, " + firstName + " " + lastName);



// Declare a variable favFood and assign it a value of "tacos"
// ADD CODE HERE
var favFood = "tacos"
// Try un-commenting the line below to test your answer
console.log("My favorite food is " + favFood);

// ADD CODE HERE


// Uncomment the line below to check your work!
// console.log("No, but really, my favorite food is " + favFood);





// Challenge
// Now we're gonna take the training wheels off a bit now. This time you're going to have to write your own tests! Utilize the space below line 18 to write any console.log statements that you'd like to use to test your answers.

// 1. Declare a constant fiveSquared and assign it the value of 5 to the power of 2 using the exponentiation operator.

// 2. Declare a constant eightCubed and assign it the value of 8 to the power of 3 using the exponentiation operator.

// 3. Declare a constant sevenToTheSixth and assign it the value of 7 to the power of 6 using the exponentiation operator.

// 4. Declare a constant eightyThreeModSix and assign it remainder of dividing 83 by 6.

// 5. Declare a constant sixtyModNine and assign it the remainder of dividing 60 by 9.

// ******************************************************///////////////
// ADD CODE BELOW
const fiveSquared = 5 ** 2;
const eightCubed = 8 ** 3;
const sevenToTheSixed = 7 ** 6;
const eightyThreeModSix = 83%6;
const sixtyModNine = 60%9;



// ADD CONSOLE LOGS BELOW
console.log("five power two is " + fiveSquared);
console.log("eight power three is" +  eightCubed);
console.log("seven  power six is" +  sevenToTheSixed);
console.log("eighty three mod six is " +  eightyThreeModSix);




// Challenge
// 1. Using the incrementor operator, increase the value of num1 by 1.

// 2. Using the decrementor operator, decrease the value of num2 by 1.


let num1 = 32;
let num2 = 44;

// ADD CODE BELOW HERE
++num1
++num2




// Challenge
// 1. Using the appropriate assignment operator, reassign the value of num1 to the current value plus 17.

// 2. Using the appropriate assignment operator, reassign the value of num2 to the current value minus 14.

// 3. Using the appropriate assignment operator, reassign the value of num3 to the current value times 11.

// 4. Using the appropriate assignment operator, reassign the value of num4 to the current value divided by 8.

// Utilize the console to test your code before you submit it!

// *****************************************************************////////////
let num1 = 32;
let num2 = 25;
let num3 = 92;
let num4 = 64;

// ADD CODE BELOW HERE

num1 + 17;
num2 - 14;
num3 * 11;
num4 / 8




// Challenge
// 1. Below line 9, reassign the value of iHaveChanged to true.

// 2. Declare a variable iLoveCoding and assign it a boolean value of true.

// 3. Declare a variable iLoveCoding and assign it the boolean value of false.

//********************************************************////////////
let iHaveChanged = false;

// ADD CODE BELOW
iHaveChanged = true;
var iLoveCoding = true,
var iLoveCoding = false;




// Challenge
// For the following problems, you will be using the comparison operators (==, ===, <, >, <=, >=) to compare two variables and see if the comparison yields true or false. You will assign the resulting boolean to a variable. For example:

// let first = 7;
// let second = 8;

// let isFirstBigger = first > second;
// console.log(isFirstBigger); // should log: false

// first = 16;
// console.log(isFirstBigger); // should log: true
// 1. Compare small and large using the < operator. Assign the result to a variable called isSmaller.

// 2. Compare num and string. First, use the == operator to compare the two variables, and assign the result to a variable calledisLooselyEqual. Second, use the === operator to compare the variables; assign the result to a variable called isStrictlyEqual.

// 3. Compare isTrue and isFalse using the !== operator. Assign the result to a variable called isTrueNotFalse.

///*****************************************************************************//////////////////////////

// 1.
const small = 2;
const large = 5342;
// ADD CODE BELOW (isSmaller)
isSmaller = small < large;



// 2.
const num = 45;
const string = "45";
// ADD CODE BELOW (isLooselyEqual and isStrictlyEqual)
var isLooselyEqual = num == string;  // gives result true
var isStrictlyEqual = num === string;  // gives result false




// 3.
const isTrue = true;
const isFalse = false;
// ADD CODE BELOW (isTrueNotFalse)
var isTrueNotFalse = isTrue !==isFalse;


// Uncomment these to check your work! 
// console.log('Is 2 < 5342?');
// console.log(isSmaller);
// console.log('Is 45 loosely equal to "45"?'); 
// console.log(isLooselyEqual);
// console.log('Is 45 strictly equal to "45"?');
// console.log(isStrictlyEqual);
// console.log('Is true not equal to false?');
// console.log(isTrueNotFalse);



// Challenge
// Uncomment the code and see what happens. Then, try it out yourself and make sure you really understand the concept.

// Uncomment the code below to test
console.log(10 + 5);
console.log("10" + 5);
console.log(5 + "10");





// Challenge
// 1. Declare a variable favMovieType. Then, using the typeof operator, assign it the value of favMovie's data type.

// 2. Declare a variable timesSeenType. Then, using the typeof operator, assign it the value of timesSeen's data type.

// 3. Declare a variable seeAgainType. Then, using the typeof operator, assign it the value of goingToWatchItAgain's data type.


///////////******************************************************************************************//////////////////////
const favMovie = "Star Wars: Episod IV";
const timesSeen = 732;
const goingToWatchItAgain = true; 

// ADD CODE BELOW HERE
var favMovieType = typeof(favMovie);
var timesSeenType = typeof(timesSeen);
var seeAgainType = typeof(goingToWatchItAgain);



const favMovie = "Star Wars: Episod IV";
const timesSeen = 732;
const goingToWatchItAgain = true; 

// ADD CODE BELOW HERE
var favMovieType = typeof(favMovie);
var timesSeenType = typeof(timesSeen);
var seeAgainType = typeof(goingToWatchItAgain);


// Declare a constant myCodingConfidence and assign it a value of "unwavering"
// ADD CODE HERE

const myCodingConfidence = "unwavering"
// Try un-commenting the line below to test your answer
console.log("My confidence in my coding ability is " + myCodingConfidence);

// ADD CODE HERE
My confidence in my coding ability is unwavering




// Challenge 1: Declare a constant name that is a string, and set it equal to your name.
// Challenge 2: Declare a variable age that is a number, and set it equal to your age.
// Challenge 3: Declare a constant loveJavaScript that is a boolean, and set it equal to true.
// Challenge 4: Declare a variable listOfComplaints and set it's value to null
///***********************************************************************////////////////
// ADD CODE HERE
const name = 'bharath';
var age = 19
const loveJavaScript = true;
listOfComplaints = null;



// Uncomment these to check your work!
console.log('My name is ' + name);
console.log('I am ' + age + ' years old');
console.log('It\'s ' + loveJavaScript + ', I love JavaScript');
console.log('The list of things I hate about JavaScript is ' + listOfComplaints);




//Strings are a data type in JavaScript. In short, they are bits of text written inside of quotation marks. You can use either single quotes ('), double quotes ("), or backticks (`) as quotation marks to wrap a string, as long as the opening and closing symbols match. They are particularly useful for any data or value that can be represented as plain text.


// Challenge
// 1. declare a variable mySingleString with single quotes ('), and set it's value to any string you like.

// 2.  declare a variable myDoubleString with double quotes ("'), and set it's value to any string you like.

// 3. declare a variable myBackString with backticks (`), and set it's value to any string you like.

// Uncomment the lines below to see examples of strings
// console.log('A string can be written inside of single quotes.');
// console.log("It can also be written inside of double quotes.");
// console.log(`Backticks work, too.`);

// ADD CODE BELOW
var mySingleString = 'blabka'
var myDoubleString = " double standadrds"
var myBackString = `bacxkstrink`



// Uncomment the line below to check your work!
console.log(mySingleString);
console.log(myDoubleString);
console.log(myBackString);



//Challenge
//Use string concatenation to join the three provided strings (first, second, and third) and assign the resulting string to a variable called welcomeStatement. The value of welcomeStatement should be 'Welcome to the jungle!'

const first = "Welcome";
const second = "to the";
const third = "jungle!";

// ADD CODE BELOW
var welcomeStatement = first + second + third

// Uncomment the line below to check your work!
console.log(welcomeStatement);
 var str = string.concat(first,second,third);
 console.log(str);



 // Challenge
// 1. Declare a variable count and set it's value equal to the length of the string hometown.

// 2. Declare a variable upper and set it's value equal to the string favAlbum in all uppercase letters.

// 3. Declare a variable lower and set it's value equal to the string favAlbum in all lowercase letters.

let hometown = "New York City";
let favAlbum = "The Rise and Fall of Ziggy Stardust and the Spiders From Mars"

// ADD CODE BELOW
var count = hometown.length;
var upper = favAlbum.toUpperCase();
var lower = favAlbum.toLowerCase();


// Uncomment the line below to check your work!
console.log(count);
console.log(upper);
console.log(lower);




//Challenge
//1. Declare a variable firstLetter and assign it a value of the first letter of songTitle using bracket notation.

//2. Declare a variable seventhLetter and assign it a value of the seventh letter of songTitle using bracket notation.

//3. Declare a variable lastLetter and assign it a value of the last letter of lyrics using bracket notation and the .length property we learned in the last challenge.

const songTitle = "Space Oddity"
const lyrics = "This is Ground Control to Major Tom / You’ve really made the grade"

// ADD CODE BELOW
var firstLetter = songTitle.charAt(0);
var seventhLetter = songTitle.charAt(6);
var lastLetter = songTitle.charAt(11);


// Uncomment the line below to check your work!
console.log(firstLetter);
console.log(seventhLetter);
console.log(lastLetter);



// Challenge
// Create a variable birthYear and set it equal to the year of your birth.

// Next, create a variable named age and set the value to your current age.

// Finally, create a variable named in10Yrs and set the value to equal your age plus 10.

// ADD CODE BELOW
var birthYear = 2000;
var age = 19;
var in10Yrs = age + 10 ;


// Uncomment these to check your work!
console.log(birthYear);
console.log(age);
console.log(in10Yrs);




// Challenge
// Perform the following multiplication/division operations in the code editor:

// 1. Multiply 20 by 4 and save the result to a variable called twentyTimesFour

// 2. Divide 9 by 3 and save the result to a variable called nineOverThree

// 3. Multiply 200.3 * 3 and save the result to a variable called twoHundredTimesThree

// ADD CODE BELOW
var twentyTimesFour = 20 * 4 ;
var nineOverThree = 9 / 3 ;
var twoHundredTimesThree = 200 * 3;


// Uncomment these to check your work!
console.log(twentyTimesFour);
console.log(nineOverThree);
console.log(twoHundredTimesThree);

