import React, { useState } from 'react';

import Form from './components/Form';
// import Results from './components/Results';

function App() {
  const [state, setState] = useState({
    firstName: "", // the right side of the : does not change the outcome?
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  return (
    <div className="App">
      <Form inputs={state} setInputs={setState}/>
      {/* <Results data={state}/> */}
    </div>
  );
}

export default App;

