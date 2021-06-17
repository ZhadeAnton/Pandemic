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

const mainPersistConfig = {
  key: 'main',
  storage: storage
}

const matchPersistConfig = {
  key: 'match',
  storage: storage
}

const shopPersistConfig = {
  key: 'shop',
  storage: storage
}

const userPersistConfig = {
  key: 'user',
  storage: storage,
  blacklist: ['currentUser']
}

const rootReducer = combineReducers({
  main: persistReducer(mainPersistConfig, mainReducer),
  match: persistReducer(matchPersistConfig, matchReducer),
  shop: persistReducer(shopPersistConfig, shopReducer),
  user: persistReducer(userPersistConfig, userReducer),
})

export default persistReducer(rootPersistConfig, rootReducer)
