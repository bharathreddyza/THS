const express = require('express');
const router = express.Router();
const db = require('../models')

// @Path - '/products'
// HTTP METHOD - GET
// MONGOOSE METHOD - find ( to query the users collection and list all users)
// response - res.json

router.get('/',(req,res)=>{
    db.products.find((err,data)=>{
        if(err) console.log(err)
        res.render('/products',{data:data})
    })
})

// @Path - '/products/newproduct'
// HTTP METHOD - GET
// response - 'products oage'


router.get('/newproduct',(req,res)=>{
    res.send('add new product')
})


// @Path - '/products/newproduct'
// HTTP METHOD - POST
// MONGOOSE METHOD - create (to post the form data to the database, its like insert MONGODB)
// MONGODB METHOD - insert
// response - send back the products saved data as jsonobject

router.post('/newproduct',(req,res)=>{
    db.products.create(req.body)
    res.redirect('/products')
})


router.get('/show/:id',(req,res)=>{
    db.products.find({_id:req.params.id},
        (err,data)=>{
            if(err) console.log(err);
            res.json(data)
        })
    
})

module.exports = router;