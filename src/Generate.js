import React from 'react';

const Generate = (props) => {
    return (
        <button className="generate-button" onClick={props.handleGenerate}>Generate</button>
    )
}

export default Generate;