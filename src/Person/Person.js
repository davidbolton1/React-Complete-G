import React from 'react';
//import './Person.css';
import styled from 'styled-components';
//import Radium from 'radium';
/* const 5 = [1, -1, 3]
const t2 = t.concat(5)
console.log(t2) = [1, -1, 3, 5]
Adding some things later
*/
const StyledDiv = styled.div`
width: 70%;
height: 50%;
margin: auto;
border: 1rem solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;
}
@media (min-width: 500px) {
.Person {
    width: 450px;
}
`

const Person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    //console.log(props)
    return ( 
    //< div className="Person" style={style}>
        <StyledDiv>
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p> 
        <p> {props.children} </p> 
        <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
};
// export default Radium(Person); 
export default Person; 