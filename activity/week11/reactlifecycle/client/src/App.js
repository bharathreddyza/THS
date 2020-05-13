import React from 'react';
import {Route,Switch} from 'react-router-dom'
 import './App.css';
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
function App() {
  return (
    <div className="App">
    <Switch>
     <Route path="/" exact component={MovieList} />
     <Route path='/:id' component={MovieDetails}/>
     </Switch>
    </div>
  );
}

export default App;
