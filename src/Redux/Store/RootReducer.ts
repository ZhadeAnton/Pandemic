import {combineReducers} from 'redux';
import mainReducer from '../MainPage/MainReducer';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';
import matchReducer from '../Match/MatchReduces';
import shopReducer from '../Shop/ShopReducer';

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

const rootReducer = combineReducers({
  main: persistReducer(mainPersistConfig, mainReducer),
  match: persistReducer(matchPersistConfig, matchReducer),
  shop: persistReducer(shopPersistConfig, shopReducer),
})

export default persistReducer(rootPersistConfig, rootReducer)
