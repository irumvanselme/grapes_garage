import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

/* Every one has to import his component according to the Location of your component */

import Login from './components/Web/Login';
import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
      <Switch>

	{
		/* Add your paths and the component name */
	}

        <Route path="/login" component={Login} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
