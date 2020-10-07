
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from '../../router/AppWithRouterAccess';

class App extends Component {
  render() {
    return (
      <Router>
        <AppWithRouterAccess/>
      </Router>
    );
  }
}

export default App;
