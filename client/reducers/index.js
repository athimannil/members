import {combineReducers} from 'redux';
import members from './memberReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  members,
  ajaxCallsInProgress
});

export default rootReducer;
