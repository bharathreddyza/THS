import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      time : 0
    }
    console.log("constructor :1")
  }

  componentDidMount() {
    console.log("cdm : 3")
    //get called only through out lifecycle 
    this.tick = ()=>{
      setInterval(()=>{
        this.setState({
          time : this.state.time + 1
        })
      },1000)
    }
    this.tick()
  }
  
  componentDidUpdate(prevprops,prevstate){
    console.log(prevprops)
    console.log(prevstate)
    if(prevstate.time >=5 ){
        this.setState({
          time : 0
        })
    }
    //auto save functionality
  }
  componentWillUnmount(){
    console.log("hello")
  }

  render(){
    console.log("render : 2")
    return(
      <div>
        <h1>Time : {this.state.time}</h1>
      </div>
    )
  }
}

export default App;
