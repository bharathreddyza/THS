const express = require('express');
const router = express.Router()
const data = require('../utils/data')


router.get('/',(req,res)=>{
    res.render('users', {data:data})
})

router.get('/:login',(req,res)=>{
    const newuser = data.filter((user)=> user.login == req.params.login)
    res.render('newuser',{data:newuser})
    console.log(newuser)

})
module.exports = router;