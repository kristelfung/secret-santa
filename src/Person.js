import React from 'react';

const Person = (props) => {
    return (
        <div className="person">
            <div className="person__number">
                {props.number}
            </div>
            <p className="person__name">
                {props.person}
            </p>
            {
                (props.renderRemove === true)
                ? <button className="person__remove" onClick={(e) => {props.handleDeletePerson(props.person)}}>
                    Remove
                </button>
                : <a href={ "/?name=" + props.person + "&key=" + props.encryptString(props.santa)} className="person__link">Copy link</a>
            }
        </div>
    )
}

export default Person;