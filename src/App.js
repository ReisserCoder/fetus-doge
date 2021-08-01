import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import LitepaperPage from './pages/litepaper';

function App() {
  return (
    
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/litepaper' component={LitepaperPage} />
      </Switch>
    </Router>
  );
}

export default App;
