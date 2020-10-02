import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Level1 from './views/Level1';
import Level2 from './views/Level2';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Level1} />
        <Route exact path="/" component={Level2} />
      </Switch>
    </Router>
  );
}

export default App;
