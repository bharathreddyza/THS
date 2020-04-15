const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    category:String,
    desc:String,
    price:Number
})

const products = mongoose.model('products',productSchema);

module.exports = products