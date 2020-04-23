const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    first: String,
    last:String,
    userName:{
        type:String,
        required:["username required"]
    },
    password:{
        type:String,
        required:['password is cumplsary']
    },
    phone:Number

})

const Register = mongoose.model('register',registerSchema);

module.exports = Register