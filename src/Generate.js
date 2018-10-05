import React from 'react';
import santahat from './images/santa-hat.svg';

const Generate = (props) => {
    return (
        <button className="generate-button" onClick={props.handleGenerate}>
            <img src={santahat} class="santa-icon" />
            Generate Secret Santa
        </button>
    )
}

export default Generate;