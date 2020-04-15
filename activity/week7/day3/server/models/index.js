const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test1',{useNewUrlParser: true, useUnifiedTopology: true});

const users = require('./users')

const products = require('./products')

module.exports = {
    users , products
}