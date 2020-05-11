import React from 'react'
import {withRouter} from 'react-router-dom'
  function product(props) {


const data =[
    {name:'iPhone',i:0,price:100 },
    {name:'samsung',i:1,price:200 },
    {name:'redmi',i:2,price:300 },

]
const handleClick= ()=>{
    console.log("hello")
    props.history.push('/dashboard')
}

    return (
         <div style={{display:'flex'}}>
            {data.map((data)=>(
                <div style={{border:'2px solid black'}}> 
                <h4>{data.name}</h4> 
                <h4>{data.price}</h4>
                <button onClick={handleClick} >buy now</button>

                </div>
            ))}
        </div>
    )
}

export default withRouter(product)

//with router -higher order component 
//it will pass the default props of the match history and location ehich are not directly lined or to the nested routes 

