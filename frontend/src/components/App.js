import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Scriptbot from './components/scriptbot';
import { Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <div className="App">

          <Route path="/">
            <Scriptbot />
          </Route>

      </div>
    </div>
  );
}

export default App;
