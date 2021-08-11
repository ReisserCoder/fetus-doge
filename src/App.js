import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import LitepaperPage from './pages/litepaper';
import DashboardPage from './pages/dashboard';

function App() {
  return (
    
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/litepaper' component={LitepaperPage} />
        <Route path='/dashboard' component={DashboardPage} />
      </Switch>
    </Router>
  );
}

export default App;
