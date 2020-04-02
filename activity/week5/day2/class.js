//Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. PersonClass should also have a method called greet that logs the string 'hello'.

class personClass {
    constructor(name){
       this.name = name;
       this.greet = function(){
           console.log("hello")
       }
    }
}

//Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method, DeveloperClass should have an introduce method. When called, introduce should log the string 'Hello World, my name is [name]'.
class DeveloperClass extends DeveloperClass {
        introducd(){
          console.log("Hello, world my name is " + this.name)
        }
}


