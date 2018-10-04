import React from 'react';
import Person from './Person';

const People = (props) => {
    return (
        <div>
            {props.people.map((person, index) =>
                <Person person={person} santa={props.santas[index]} number={index + 1} key={person} handleDeletePerson={props.handleDeletePerson}/> // pass down name
            )}
        </div>
    )
}

export default People;