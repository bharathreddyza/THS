
/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
	// add code here
     
personFromConstructor.prototype.greet = function(){
    console.log("hello")

}


// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor;
simon.greet(); // -> Logs 'hello




/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
	// add code here
   this.name = name
   this.age=age
   this.greet = function(){
       console.log("hello")
   }

}

const mike = new personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'


/*** CHALLENGE 3 of 3 ***/
// add code here
personFromConstructor.prototype.introduce = function(){
    console.log("Hi, my name is mike ")
}

mike.introduce(); // -> Logs 'Hi, my name is Mike'
