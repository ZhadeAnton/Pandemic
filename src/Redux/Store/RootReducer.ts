import {combineReducers} from 'redux';
import mainReducer from '../MainPage/MainReducer';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';

const rootPersistConfig = {
  key: 'root',
  storage: storage
}

const mainPersistConfig = {
  key: 'main',
  storage: storage
}

const rootReducer = combineReducers({
  main: persistReducer(mainPersistConfig, mainReducer)
})

export default persistReducer(rootPersistConfig, rootReducer)
