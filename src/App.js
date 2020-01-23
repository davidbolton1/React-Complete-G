import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css'; 
import Person from './Person/Person';

class App extends Component {
state = {
  persons: [
    {
      name: 'Max', age: 28
    }, 
    {
      name: 'Manu', age: 29 
    },
    {name: 'Stephanie', age: 26}
  ],
  otherState: 'some other value'
}

  switchNameHandler = (newName) => {
    //console.log('Was clicked')
    this.setState({
      persons: [
        {
          name: newName, age: 28
        }, 
        {
          name: 'Manu', age: 29 
        },
        {name: 'Stephanie', age: 29}
      ],
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Max', age: 28
        }, 
        {
          name: event.target.value, age: 29 
        },
        {name: 'Stephanie', age: 26}
      ],
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };
     return (
      <div className="App">
        <h1>David's React App</h1>
        <p>This is working!</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Tollsfsafa')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} age={this.state.persons[0].age}/> 
        <Person 
        name={this.state.persons[1].name} age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'JOE')}
        changed={this.nameChangedHandler}> My Hobbies: Racing </Person>
        <Person 
        name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
      ); 
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Heyyy'))
  }
}

export default App;
