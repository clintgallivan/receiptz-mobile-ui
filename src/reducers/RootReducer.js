import {combineReducers} from 'redux';
import error from './ErrorReducer';
import user from './UserReducer';
import status from './StatusReducer';
import data from './DataReducer';

const rootReducer = combineReducers({
  error,
  user,
  data,
  status,
});

export default rootReducer;
