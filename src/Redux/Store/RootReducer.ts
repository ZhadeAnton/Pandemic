import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import mainReducer from '../MainPage/MainReducer';
import matchReducer from '../Match/MatchReduces';
import shopReducer from '../Shop/ShopReducer';
import userReducer from '../User/UserReducer';

const rootPersistConfig = {
  key: 'root',
  storage: storage
}

const rootReducer = combineReducers({
  main: mainReducer,
  match: matchReducer,
  shop: shopReducer,
  user: userReducer,
})

export default persistReducer(rootPersistConfig, rootReducer)
