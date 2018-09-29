import React from 'react';

const Person = (props) => {
    return (
        <div>
            {props.person}
            <button onClick={(e) => 
                {
                    props.handleDeletePerson(props.person)
                }
            }>
            Remove
            </button>
        </div>
    )
}

export default Person;