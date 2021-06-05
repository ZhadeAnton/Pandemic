import React from 'react';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import MatchInfo from './Routes/MatchInfo/MatchInfo';
import PlayerInfo from './Routes/PlayerInfo/PlayerInfo';
import MainPage from './Routes/MainPage/MainPage';
import Header from './Components/Sections/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/player/:playerId' component={PlayerInfo} />
        <Route path='/match/:matchId' component={MatchInfo} />
      </Switch>
    </>
  )
}

export default App
