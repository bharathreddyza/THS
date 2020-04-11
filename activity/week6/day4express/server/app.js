const express = require('express');
const app = express();
const port =4000;
const path = require('path')



//set view engine 
app.set('view engine', 'ejs')

//serve static assets 
//app.use is the middlware
app.use('/public' ,express.static(path.join(__dirname, 'public')))



// const friends = ['a','b','c'];
// const data = [
//     { name:'tom', age : 20 , njob: 'dev' },
//     { name:'cat', age : 20 , njob: 'marketing' } ,  
//      { name:'rat', age : 20 , njob: 'finance' }
// ]

const indexroute = require('./routes/index')
const productroute = require('./routes/product')
const userroute = require('./routes/users')
app.use('/' , indexroute)
app.use('/product' , productroute)
app.use('/users' ,userroute)
app.use('about',indexroute)
app.use('friends' , indexroute)
app.use('contact' , indexroute)

app.listen(port,()=>console.log( `port is ruuning at port ${port}`))





//@path -- route '/'
//GET -HTTP method 
//response --> render index.ejs




// app.get('/product',(req,res)=>{
//     res.send("product page")
// })


// app.get('/home',(req,res)=>{
//     res.send("home page")
// })
// app.get('/contact',(req,res)=>{
//     res.send("bharath 9951104366")
// })


// app.get('/users/:name',(req,res)=>{
//     console.log(req.params)
//     res.send(req.params.name)
// })


// app.get('/friends',(req,res)=>{
//     res.send(`${friends}`)
// })


// app.get('/friends/:name',(req,res)=>{
//     var fill = data.filter((user)=>{
//         if(user.name == req.params.name){
//       return user
//     }})
//  res.json(fill)
    
// }) 



//run server 



// app.get('/',(req,res)=>{2
    
//     res.render('index.ejs')
// })



// app.get('/product',(req,res)=>{
//     res.render("product.ejs")
// })



// app.get('/contact',(req,res)=>{
//     res.render('contact.ejs')
// })


// app.get('/users',(req,res)=>{
//     res.render('users.ejs')
// })


// app.get('/friends',(req,res)=>{
//     res.render('friends.ejs')
// })

