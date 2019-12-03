import React from 'react';

const validation = ( props ) => {
    let validationMessage = 'Text long enough';
    let inputlengthAlloed = 5;

    if (props.inputLength <= inputlengthAlloed) {
        validationMessage = 'Text too short';
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
};

export default validation;