const express = require('express');
const port = 3000;
const  app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.set('view-engine','ejs');

app.use("/public" , express.static(path.join(__dirname,'/public')))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

//parse application json
app.use(bodyParser.json());

// import routes 

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const productsRoute = require('./routes/products')
app.use('/' , indexRouter)
app.use('/users', usersRouter)
app.use('/products', productsRoute)

app.listen(port,()=>{console.log(`port is running at ${port}`)})