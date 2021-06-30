import React from 'react';
import { Toaster } from 'react-hot-toast';
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
import CartPage from './Routes/CartPage/CartPage';

function App() {
  return (
    <>
      <Toaster
        position='bottom-left'
        toastOptions={{
          success: {
            duration: 4000
          }
        }}
      />
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route path='/player/:playerId' component={PlayerInfo} />
        <Route path='/team/:teamId' component={TeamInfo} />
        <Route path='/match/:matchId' component={MatchInfo} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/shop/:itemId' component={ShopItemPage} />
        <Route path='/cart' component={CartPage} />
      </Switch>
    </>
  )
}

export default App
