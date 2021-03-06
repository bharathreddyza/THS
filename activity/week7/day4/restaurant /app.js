const express = require('express');
const app = express();
const port = 3700;
const db = require('./models')
var methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.set('view engine', 'ejs')
const path = require('path')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const indexroute = require('./routes/index')
const restaurantroute = require('./routes/restaurants')
const storesRoute = require('./routes/stores')

app.get('/',(req,res)=>{
    res.send("hello")
})
app.use('/restaurants',restaurantroute)
app.use('/stores',storesRoute)

app.listen(port,()=>console.log( `port is ruuning at port ${port}`))