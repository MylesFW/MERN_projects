import { Router } from 'express';
import React from 'react';

import NotFound from './components/NotFound';
import Nav from './components/Nav';
import List from './components/List';

function App() {
	return (
		<div>
			<header>
				<Nav />
			</header>
			<body>
				<Router>
					<List path="/" />
					<NotFound default />
				</Router>
			</body>
		</div>
	);
}

export default App;
