const mongoose = require('mongoose');

const restaurantsSchema = new mongoose.Schema({
    restaurantName: String,
    email:{
        type:String,
        required:['email is compulsory'],

    },
    phoneNumber: Number,

    })

    const Restaurants = mongoose.model('restaurants' ,restaurantsSchema);

    module.exports =  Restaurants
