import React, {useState} from 'react';
import {Link, Redirect, Router} from '@reach/router'




const Color = (props) => {

    return ( 
        <div style={{color: props.fontColor, backgroundColor: props.backgroundColor}}>
            <p >Here is your word: {props.word}</p>
        </div>
    );
}

export default Color;