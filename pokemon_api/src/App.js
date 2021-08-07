import React, {useState} from 'react';
import Pokemon from './components/List';

const App = () => {
  const [clicked, setClick] = useState(false)

  return ( 

    <div>
      <h1>List of Poke Men from API</h1>

      <button onClick={setClick}>Click Here</button>
      { clicked ? <Pokemon /> : null }
    </div>
  );
}

export default App;