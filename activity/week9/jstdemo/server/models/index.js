const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/authdemo', { useNewUrlParser: true })
 .then(()=> console.log('database connected'))
.catch(error => handleError(error));

const USERS  = require('./users')

module.exports = {
    USERS
}