import React, {useState} from 'react';
import {Link, Redirect, Router} from '@reach/router'

const Number = (props) => {
    return ( 
        <p>Your number is: {props.number}</p>
    );
}

export default Number;