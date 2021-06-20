import React from 'react';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Sections/Header/Header';
import MainPage from './Routes/MainPage/MainPage';
import LoginPage from './Routes/LoginPage/LoginPage';
import PlayerInfo from './Routes/PlayerInfo/PlayerInfo';
import TeamInfo from './Routes/Teaminfo/TeamInfo';
import MatchInfo from './Routes/MatchInfo/MatchInfo';
import ShopPage from './Routes/ShopPage/ShopPage';
import ShopItemPage from './Routes/ShopItemPage/ShopItemPage';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route path='/player/:playerId' component={PlayerInfo} />
        <Route path='/team/:teamId' component={TeamInfo} />
        <Route path='/match/:matchId' component={MatchInfo} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/shop/:itemId' component={ShopItemPage} />
      </Switch>
    </>
  )
}

export default App
