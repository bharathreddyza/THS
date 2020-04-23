const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        required:["please enter a email"]
    },
    password:{
        type:String,
        required:["password is required "]
    }
})


const USERS = mongoose.model('USERS',userSchema)

module.exports = {
    USERS
}

// creating methods in mongoose to performcertain operations 
// callback is a function passed as an argument to another function 
const createUser = function(newUser,callBack){
        bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash(newUser.password,salt,function(err,hash){
                newUser.password = hash
                newUser.save(callBack)
            })
        })
};

// method to compare a password 
// isMatch
const comparePassword = function(userPassword,hash,callBack){
    bcrypt.compare(userPassword,hash,function(err,isMatch){
        if(err) throw err
        callBack(null,isMatch)
    })
}

module.exports = {
    USERS,
    createUser,
    comparePassword
}