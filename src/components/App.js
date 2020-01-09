import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Product from '../containers/Product';
import List from '../containers/List';
import Header from '../containers/Header';
import '../App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
        <Header />
        <Switch>
          <Route exact path="/items" component={List} />
          <Route exact path="/items/:id" component={Product} />
        </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
