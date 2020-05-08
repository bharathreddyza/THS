import React from 'react'
import {Link} from 'react-router-dom'

const headerstyle={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}

export default function Header() {
    return (
       <header style={headerstyle}>
           <h1>Todo List</h1>
           <Link to='/' >Home</Link>
           <Link to='/about'>About</Link>
       </header>
    )
}
