const mongoose = require('mongoose');


// define schema - type and format with which 
// schema saving user inform 

const userSchema = new mongoose.Schema({
email: String,
password: String

})

const users = mongoose.model('users' ,userSchema);

module.exports = users;