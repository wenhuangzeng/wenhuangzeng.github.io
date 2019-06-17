import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import WorkPage from './WorkPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route name="Home" exact path="/" component={HomePage} />
          {/* <HomePage /> */}
          <Route name="Project" exact path="/projects" component={WorkPage} />
        </div>
      </Router>
    )
  }
}

export default App;