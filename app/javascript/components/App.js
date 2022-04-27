import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Greeting from './Greeting';
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Router>
            <Route path="/" element={<Greeting />} />
          </Router>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
