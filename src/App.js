import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages';
import ResumePage from './pages/resume'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/resume" component={ResumePage} exact />
      </Switch>
    </Router>
  );
}

export default App;
