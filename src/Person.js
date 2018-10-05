import React from 'react';

const Person = (props) => {
    return (
        <div className="person">
            <p>{props.number} {props.person}</p>
            {
                (props.renderRemove == true)
                ? <button className="remove" onClick={(e) => {props.handleDeletePerson(props.person)}}>
                    Remove
                </button>
                : <p>{props.santa}</p>
            }
        </div>
    )
}

export default Person;