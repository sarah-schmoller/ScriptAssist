import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Scriptbot from './components/Scriptbot';
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
