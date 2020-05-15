import React from 'react';

const person = (props) => {
    // This is how to add js code in the middle of jsx
    return <p>I'm {props.name}! I am {props.age} years old.</p>
}

export default person;