const express = require('express');
const router = express.Router();
const db = require('../models')


router.get('/',(req,res)=>{
    db.products.find({},(err,data)=>{
        console.log(data)
        if(err) console.log(err)
        res.render('products',{data:data})
    })
})

router.get('/newproduct',(req,res)=>{
    res.send('add new product')
})

router.post('/newproduct',(req,res)=>{
    console.log(req.body)
    db.products.create(req.body)
    res.redirect('/products')
})

module.exports = router