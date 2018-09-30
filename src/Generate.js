import React from 'react';

const Generate = (props) => {
    return (
        <div>
            <button onClick={props.handleGenerate}>Generate</button>
        </div>
    )
}

export default Generate;