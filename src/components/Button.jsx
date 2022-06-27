
import React from 'react';

const Button = ({changePhrase}) => {
    return (
        <div>
            <button className='button__quotes' onClick={changePhrase}></button>
        </div>
    );
};

export default Button;