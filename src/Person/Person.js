import React from 'react';

const person = () => {
    // This is how to add js code in the middle of jsx
    return <p>I'm a Person! I am {Math.floor(Math.random() * 30)} years old.</p>
}

export default person;