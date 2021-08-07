import React, { useState } from 'react';

const PersonCard = ({firstName, lastName, age, hair}) => {
    
    return (
        <div>
            <h1>{ lastName }, { firstName }</h1>
            <p>Age: { age }</p>
            <p>Hair Color: { hair }</p>
        </div>
    );
}
export default PersonCard;
