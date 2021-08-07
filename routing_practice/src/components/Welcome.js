import React, {useState} from 'react';
import {Link, Redirect, Router} from '@reach/router'

const Welcome = () => {
    const [clicked, setClick] = useState(false)

    return ( 

    <div>
        <h1> Welcome!</h1>
    </div>
    );
}

export default Welcome;