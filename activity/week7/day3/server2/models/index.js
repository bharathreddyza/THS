const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test2',{useNewUrlParser: true, useUnifiedTopology: true});


const products = require('./products')

module.exports = {
    products
}
