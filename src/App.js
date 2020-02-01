import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css'; 
import Person from './Person/Person';
import styled from 'styled-components';
//import Radium, { StyleRoot } from 'radium';
const Styledbutton = styled.button`
background-color: green;
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;

&:hover {
  background-color: lightgreen;
  color: black
}
`;

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
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
      style.backgroundColor = 'red';
      style[':hover']= {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    //let classes = ['red', 'bold'].join(' ');

     return (
       //<StyleRoot>
      <div className="App">
        <h1>David's React App</h1>
        <p className={classes.join(' ')}>This is working!</p>
        <Styledbutton 
        onClick={ this.togglePersonsHandler}>Toggle Persons
        </Styledbutton>
      {persons}
        
      </div>
      //</StyleRoot>
      ); 
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Heyyy'))
  }
}

//export default Radium(App);
export default App;

