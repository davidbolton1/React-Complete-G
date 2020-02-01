import React from 'react';
import './Person.css';
import Radium from 'radium';
/* const 5 = [1, -1, 3]
const t2 = t.concat(5)
console.log(t2) = [1, -1, 3, 5]
Adding some things later
*/
const Person = (props) => {
    //console.log(props)
    return ( 
    < div className="Person">
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p> 
        <p> {props.children} </p> 
        <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};
export default Radium(Person); 