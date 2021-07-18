import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import mainReducer from '../MainPage/MainReducer';
import matchReducer from '../Match/MatchReduces';
import shopReducer from '../Shop/ShopReducer';
import userReducer from '../User/UserReducer';
import cartReducer from '../Cart/CartReducer';
import postsReducer from '../Post/PostReducer';
import generalReducer from '../General/GeneralReducer';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['currentPage']
}

const userPersistConfig = {
  key: 'user',
  storage: storage,
  blacklist: ['authError', 'authSuccess', 'isLoading']
}

const matchPersistConfig = {
  key: 'match',
  storage: storage,
  blacklist: ['currentPage']
}

const rootReducer = combineReducers({
  main: mainReducer,
  match: persistReducer(matchPersistConfig, matchReducer),
  shop: shopReducer,
  user: persistReducer(userPersistConfig, userReducer),
  cart: cartReducer,
  posts: postsReducer,
  general: generalReducer
})

export default persistReducer(rootPersistConfig, rootReducer)
