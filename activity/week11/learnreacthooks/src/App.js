import React,{useState,useEffect,useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import {useTitleInput} from "./hooks/useTitleInput"
function App() {
const [name,setName]=useTitleInput('')
const [inputv,setinputv] =useState('')
 const ref=useRef()
  //lifecycle events
  //constructor -- useEffect [] only once  
  // componentdidupdate  --useeffect -on evry state change---
  //componentdidupdate -- useEffect[id] whwenver the state is updated useeffect will be called
  //componentwillunmount
useEffect(() => {
   
  console.log('hello')
  document.title=name

}, [name])

return (
 <div ref={ref}>
 <h1  onClick={()=>ref.current.classList.add('blueadd')}> hello {name}</h1>
 <input onChange={(e)=>setName(e.target.value)} value={name} />
 <hr/>
 <Counter/>
 <hr/>
 <form onSubmit={(e)=>{
   e.preventDefault()
   formSubmit(inputv,setinputv)
 }}>
   <input value={inputv} onChange={(e)=>setinputv(e.target.value)}  />
   <button>submit</button>
 </form>
 </div>
);
}

const formSubmit = (value,setvalue)=>{
console.log(`bal baka ${value}`)
setvalue('')
}

export default App;
