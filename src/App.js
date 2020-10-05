import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//Pages
import Home from '../src/Pages/Home'
import SingleCard from '../src/components/SingleCard'
function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/picture/:title" component={SingleCard} />
        </Switch>
      </Router>
  </Fragment>
  );
}

export default App;
