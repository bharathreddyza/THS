const express = require('express');
const router = express.Router()
const db = require('../models')
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);


router.get('/',(req,res)=>{
    res.render('register')
})


router.post('/',async(req,res)=>{
  db.Register.findOne({userName:req.body.userName})
  .then((data)=>{
    if(data){
      return res.status(409).json({message:'user already exist'})
    }
    const newUser =new db.Register( {
      userName:req.body.userName,
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      password:req.body.password
      })
  
  // const hashedPassword = await bcrypt.hash(req.body.password, 10) 
     bcrypt.genSalt(10, function(err, salt) {
     bcrypt.hash(req.body.password, salt, function(err, hash) {
        if(err) throw err
        newUser.password = hash
        newUser.save()
        .then((data)=>res.json({msg:'user created'}))

    });
})
 
}) .catch((err)=>console.log(err))
})

module.exports = router;


