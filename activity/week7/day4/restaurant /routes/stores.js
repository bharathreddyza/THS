const express = require('express')

//navigation in applications =-
// code more modular 
// strucute 
// one file - later prone to more buugs 
// we are using router 
/// make life easer 
const router = express.Router()
// we want to access stores collection, import 
const db = require('../models')


// Get all stores 
router.get('/' , (req,res)=> {
    db.STORES.find()
    .then((data)=> res.render('stores',{data:data}))
    .catch((err)=>  res.send(err))
})

// Create a new Store 
router.post('/' , (req,res)=> {
    db.STORES.create(req.body)
    .then((data)=> res.redirect('/stores',{data:data}))
    .catch((err)=> res.send(err))
    
})

// Get a single store - mongoose method  ??? 
// mongoose method - findOne 
// response ?? = json 
router.get('/:id', (req,res)=> {
    const id = req.params.id 
    db.STORES.findOne({_id : id})
    .then((data)=>  res.render('storepage',{data:data}))
    .catch((err)=> res.send(err))
})


/// Update a single store - path ??? - '/stores/:id'
/// http method - put 
/// mongoose mth - findOneAndUpdate 
router.put('/:id', (req,res)=>{
    const id = req.params.id
    console.log(req.body)
    db.STORES.findOneAndUpdate({_id: id} ,req.body)
    .then((data)=> res.redirect('/stores'))
    .catch((err)=> res.send(err))
});


// Delete  a single store => path - '/stores/:id'
// mongoose method - findOneAndRemove 
router.delete('/:id', (req,res)=> {
    const id = req.params.id
    db.STORES.findOneAndRemove({_id : id})
    .then(()=> res.json({msg : "store is removed"}))
    .catch((err)=> res.send(err))
})




module.exports = router 