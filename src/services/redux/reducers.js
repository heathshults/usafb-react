import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import loginReducer from 'pages/login/dux/reducer';

export default combineReducers({
  routerReducer,
  loginReducer
});
