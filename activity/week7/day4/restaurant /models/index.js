const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test3',{useNewUrlParser: true, useUnifiedTopology: true});
const Restaurants = require('./restaurants')
const STORES = require('./stores')

module.exports=  {
    Restaurants,STORES
}