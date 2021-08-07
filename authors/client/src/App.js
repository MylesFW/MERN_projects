import logo from './logo.svg';
import './App.css';
import {Link, Router, Redirect} from '@reach/router'

import Authors from './views/Authors'
import NewAuthor from './views/NewAuthor'
import EditAuthor from './views/EditAuthor'
import NotFound from './views/NotFound';

function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <Router>
        <Authors path='/' />
        <NewAuthor path='/new' />
        <EditAuthor path='/edit/:id' />
        <Redirect from='/' to='/' noThrow='true' />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
