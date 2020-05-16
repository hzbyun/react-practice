import React from 'react';

const numberPlate = (props) => {
    const colums = []
    for (var i = 0; i < props.colCount; i++) {
        if (i !== 0) {
            colums.push(', ') 
        }

        colums.push(Math.floor(Math.random() * 44 + 1) + '');
    }
    
    return (
        <p>
            {colums}
        </p>
    )
}

export default numberPlate;