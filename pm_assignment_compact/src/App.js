import './App.css';

import { Link, Redirect, Router } from '@reach/router'

import NotFound from './views/NotFound'
import Product from './views/Product'
import Products from './views/Products'
import NewProduct from './views/NewProduct'
import EditProduct from './views/EditProduct'

function App() {
  return (
    <div className="App">
      <nav>
        {/* <Link to='/products'>All Products</Link> */}
        <Link to='/products/new'>Home Page</Link>
      </nav>

      <Router>
        {/* note: built around the post assignment, 
        these pages were no longer needed. the routes were changed
        along with the axios.xxx('links') */}
        
        {/* <Product path='/products/:id' /> */}
        {/* <Products path='/products' /> */}
        <EditProduct path='/products/:id/edit' />
        <NewProduct path='/products/new' />
        <Redirect from='/' to='/products/new' noThrow='true' />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
