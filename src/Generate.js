import React from 'react';

const Generate = (props) => {
    return (
        <button className="generate-button" onClick={props.handleGenerate}>GENERATE SECRET SANTA</button>
    )
}

export default Generate;