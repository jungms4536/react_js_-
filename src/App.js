import React,{component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {
  render(){
    return (
      <div className="gray-background">
        <img src={logo} lat = "logo"/>
        <h2>Lets develop management system!</h2>
      </div>
    );
  }
}

export default App;
