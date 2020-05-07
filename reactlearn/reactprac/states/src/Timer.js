 
import React, { PureComponent } from 'react'
//16.4 - before private class fields 
class Timer extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            count :  0
        }
    console.log("constructor:  1 ")
    //before the intial render 
    //setting up the initial state in the constructor - count : 0
    }
    componentDidMount(){
        console.log("cdm : 3")
       this.update =()=>{
            setInterval(()=>this.setState({count:this.state.count +1}),1000)
       }
    //    this.update()
       /// ONce through out the lifccycle 
       /// Best for the Network request 
       // ONce APis 
    }
    componentDidUpdate(prevProps,prevState){
        console.log("cdu : 5")
        console.log("prevState," , prevState)
        if(prevState.count >=5){
            this.setState({
                count : 0 
            })
        }
        //auto save into local storage
        //onchage 
        //
    }
    // componentWillUnmount(){
    //     clearInterval(this.update())
    // }
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log("before the render method TIMER IAM STOPPINF " , nextProps)
    //     if(nextProps.timerValue !== this.props.timerValue){
    //         return true
    //     }return false
    // }

 render(){
        console.log("render   :2 in Timer")
        const {count} = this.state
        
        return(
            <div>
                <h1>Timer timerValue from App : {this.props.timerValue}</h1>
            {this.state.count == 0 ? 'Loading' :  <h1>Timer : {this.state.count}</h1>}
            
            </div>
        )
    }
}

export default  Timer