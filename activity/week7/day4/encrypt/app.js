const express = require('express');
const path = require('path');
const port = 5100;
const app = express();
const bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const indexroute = require('./routes/index')
const loginroute = require('./routes/login')
const registerroute = require('./routes/register')
const db = require('./models')

app.use('/',indexroute)
app.use('/login',loginroute)
app.use('/register',registerroute)


app.listen(port,()=>console.log( `port is ruuning at port ${port}`))