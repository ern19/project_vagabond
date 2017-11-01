import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js'
import styled from 'styled-components'
import CitiesList from './components/CitiesList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <CitiesList />
      </div>
    );
  }
}

export default App;
