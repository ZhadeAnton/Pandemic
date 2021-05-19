import {combineReducers} from 'redux';
import mainReducer from '../MainPage/MainReducer';

const rootReducer = combineReducers({
  main: mainReducer
})

export default rootReducer
