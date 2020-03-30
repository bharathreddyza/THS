
function makePerson(name,age){
    var obj = {}
    obj.name = name;
    obj.age = age
    return obj
}

makePerson('bharath', 19)
/////////////////////////////////////////////

var personStore = {
    greet : function(){
        console.log('HELLO')
    },
    introduce: function(){
        console.log("Hi, my name is " + na)
    }
}
personStore()


/////////////////////////////////////////

function personFromPersonStore(name,age){
    var nperson = Object.create(personStore)

}
///////////////////////////////////////////////////////

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
    // add code here
    var details = {}
    details.name =name
    details.age = age    
    return details
}

const vicky = makePerson('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24

////////////////////////////////////////////////////

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

const personStore = {
	// add code here
        greet :  function(){
            console.log('hello')
        }

};

// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
	// add code here
  var details = {}
  details.name = name
  details.age = age
  details.greet = function(){
    console.log('hello')
}
  return details

}

const sandra = personFromPersonStore('Sandra', 26);


// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'




/*** CHALLENGE 3 of 3 ***/

// add code here
function personFromPersonStore(name, age) {
	// add code here
  var details = Object.create(personfunctionstore)
  details.name = name
  details.age = age
  
  return details

}



const personfunctionstore = {
    introduce: function(){
        console.log('Hi, my name is sandra')
 
    },
    greet:   function(){
        console.log('hello')
      }
      

}
const sandra = personFromPersonStore('Sandra', 26);


sandra.introduce(); // -> Logs 'Hi, my name is Sandra'



