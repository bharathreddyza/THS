import React from 'react';
import {Route,Link,Switch,Redirect,useLocation,useHistory} from 'react-router-dom'
 import './App.css';
 
   const fakeAuth = {
     isAuth:false,

     auth(cd){
       fakeAuth.isAuth = true;
       setTimeout(cb,100)
     },
    
     logout(cb){
       fakeAuth.isAuth=false;
       setTimeout(cb,100)
     }

   }

   class AuthButton extends React.component{

        render(){
          const history = useHistory()

          return(
            <div>
              {fakeAuth.isAuth ? 
              <p> congo
              <button 
              onClick={()=>{
                fakeAuth.logout(()=>this.history.push('/'))
              }}>logout</button> </p>
              : <p>you are not logged in</p>}
            </div>
          )
        }

   }

const Home = ()=> <h1>Home</h1>



class Login extends React.Component {
  
  
  componentDidMount(){
    this.auth()
  }
 
  auth=(authData)=>{
    
    this.setState({
      login:authData
    })
  }

  render(){

    return(
      <div>
      <form onSubmit={(e)=>this.authData(e)}>
        <input type="text"
        onChange={(e)=>this.authData(e.target.value)}>

        </input>
        <button type="submit">submit</button>
      </form>
    </div> 
    )
  }
   
}
class Dashboard extends React.Component{
  render(){
     return(

      <Redirect
            to={{
              pathname: "/login",
              // state: { from: location }
            }}
          />
     )
  }
}


function App() {
  return (
    <div className="App">
     <Link to='/'>Home</Link>
     <Link to='/login'>Login</Link>
     <Link to='/dashboard'>Dashboard</Link>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/Dashboard' component={Dashboard}/>
          <Route render={()=><h1>404 error</h1>}/>

        </Switch>
    

    </div>
  );
}

export default App;
