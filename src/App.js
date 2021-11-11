import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.components';

const CakesPage = () => (
    <div>
      <h1>CAKES PAGE</h1>
    </div>
  );
 
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/cakes' component={CakesPage} />
      </Switch>
    </div>
  );
}

export default App;