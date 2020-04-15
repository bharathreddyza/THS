const express = require('express');
const app = express();
const port = 3333;
app.set('view engine', 'ejs')
const path = require('path')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

const indexroute = require('./routes/index')
const productroutes = require('./routes/products')
// app.post('/', function (req, res) {
//     res.render('/', { 'number1' :req.body.number1,
//      'number2' : req.body.number2});
// });


app.use('/',indexroute)
app.use('/products',productroutes)

app.listen(port,()=>console.log( `port is ruuning at port ${port}`))