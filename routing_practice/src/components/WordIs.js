import React, {useState} from 'react';
import {Link, Redirect, Router} from '@reach/router'

const WordIs = (props) => {
    return ( 
        <p>Your word is: {props.word}</p>
    );
}

export default WordIs;