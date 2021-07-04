/* eslint-disable max-len */
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import { IAppContainer } from './Containers/AppContainer';

import Header from './Components/Sections/Header/Header';
import MainPage from './Routes/MainPage/MainPage';
import LoginPage from './Routes/LoginPage/LoginPage';
import PlayerInfo from './Routes/PlayerInfo/PlayerInfo';
import TeamInfo from './Routes/Teaminfo/TeamInfo';
import MatchInfo from './Routes/MatchInfo/MatchInfo';
import ShopContainer from './Containers/ShopContainer';
import ShopItemContainer from './Containers/ShopItemContainer';
import CartContainer from './Containers/CartContainer';

function App(props: IAppContainer) {
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

      <Header cartItemsLength={props.cartItemsLength}/>

      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route path='/player/:playerId' component={PlayerInfo} />
        <Route path='/team/:teamId' component={TeamInfo} />
        <Route path='/match/:matchId' component={MatchInfo} />
        <Route exact path='/shop' component={ShopContainer} />
        <Route path='/shop/:itemId' component={ShopItemContainer} />
        <Route path='/cart' component={CartContainer} />
      </Switch>
    </>
  )
}

export default App
