const mongoose = require('mongoose')

const userDetailsSchema = new mongoose.Schema({
   firstName:{
type:String
   },
   userName:{
       type:String
   },
   lastName:{
       type:String
   },
   profileImage:{
       type:String
   },
   bio:{
       type:String
   },
   challenges:{
       img:{
           type:String
       },
       title:{
           type:String
       },
       fist:{
           type:Number
       }
   },
   
    


})

const USERS = mongoose.model('USERS', usersSchema)



module.exports = USERS
