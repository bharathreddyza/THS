import React from 'react'


class Counter extends React.Component{

    state={
        count:0
    }

    incrementCounter = ()=>{
        this.setState({
            count:this.state.count +1
        })
    }

    decrementCounter = ()=>{
        this.setState({
            count:this.state.count -1
        })
    }

    handleCounter = (input)=>{
        if(input === 'add'){
          this.setState({
              count:this.state.count+1
          })
        }else{
     this.setState({
         count: this.state.count -1
     })
        }
    }
render(){
   return(
       <div>
           <h1>count :{this.state.count}</h1>
           <hr/>
           <button onClick={this.incrementCounter}>increment</button>
           <button onClick={this.decrementCounter}>decrement</button>
           <hr/>
          <button onClick={()=>this.handleCounter('add')}>+</button>
          <button onClick={this.handleCounter}>-</button>

       </div>
   )
}

}

export default Counter