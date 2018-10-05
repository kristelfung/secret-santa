import React from 'react';

const Person = (props) => {
    return (
        <div>
            {props.number}
            {props.person}
            <p>{props.santa}</p>
            <button onClick={(e) => {props.handleDeletePerson(props.person)}}>
                Remove
            </button>
        </div>
    )
}

export default Person;