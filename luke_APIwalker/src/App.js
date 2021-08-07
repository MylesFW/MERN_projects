import React, {useState} from 'react';
import {Link, navigate, Redirect, Router} from '@reach/router'
import People from './components/People';
import Planets from './components/Planets';

const App = () => {
  const [category, setCategory] = useState("planets") //"planets" because the selector starts out on planets but the state is not
  const [id, setId] = useState("")

  const onChangeCategory = event => {
    setCategory(event.target.value);
    console.log(event.target.value)
    console.log(event.target)
  }

  const onChangeId = event => {
    setId(event.target.value);
  }

  const handleSubmit = (event) => {
    console.log("test")
    event.preventDefault();
    navigate(`/${category}/${id}`)
    console.log(`/${category}/${id}`)
    };


  return ( 

    <div>
      <header>

        <h1>StorageWars Search</h1>
        <form  onSubmit={(event) => handleSubmit(event)}>
          <select onChange={onChangeCategory}>
            <option value="planets">Planets</option>
            <option value="people">People</option>
          </select>
          <input style={{width: "50px"}} type="number" onChange={onChangeId} />
          <button>Search</button><br></br>
        </form><br></br>
        <Link to="/people/all">View All People</Link><br></br>
        <Link to="/planets/all">View All Planets</Link><br></br>
      </header>

      <Router>
        {/* id below is being passed to the People component */}
        <People path="/people/:id" /> 
        {/* <People path="/people/:id" category={category} id={id}/> */}
        <Planets path="/planets/:id" />
      </Router>

    </div>
  );
}

export default App;