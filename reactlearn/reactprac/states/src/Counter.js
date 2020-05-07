import React from 'react'



export default class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value  : 0
        }
        console.log("constructor :1in Counter " )
    }

    // componentDidMount(){
    //     console.log("cdm in counter");
        
    //     this.updateValue = ()=>{
    //         setInterval(()=>{
    //             this.setState({
    //                 value : this.state.value  + 1
    //             })
    //         } , 1000)
    //     }
    //     this.updateValue()
    // }

    inc=()=>{
        this.setState({
            value : this.state.value + 1
        })
    }
    dec=()=>{
        this.setState({
            value : this.state.value + 1
        })
    }

    render(){
        console.log("render : 2 in Counter")
        return(
            <div>
                <h1>Coming App Props: {this.props.parentValue}</h1>
                <h1>COunter Value  : {this.state.value }</h1>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>+</button>

            </div>
        )
    }
}