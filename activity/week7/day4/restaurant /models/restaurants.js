const mongoose = require('mongoose');

const restaurantsSchema = new mongoose.Schema({
    restaurantName: String,
    email:String,
    phoneNumber: Number,
      desc:String,
      price:Number,
      image:String
    })

    const Restaurants = mongoose.model('restaurants' ,restaurantsSchema);

    module.exports =  Restaurants
