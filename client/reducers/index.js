import {combineReducers} from 'redux';
import members from './memberReducer';

const rootReducer = combineReducers({
  members
});

export default rootReducer;
