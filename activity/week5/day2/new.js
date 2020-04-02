//Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string 'hello'.

// function PersonConstructor(){
//     this.greet =function(){
//         console.log("hello")
//     }
// }

//Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.

function personFromConstructor(name, age){
    this.name = name;
    this.age = age

}

const anew = new personFromConstructor('bharath',19)


//Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".
personFromConstructor.prototype.introduce = function(){
     console.log('Hi, my name is ' + this.name)
     
}