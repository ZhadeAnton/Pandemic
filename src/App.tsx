import React from 'react';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from './Routes/MainPage/MainPage';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
    </Switch>
  )
}

export default App
