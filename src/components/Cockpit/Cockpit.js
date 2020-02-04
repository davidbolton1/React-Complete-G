import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    btnClass = classes.Red;
    if (props.showPersons){
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className = {classes.cockpit}>
        <h1>David's React App</h1>
        <p className={assignedClasses.join(' ')}>This is working!</p>
        <button className={btnClass}
        onClick={ this.togglePersonsHandler}>Toggle Persons
        </button>
        </div>
    );
}

export default cockpit