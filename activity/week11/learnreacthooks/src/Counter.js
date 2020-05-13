import React,{useState} from 'react'


 const Counter =() =>{
    const[val,setVal]=useState(0)

    return(
        <>
                <h1>counter value: {val}</h1>

        <button onClick={()=>setVal(val+1)}>+</button> 
        <button  onClick={()=>setVal(val-1)}>-</button> 
        </>
    )
}
 export default Counter