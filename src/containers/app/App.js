import React, { Component } from 'react';
import RouterView from 'router';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        	<RouterView/>
        </Router>
      </div>
    );
  }
}
export default App

