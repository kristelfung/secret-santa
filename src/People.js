import React from 'react';
import Person from './Person';

const People = (props) => {
    return (
        <div>
            {
                props.people.map((person) =>
                    <Person person={person} key={person}/> // pass down name
                )
            }
        </div>
    )
}

export default People;