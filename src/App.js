import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'

import Home from './pages/Home.js';

import './App.css';

class App extends Component{
  render(){
    return(
      <>
        <Route exact path="/" component={Home} />
      </>
    )
  }
}

export default App;
