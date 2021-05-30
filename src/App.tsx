import React from 'react';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPageContainer from './Containers/MainContainer';
import MatchInfo from './Routes/MatchInfo/MatchInfo';
import PlayerInfo from './Routes/PlayerInfo/PlayerInfo';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={MainPageContainer} />
      <Route path='/player/:playerId' component={PlayerInfo} />
      <Route path='/match/:matchId' component={MatchInfo} />
    </Switch>
  )
}

export default App
