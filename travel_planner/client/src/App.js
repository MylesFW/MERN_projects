import './App.css';

import { Redirect, Router, Link } from '@reach/router';

import NotFound from "./views/NotFound"
import Destination from "./views/Destination"
import Destinations from "./views/Destinations"
import NewDestination from "./views/NewDestination"
import EditDestination from "./views/EditDestination"

function App() {
  return (
    // className is just using bootstrap styling
    <div className="container">
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
          <h1 className="navbar-brand mb-0">Travel Planner</h1>
          <div className="navbar-nav justify-content-between">
            <Link to="/destinations" className="btn btn-sm-outline-primary mx-1">All Destinations</Link>
            <Link to="/destinations/new" className="btn btn-sm-outline-primary mx-1">New Destination</Link>
          </div>
        </nav>

        <Router>
          <Destinations path="/destinations"></Destinations> 
          <Destination path="/destinations/:id"></Destination>
          <EditDestination path="/destinations/:id/edit"></EditDestination>
          <NewDestination path="/destinations/new"></NewDestination>
          <Redirect from="/" to="/destinations" noThrow="true"></Redirect>
          <NotFound default></NotFound>
        </Router>

    </div>
  );
}

export default App;
