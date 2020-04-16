const express = require('express');
const router = express.Router();
const db = require('../models')


router.get('/',(req,res)=>{
    // db.products.find({},(err,data)=>{
    //     console.log(data)
    //     if(err) console.log(err)
    //     res.render('products',{data:data})
    // })
    db.products.find()
    .then((data)=> res.render('products',{data:data}))
    .catch((err)=>res.send(err))
})

router.get('/newproduct',(req,res)=>{
    res.send('add new product')
})




router.post('/newproduct',(req,res)=>{
    console.log(req.body)
    db.products.create(req.body)
    .then(()=> res.redirect('/products'))
    .catch((err)=> res.send(err))
})

module.exports = router