import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppPage from './components/AppPage';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <div className="App">

          <Routes>
            <Route path="/" element={<AppPage />}>
            </Route>
          </Routes>

      </div>
    </div>
  );
}

export default App;
