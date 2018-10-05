import React from 'react';

const Person = (props) => {
    return (
        <div className="person">
            <p className="person__name">{props.number} {props.person}</p>
            {
                (props.renderRemove == true)
                ? <button className="person__remove" onClick={(e) => {props.handleDeletePerson(props.person)}}>
                    Remove
                </button>
                : <p className="person__link">{props.santa}</p>
            }
        </div>
    )
}

export default Person;