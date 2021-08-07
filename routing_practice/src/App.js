import React, {useState} from 'react';
import {Link, Redirect, Router} from '@reach/router'
import Welcome from './components/Welcome';
import Number from './components/Number';
import WordIs from './components/WordIs';
import Color from './components/Color';

const App = () => {
  const [clicked, setClick] = useState(false)

  return ( 

    <div>
      <Router>
        <Redirect from="/" to="/home" />
        <Welcome path="/home" />
        <Number path="/home/:number" />
        <WordIs path="/home/:word" />
        <Color path="/home/:word/:fontColor/:backgroundColor" />
      </Router>
    </div>
  );
}

export default App;