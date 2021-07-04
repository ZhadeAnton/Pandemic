import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import mainReducer from '../MainPage/MainReducer';
import matchReducer from '../Match/MatchReduces';
import shopReducer from '../Shop/ShopReducer';
import userReducer from '../User/UserReducer';
import cartReducer from '../Cart/CartReducer';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['user']
}

const userPersistConfig = {
  key: 'user',
  storage: storage,
  blacklist: ['authError', 'authSuccess', 'isLoading']
}

const rootReducer = combineReducers({
  main: mainReducer,
  match: matchReducer,
  shop: shopReducer,
  user: persistReducer(userPersistConfig, userReducer),
  cart: cartReducer,
})

export default persistReducer(rootPersistConfig, rootReducer)
