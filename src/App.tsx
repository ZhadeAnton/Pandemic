import React from 'react';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPageContainer from './Containers/MainContainer';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={MainPageContainer} />
    </Switch>
  )
}

export default App
