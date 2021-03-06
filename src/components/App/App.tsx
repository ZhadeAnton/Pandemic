/* eslint-disable max-len */
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './app.scss'
import { IAppContainer } from '../../Containers/AppContainer';

import Header from '../Header/Header';
import ShopContainer from '../../Containers/ShopContainer';
import ShopItemContainer from '../../Containers/ShopItemContainer';
import CartContainer from '../../Containers/CartContainer';
import AuthContainer from '../../Containers/LoginContainer';
import MainPageContainer from '../../Containers/MainPageContainer';
import MatchContainer from '../../Containers/MatchContainer';
import PlayerContainer from '../../Containers/PlayerContainer';
import TeamContainer from '../../Containers/TeamContainer';
import PostsPageContainer from '../../Containers/PostsContainer';
import PostItemContainer from '../../Containers/PostItemContainer';
import MatchesPageContainer from '../../Containers/MatchesPageContainer';
import SideBar from '../SideBar/SideBar';
import HamburgerMenu from '../Custom/HamburgerMenu/HamburgerMenu';
import NotFoundPage from '../../Routes/NotFoundPage/NotFoundPage';

function App(props: IAppContainer) {
  const [isSidebar, setIsSidebar] = useState(false)

  const hadnleToggleSidebar = () => {
    setIsSidebar(!isSidebar)
  }

  return (
    <main className='app'>
      <div className='app__hamburger-menu'>
        <HamburgerMenu onToggleSidebar={hadnleToggleSidebar}/>
      </div>

      {
        isSidebar && <SideBar onToggleSidebar={hadnleToggleSidebar}
        />
      }

      <div className='app__header'>
        <Header
          currentUser={props.currentUser}
          cartItemsLength={props.cartItemsLength}
          onToggleSidebar={hadnleToggleSidebar}
        />
      </div>
      <Switch>
        <Route exact path='/' component={MainPageContainer} />
        <Route exact path='/login' component={AuthContainer} />
        <Route path='/player/:playerId' component={PlayerContainer} />
        <Route path='/team/:teamId' component={TeamContainer} />
        <Route path='/match/:matchId' component={MatchContainer} />
        <Route exact path='/shop' component={ShopContainer} />
        <Route path='/shop/:itemId' component={ShopItemContainer} />
        <Route path='/cart' component={CartContainer} />
        <Route exact path='/posts' component={PostsPageContainer} />
        <Route path='/posts/:postId' component={PostItemContainer} />
        <Route path='/matches' component={MatchesPageContainer} />
        <Route path='' component={NotFoundPage} />
      </Switch>
    </main>
  )
}

export default App
