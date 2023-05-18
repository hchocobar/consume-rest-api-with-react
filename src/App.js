import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Todos} from "./Componets/Todos";
import {Users} from "./Componets/Users";
import {User} from "./Componets/User";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <User/>
        <Users/>
        <Todos/>
      </div>
    );
  }
}

export default App;