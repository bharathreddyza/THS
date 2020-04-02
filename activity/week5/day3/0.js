// the first approach by using object.create

function userCreator(name,score){
    const newUser = Object.create(userFunctions)
    newUser.name = name 
    newUser.score = score
    return newUser
}

const userFunctions = {
    increment : function(){this.score++},
    login : function(){console.log("hello" , this.name)}
}

const user1 = userCreator('TOM', 4)
user1.login()

function paidUserCreator(paidName, paidScore,accountBalance){
    const newPaidUser = userCreator(paidName,paidScore)
    Object.setPrototypeOf(newPaidUser,paidUserFunctions)
    newPaidUser.accountBalance = accountBalance
    return newPaidUser
}
const paidUserFunctions = {
    increaseBalance : function(){
        this.accountBalance++
    }
}
Object.setPrototypeOf(paidUserFunctions,userFunctions)

const paidUser1 = paidUserCreator('Smacky' , 8 , 25)

/// using new keyword
function UserCreator(name,score){
    this.name = name 
    this.score = score
}

UserCreator.prototype.increment = function(){this.score++};
UserCreator.prototype.login =  function(){console.log("hello" , this.name)};


const user1 = new UserCreator('TOM', 4)
user1.login()

function PaidUserCreator(paidName, paidScore,accountBalance){
    // const newPaidUser = userCreator(paidName,paidScore)
       userCreator.call(this, paidName, paidScore)
    this.accountBalance = accountBalance
}

paidUserCreator.prototype = Object.create(userCreator.prototype)
PaidUserCreator.prototype.increaseBalance = function(){
    this.accountBalance++
}

const paidUser1 = new paidUserCreator('Smacky' , 8 , 25)
paidUser1.login()


///convert to class
 class UserCreator {
     constructor (name, score){
        this.name = name 
        this.score = score
     }

     increment = function () {
        this.score++
     };
     login =  function(){console.log("hello" , this.name)
    };
 }
 const user1 = new UserCreator('TOM', 4)
 user1.login()

 class PaidUserCreator extends userCreator {
     constructor(paidName,paidScore,accountBalance){
         super(paidName,paidScore)
         this.accountBalance = accountBalance
     }
     increaseBalance = function () {
             this.accountBalance++
             console.log(accountBalance)
     }
 }

 const paidUser1 = new PaidUserCreator('Smacky' , 8 , 25)
 paidUser1.increaseBalance()