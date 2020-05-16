import React from 'react';

const numberPlate = (props) => {
    const colums = []
    for (var i = 0; i < props.colCount; i++) {
        var value = Math.floor(Math.random() * 44 + 1);
        while (colums.includes(value)) {
            value = Math.floor(Math.random() * 44 + 1);
        }

        colums.push(value);
    }
    
    return (
        <p>
            {colums.join(", ")}
        </p>
    )
}

export default numberPlate;