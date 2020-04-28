var express = require('express');
var router = express.Router();
var db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const{check,validationResult} = require('express-validator')
const auth = require('../middleware')
var passport = require('passport');
const keys = require('../config/keys')
 const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy
 var GitHubStrategy = require('passport-github').Strategy;

//github 
passport.use(new GitHubStrategy({
  clientID: keys.github.clientID,
  clientSecret: keys.github.clientSecret,
  callbackURL: "http://localhost:3000/users/github/callback"
},
function(accessToken, refreshToken, profile, cb) {
 console.log(profile)
}
));

//google

passport.use(new GoogleStrategy({
  clientID:keys.google.clientID,
  clientSecret:keys.google.clientSecret,
  callbackURL: "http://localhost:3000/users/google/callback",
  // passReqToCallback   : true
},
(request, accessToken, refreshToken, profile, done)=> {
  console.log(profile)
  db.USERS.findOne({ googleId: profile.id })
  .then((currentUser)=>{
    if(currentUser){
 console.log("user", 
 
 currentUser)
    }else{
      new USERS({
        userName:profile.displayName,
        googleId:profile.id
      }).save()
      .then((data)=>{
        console.log( "data",data)
      })
    }
  })

  

 
}
)
 )

router.get( '/google',
    passport.authenticate( 'google',{scope: 'profile'}, {
        successRedirect: '/',
        failureRedirect: '/google'
}));

//callback route for google 

router.get('/google/callback',passport.authenticate('google'),(req,res)=>{
  res.send('this is the callback funtion uri')
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//github route get 

router.get('/github',
  passport.authenticate('github',{
    successRedirect: '/',
    failureRedirect: '/google'
  }));


  router.get('/github/callback',passport.authenticate('github'),(req,res)=>{
    res.send('this is the callback funtion uri')
  })




//signup route
//path /users/signup
//HTTP METHOD -get
//check for validations  -express-validator
//hash password using bcrypt
//save the user into db 
// create a payload 
// create a jwt token using method sign 
// send the response (token) 

router.post('/register',[check('email').isEmail(),check('password').isLength({min:6})],async (req,res)=>{
    const errors = validationResult(req)
    console.log(errors)
    if(!errors.isEmpty()){
       return res.status(422).json({errors:errors.array()})

    }
    try{
      const user = new db.USERS(req.body)
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(user.password,salt);
      user.password = hash
      await user.save()
      const payload = {
        usr:{
          id:user._id
        }
      }
      jwt.sign(payload,'secret',{expiresIn:'1h'},(err,token)=>{
        if(err){
          throw err;
        }
        res.json(token)
      })
    }catch(err){
      res.status(500).send("internel server error")
    }
    
})


//path /users/login
//http method - post
//check for validations 
// generate toke 

 router.post('/login',[check('email').isEmail(),check('password').isLength({min:6})], async(req,res)=>{
              const errors = validationResult(req)
              if(!errors.isEmpty()){
                return res.status(422).json({errors:errors.array()})
              }
              try{
                const user = await db.USERS.findOne({email:req.body.email})
                if(!user){
                  return res.status(400).json({msg:"invalid credentials"})
                }
                const isMatch = await bcrypt.compare(req.body.password, user.password)
                if(!isMatch){
                  return res.status(400),json({msg:"invalid password"})
                }
                const payload = {
                  usr:{
                    id : user._id

                  }
                }
                jwt.sign(payload,'secret',{expiresIn:60},(err,token)=>{
                  if(err){
                    throw err
                  }
                  res.json(token)
                })
              }catch(err){
                res.status(500).send("server error")
              }
  })

//path users/dashboard
// http method get 
// protected route 
// by adding the auht middleware

router.get('/dashboard',auth,async(req,res)=>{
  try{
    const user = await db.USERS.findOne({_id:req.user.id})
    res.json(user)
  }catch(err){
    res.status(500).send("internal server error")
  }
})






module.exports = router;
