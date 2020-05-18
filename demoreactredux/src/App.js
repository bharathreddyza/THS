import React, { Component } from 'react'
import {Route , Switch} from 'react-router-dom'
import MoviesList from './Movies/MoviesList'
import MoviesDetail from './Movies/MoviesDetail'

function App(){
  return (
    <>
     
      <Route exact path='/' component={MoviesList}/>
      <Route path='/:id' component={MoviesDetail} />
    </>
  )
}

export default App
//React Fragment - it will not append the div to the actual dom

