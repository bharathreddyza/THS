const express = require('express');
const app = express();
const port = 3200;
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json())

const indexRouter = require('./routes/index')
app.use('/' , indexRouter)

const productsRoute = require('./routes/products')
app.use('/products', productsRoute)


app.listen(port,()=>{console.log(`port is running at ${port}`)})