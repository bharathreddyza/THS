//OBJECT ORIENTED PROGRAMMING

// OBJECT STORE FUNCTIONS WITH THEIR ASSOCIATED DATA 

const user1 = {
    name : 'TOM' ,
    score : 4,
    increment : function(){
        user1.score++
    }
}

// property - name,score 
// methods - increment( function)

///what are methods ?
///// - they are functions inside an object 

/// creating a user by using dot notation 
// 
const user2 = {}

user2.name = 'PLANT'
user2.score = 5
user2.increment = function(){
    user2.score++
}


//adding properting and methods is called as --------------

// properties vs methods
// what is property ?
// 
// what is method ? 
// 

// SOL1 : Generate Objects using functions 
// FUNCTIONAL INSTATIONS 
// we creating new instances based on the functions
function userCreator(name,score){
    // create object 
    const newUser = {}
    newUser.name = name;
    newUser.score = score
    newUser.increment = function(){
        newUser.score++
    }
   
    //return object
    return newUser
   
   }
   //function
   const user1 = userCreator('raza' , 4)
   const user2 = userCreator('tim' , 10)
   
   // problems
   // common methods are getting created everytime in the memory


   // SOL 2 : 
// SHARED METHODS USING FUNCTIONS 
function userCreator(name, score){
    const newUser = Object.create(userFunctionStore)
    newUser.name =name
    newUser.score = score
    return newUser   
   }
   const userFunctionStore = {
       increment : function(){
           console.log("this keyword reference",this)
           this.score++
       },
       login : function(){
           console.log("you are logged iN")
       }
   }
   const user1 = userCreator('raza' ,10)
   const user2 = userCreator('plant', 4)

   