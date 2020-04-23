var express = require('express');
var router = express.Router();
const db= require('../models')
const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
  pool:true,
  service:'Gmail',
  secure: false,
  auth:{
    user:"bharathreddyza@gmai.com",
    pass:"123"
  },
  tls:{
    rejectUnauthorized:false
  }
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//login
router.get('/login',(req,res)=>{
  res.render('login')
})

router.get('/register',(req,res)=>{
  res.render('register')
})
//path - /users/register
//HTTP METHOD ==> post (sending the form data from client to the server )
//mongoose method -> create

router.post('/register',(req,res)=>{
  console.log(req.body)
  const newUser = db.USERS.USERS({
    name: req.body.name,
    email:req.body.email,
    password:req.body.password
  })
  db.USERS.createUser(newUser,async function(err,user){
    if(err){
      console.log("error line 45")
    
      
    }else{
      const mailOptions = {
        from:"demoapp <bharathreddyza@gmail.com>",
        to:user.email,
        subject:`hey ${user.email} thank you for looking up`,
        html:`<p> good to see you </p>`
    }
    //send mail with trasnporter object
   await transport.sendMail(mailOptions,function(err,info){
       if(err){
         console.log(err)
       }else{
         console.log(info)
       }
   })
   res.render('users/login')
  }
})
})

module.exports = router;
