import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import HomePage from './components/HomePage';
import { Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <div className="App">

          <Route path="/">
            <HomePage />
          </Route>

      </div>
    </div>
  );
}

export default App;
