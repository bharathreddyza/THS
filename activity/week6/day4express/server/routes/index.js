const express = require('express');
const router = express.Router()



//@path - '/'
// // http method - GET
// response --> render index.js

router.get('/',(req,res)=>{
    res.render('index')
})









router.get('/contact',(req,res)=>{
    res.render('contact.ejs')
})




router.get('/friends',(req,res)=>{
    res.render('friends.ejs')
})


router.get('/about',(req,res)=>{
    res.render('about.ejs')
})



module.exports = router;