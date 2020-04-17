const express = require('express');
const router = express.Router();
const db = require('../models');
console.log(db)
router.get('/',(req,res)=>{

    db.Restaurants.find()
    .then((data)=>res.render('restaurants',{data:data}))
    .catch((err)=>console.log(err))
})

router.post('/',(req,res)=>{
    db.Restaurants.create(req.body)
    .then((data)=> res.redirect('/restaurants',{data:data}))
    .catch((err)=> res.send(err))
})

router.get('/:id',(req,res)=>{
    console.log(req.params.id)
    db.Restaurants.findById({_id:req.params.id})
    .then((data)=> res.render('restaurantpage',{data:data}))
    .catch((err)=>console.log(data))
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