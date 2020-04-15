const mongoose = require('mongoose');


// define schema - type and format with which 
// schema saving user inform 

const productsSchema = new mongoose.Schema({
    productName: String,
    price: Number
    
    })

    const products = mongoose.model('products' ,productsSchema);

    module.exports = products