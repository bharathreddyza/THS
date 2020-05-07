import React, { Component } from 'react';
import Timer from './Timer'
import Counter from './Counter'
import Api from './githubapp/apicall'
import App3 from './githubapp/apicall';
export default class App extends React.Component{
  state = {
    parentValue : 0,
    timerValue : 0
  }
  componentDidMount(){
    console.log("cdm : 3")
   this.update =()=>{
        setInterval(()=>this.setState({parentValue:this.state.parentValue +1}),1000)
   }
   this.update()
   /// ONce through out the lifccycle 
   /// Best for the Network request 
   // ONce APis 
}

  render(){
    return(
       <div>
          <App3/>
         {/* <Counter parentValue={this.state.parentValue} />
         <hr/>
          <button onClick={()=>this.setState({timerValue: this.state.timerValue+ 1})}>
            Change TImer </button>
         <Timer timerValue={this.state.timerValue}/> */}
        </div>
    )
  }
}