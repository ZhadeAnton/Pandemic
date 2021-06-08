import React from 'react';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Sections/Header/Header';
import MainPage from './Routes/MainPage/MainPage';
import PlayerInfo from './Routes/PlayerInfo/PlayerInfo';
import TeamInfo from './Routes/Teaminfo/TeamInfo';
import MatchInfo from './Routes/MatchInfo/MatchInfo';
import ShopPage from './Routes/ShopPage/ShopPage';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/player/:playerId' component={PlayerInfo} />
        <Route path='/team/:teamId' component={TeamInfo} />
        <Route path='/match/:matchId' component={MatchInfo} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </>
  )
}

export default App
