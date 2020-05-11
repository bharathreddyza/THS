import React, { Component } from 'react';
 import {Link,Route,Switch,Redirect, Router} from 'react-router-dom'

import {Login,Home,Products,Sidebar,Dashboard,Pomodoro,Images} from './components'
function PrivateRoutes({component:Component,auth,...rest}){
         return <Route
            {...rest}
       render={(props)=>
       auth ?
       <Component {...props}/>:
      <Redirect to={{pathname:'/login',
      state:{from:props.location}}} />
       }
        />
}



 class App extends React.Component{
   state={
     auth:false
   }
   loginHandler=()=>{
     this.setState({
       auth:true
     })
   }

   render(){
    const {auth} = this.state

    return(

      <div>

        <Link to='/'>Home</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/login'>Login</Link>
        <Link to='/products'>Products</Link>
        <Link to='sidebar'>Sidebar</Link>
        <Link to='/pomodoro'>Pomodoro</Link>
        <Link to='/images'>Images</Link>

       <Switch>
       <Route exact path="/" component={Home}/>
        <Route   path="/login" render={(props)=><Login {...props} auth={auth} loginHandler={this.loginHandler} />}/>
        <PrivateRoutes auth={auth} path='/dashboard' component={Dashboard}  />
        <PrivateRoutes auth={auth} path='/products' component={Products}  />
        <PrivateRoutes auth={auth} path='/sidebar' component={Sidebar}  />
        <Route   path='/pomodoro' component={Pomodoro}  />
        <Route   path='/images' component={Images}  />

              <Route render={()=><h1>404 not found</h1>}/>
       

       </Switch>
      </div>
    )

   }
 }
  

export default App;
