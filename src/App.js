import React, { Component } from 'react';
import Header from './Components/Header';
import './CSS/Reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className ="App">
        <Header></Header>
      </div>
    );
  }
}

export default App;