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
  otherState: 'some other value',
  showPersons: false
}

  switchNameHandler = (newName) => {
    //console.log('Was clicked')
    this.setState({
      persons: [
        { id: 'asf',
          name: newName, age: 28
        }, 
        { id: 'as23f',
          name: 'Manu', age: 29 
        }, 
        { id: 'asasdfasf',
          name: 'Stephanie', age: 29}
      ],
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  nameChangedHandler = ( event, id ) => {
    //const person = this.state.persons.findIndex();
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
  })
}

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person
          click={() => this.deletePersonHandler(index)} 
          name={person.name} 
          age={person.age}
          key={person.id}
          changed={(event) => this.nameChangedHandler(event, person.id)}/>
        })}
        </div>
      );
      style.backgroundColor = 'red'
    }
     return (
      <div className="App">
        <h1>David's React App</h1>
        <p>This is working!</p>
        <button 
        style={style}
        onClick={ this.togglePersonsHandler}>Toggle Persons
        </button>
      {persons}
        
      </div>
      ); 
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Heyyy'))
  }
}

export default App;
