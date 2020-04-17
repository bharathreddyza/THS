const express = require('express');
const router = express.Router()
const db = require('../models');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

router.get('/',(req,res)=>{
   res.render('login')

})

router.post('/',(req,res)=>{
  console.log(req.body)
  const userName = req.body.userName;
  const password = req.body.password;
  db.Register.findOne({userName:userName})
  .then((data)=>{
      console.log('data',data)
      if(!data){
          return res.status(404).json({msg:"user not found"})
      }
      else if(!data.password){
          return res.status(404).json({msg:"wrong password"})
      }
      else{
        console.log('data',data)

          bcrypt.compare(password,data.password,(err,result)=>{
              if(err) return console.log("incorect password")
              console.log("result",result)
              if(result){
                  res.redirect('/')
              }  
          })
      }
  }) .catch((err)=>{
      console.log(err)
      res.status(404).json({msg:"incorrect username"})

  })

});
 


module.exports = router;