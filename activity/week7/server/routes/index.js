const express = require('express');
const router = express.Router()


router.get('/',(req,res)=>{
    res.render('index')
})

router.post('/',(req,res)=>{
    var num1 = req.body.number1;
    var num2 = req.body.number2;
    const sum = parseInt(num1) + parseInt(num2)
    res.json({'sum':sum} )
})



module.exports = router;