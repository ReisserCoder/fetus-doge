import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Whitelist from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/whitelist' component={Whitelist} />
      </Switch>
    </Router>
  );
}

export default App;
