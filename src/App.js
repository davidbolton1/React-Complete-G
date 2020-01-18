import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
     return (
      <div className="App">
        <h1>David's React App</h1>
        <p>This is working!</p>
        <Person name="Max" age="28"/> 
        <Person name="Manu" age="29"> My Hobbies: Racing </Person>
        <Person name="Stephanie" age="26"/>
      </div>
      ); 
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Heyyy'))
  }
}

export default App;
