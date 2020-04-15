const express = require('express');
const router = express.Router();
const db = require('../models')


// @Path - '/users'
// HTTP METHOD - GET
// MONGOOSE METHOD - find ( to query the users collection and list all users)
// response - res.json

router.get('/',(req,res)=>{
    db.users.find((err,data)=>{
        if(err) console.log(err)
        res.json(data)
    })
})

// @Path - '/users/login'
// HTTP METHOD - GET
// response - 'login'

router.get('/login',(req,res)=>{
    res.send('login page')
})

// @Path - '/users/login'
// HTTP METHOD - POST
// MONGOOSE METHOD - create (to post the form data to the database, its like insert MONGODB)
// MONGODB METHOD - insert
// response - send back the user saved data as jsonobject
router.post('/login' ,(req,res)=>{
    db.users.create(req.body)
    res.redirect('/users')
})

router.get('/show/:id',(req,res)=>{
    db.users.find({_id:req.params.id},
        (err,data)=>{
            if(err) console.log(err);
            res.json(data)
        })
    
})

module.exports = router;