const express = require('express');
const router = express.Router();
const db = require('../models');
console.log(db)
router.get('/',(req,res)=>{

    db.Restaurants.find()
    .then((data)=>res.json(data))
    .catch((err)=>console.log(err))
})

router.post('/',(req,res)=>{
    db.Restaurants.create(req.body)
    .then(()=> res.redirect('/restaurants'))
    .catch((err)=> console.log(err))
})

router.get('/:id',(req,res)=>{
    console.log(req.params.id)
    db.Restaurants.findById({_id:req.params.id})
    .then((data)=> res.json(data))
    .catch((err)=>console.log(err))
})




router.put('/:id',(req,res)=>{
    console.log(req.params.id)
    db.Restaurants.findOneAndUpdate({_id:req.params.id},req.body)
    .then((data)=>res.json(data))
     .catch(()=>console.log("error",err))
})

router.delete('/:id',(req,res)=>{
    console.log(req.params.id)
    db.Restaurants.findOneAndDelete({_id:req.params.id})
    .then(()=>res.send("restaurant data deleted"))
  
})


module.exports = router;