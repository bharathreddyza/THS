import React, { Component } from 'react'

export class Pomodoro extends Component {
    constructor(props){
        super(props)
        this.state={
             minutes:25,
            seconds:60
        }
    }
    componentDidMount(){
        setInterval(()=>{
            if(this.state.seconds ==0){
                this.setState({
                    minutes:this.state.minutes --,
                    seconds:60
                })
            }else{
            this.setState({
                count:this.state.seconds --
            })}
        },1000)
       
    }
    render() {
        const {minutes,seconds}= this.state
        return (
            <div>
                <h1>LET THE COUNTDOWN BEGIN!!</h1>
                  <span>{minutes}:{seconds}</span> <br/>
                  <button>start</button>
                  <button>stop</button>
            </div>
        )
    }
}

export default Pomodoro
