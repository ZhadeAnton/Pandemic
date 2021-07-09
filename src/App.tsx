/* eslint-disable max-len */
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import { IAppContainer } from './Containers/AppContainer';

import Header from './Components/Sections/Header/Header';
import ShopContainer from './Containers/ShopContainer';
import ShopItemContainer from './Containers/ShopItemContainer';
import CartContainer from './Containers/CartContainer';
import AuthContainer from './Containers/LoginContainer';
import MainPageContainer from './Containers/MainPageContainer';
import MatchContainer from './Containers/MatchContainer';
import PlayerContainer from './Containers/PlayerContainer';
import TeamContainer from './Containers/TeamContainer';
import PostsPageContainer from './Containers/PostsContainer';

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

      <Header
        currentUser={props.currentUser}
        cartItemsLength={props.cartItemsLength}
      />

      <Switch>
        <Route exact path='/' component={MainPageContainer} />
        <Route exact path='/login' component={AuthContainer} />
        <Route path='/player/:playerId' component={PlayerContainer} />
        <Route path='/team/:teamId' component={TeamContainer} />
        <Route path='/match/:matchId' component={MatchContainer} />
        <Route exact path='/shop' component={ShopContainer} />
        <Route path='/shop/:itemId' component={ShopItemContainer} />
        <Route path='/cart' component={CartContainer} />
        <Route path='/posts' component={PostsPageContainer} />
      </Switch>
    </>
  )
}

export default App
