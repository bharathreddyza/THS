const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({

    storeName : {
        type: String,
        required:["pleae enter your store name"]
    },
    storeContact : {
        type: Number,
        required:["pleae enter your store umber"]
    },
    storeImage : {
        type: String,
        required:["pleae enter your store image"]
    },
    storeAddr : {
        type: String,
        required:["pleae enter your store location"]
    },
    storeDesc: String,
    Storecity:String

})

const STORES = mongoose.model('stores',storeSchema);

module.exports = STORES