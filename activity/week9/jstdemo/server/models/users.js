const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    email:{
        type:String,
        required:["enter your email"],
    },
    password:{
        type:String,
        required:["enter your password"]
    },
    googleId:String,
    userName: String
})

const USERS = mongoose.model('USERS', usersSchema)



module.exports = USERS

