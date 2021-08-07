import './App.css';

import { Link, Redirect, Router } from '@reach/router'

import NotFound from './views/NotFound'
import Post from './views/Post'
import Posts from './views/Posts'
import NewPost from './views/NewPost'
import EditPost from './views/EditPost'


function App() {
  return (
    <div style={{ textAlign: "center", width: "80%", margin: "0 auto"}}>
      <header style={{margin: '0 auto', width: '75%'}}>
        <nav style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <Link to="/posts"><button style={{borderRadius: '5px',border:'10px solid gray', backgroundColor: 'gray', color: 'white', fontStyle: 'bold', cursor: 'pointer'}}>Veiw All Posts</button></Link>
            <Link to ="/posts/new"><button style={{ borderRadius: '5px',border:'10px solid gray', backgroundColor: 'gray', color: 'white', fontStyle: 'bold', cursor: 'pointer'}}>Create New Post</button></Link>
        </nav>
      </header>

    <Router>
      <Post path="/posts/:id" />
      <Posts path="/posts" />
      <EditPost path="/posts/:id/edit" />
      <NewPost path="/posts/new" />
      <Redirect from="/" to="/posts" noThrow="true" />
      <NotFound default />
    </Router>

    </div>
  );
}

export default App;
