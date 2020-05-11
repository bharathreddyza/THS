import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'


export class Login extends Component {
    
state={
    email:"bharath@gmail.com",
    password:"bharath",
    redirectState:false
}

handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}

handleSubmit=(e)=>{
    e.preventDefault()
    if(this.state.email == "bharath@gmail.com" && this.state.password=="bharath"){
        this.props.loginHandler()
        // this.props.history.push('/dashboard')
        this.redirectAuthState()
    }
}

redirectAuthState=()=>{
    this.setState({
        redirectState:true
    })
}
render() {
    const {email,password,redirectState} = this.state
    const {from}= this.props.location.state || {from:{pathname:'/'}}
    if(redirectState){
        return <Redirect to={from}/>
    }
    console.log("login",this.props)
        return (
            <div>
                <h1>controlled login form</h1>
                <form onSubmit={this.handleSubmit}>
                       <input
                      value={email}
                      name="email"
                      type="text"
                       placeholder="enter email"
                      onChange={this.handleChange}
                       />

                    <input
                      value={password}
                      name="password"
                      type="password"
                       placeholder="enter password"
                      onChange={this.handleChange}
                       />

                       <button type="submit">login</button>
                </form>
            </div>
        )
    }
}

export default Login
