import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter'
import Products from './product'

class App extends React.Component{

  state={
     productList:[
      {id:0,votes:13, name:'super',desc:'custom domains fonts and analytics for notion',image:"https://ph-files.imgix.net/a0970d9f-709f-4392-8780-9d5f5127b458?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"},
      {id:1,votes:45, name:'quarantine Emojis',desc:'download emojis that complement life in lockdown',image:"https://ph-files.imgix.net/140f61af-e061-45fc-a851-f215fc449c3c?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"},
      {id:2,votes:76, name:'BestTimeAPI',desc:"forecast popular times of public bussinesses + analytics",image:"https://ph-files.imgix.net/692ba3d4-ab48-437f-9a04-f6763a0f2f40?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"}
          ]
  
  }
  
  
  
  
  
   incrementVote =(product)=>{
    console.log("clicked")
    this.setState({
      this.state.p
    })
  }
  
  
  
  toggle = ()=>{
    this.setState({
      toggle:!this.state.toggle
    })
    this.counter.count++

  }

  counter = ()=>{
    let count = 0

  }
  render(){
  return (
    <div>
     {this.state.toggle ? <h1>hello {this.state.name}</h1> : null}
     <button onClick={this.toggle}>toggle</button>
   <hr/>
   <Counter/>
   <Products productList={productList}
       incrementVotes ={incrementVote}

   />
    </div>
  );}
}

export default App;
