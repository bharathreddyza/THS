import React from 'react';
 import {Route,Link,Switch} from 'react-router-dom'
 
 const Home =()=>  <h1>Home</h1>
 const Products = ()=> <h1>Products</h1>
 const Contacts =()=> <h1> Contact us</h1>
  
 const Topic =(props)=>{
   console.log("Topic",props)
    return(
     <div>
       <h1>{props.match.params.id}</h1>
     </div>
   )
 }

 const Topics =(props)=>{
  console.log("Topics",props)
  const {match} = props
   return(
    <div>
        <Link to={`${match.url}/react`}>React</Link>  <br/>   
        <Link to={`${match.url}/angular`}>Angular</Link>  <br/>   
        <Link to={`${match.url}/vue`}>Vue</Link>  <br/>
        <Switch>   
         <Route path={`${match.url}/:id`} component={Topic}/>
          <Route render={()=> <h1>please select a topic only visible on /topic</h1>} />
         </Switch> 
     </div>
  )
}



export default class App extends React.Component{
  

  render(){
    return(
      <div>
     <Link to='/'>Home</Link>
     <Link to='/products'>Products</Link>
     <Link to='/contact'>Contacts</Link>
     <Link to='/topics'>topics</Link>

     <Switch> 

     <Route exact path="/" component={Home}/>
    <Route path="/products" component={Products}/>
    <Route path="/contact" component={Contacts}/>
    <Route path="/topics" component={Topics}/>
     
     <Route render={()=><h1>404 error</h1>}/>
    </Switch>
    </div>
    )
  }
}
