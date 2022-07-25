import { combineReducers } from 'redux';
import saveReducer from './saveReducer';
const rootReducer = combineReducers({ planet: saveReducer });
export default rootReducer;