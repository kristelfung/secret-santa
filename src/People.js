import React from 'react';
import Person from './Person';

const People = (props) => {
    return (
        <div>
            {
                (props.people.length !== 0)
                ? props.people.map((person, index) =>
                    <Person person={person} santa={props.santas[index]} number={index + 1} key={person} handleDeletePerson={props.handleDeletePerson}/> // pass down name
                )
                : 
                <div className="people-container">
                    <p>Add a person to get started!</p>
                </div>
            }
            
        </div>
    )
}

export default People;