import React from 'react';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPageContainer from './Containers/MainContainer';
import MatchInfo from './Routes/MatchInfo/MatchInfo';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={MainPageContainer} />
      <Route path='/match/:matchId' component={MatchInfo} />
    </Switch>
  )
}

export default App
