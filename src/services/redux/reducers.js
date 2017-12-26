import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import loginReducer from 'pages/login/dux/reducer';
import usersReducer from 'pages/users/dux/reducer';

export default combineReducers({
  routerReducer,
  loginReducer,
  usersReducer
});
