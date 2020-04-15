const express = require('express');
const router = express.Router()

const data = ["bat","rat","cat"]

router.get('/', (req,res)=>{
     res.render('products',{data:data})
})

function middlewear(req,res,next){
    console.log(req.body)
    data.push(req.body.product)
    next()
}


router.post('/',middlewear,(req,res)=>{
   res.redirect('/products')
})

module.exports = router