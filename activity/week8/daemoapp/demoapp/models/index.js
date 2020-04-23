const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demoapp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log(`Database is connected`)
}).catch((err)=>{
    console.error(err)
})

const USERS = require('./users')

module.exports = {
    USERS
}