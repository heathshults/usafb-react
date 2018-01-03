import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import loginReducer from 'pages/login/dux/reducer';
import usersReducer from 'pages/users/dux/reducer';
import playerProfileReducer from 'pages/player-profile/dux/reducer';
import coachProfileReducer from 'pages/coach-profile/dux/reducer';
import playerSearchReducer from 'pages/players/dux/reducer';
import coachSearchReducer from 'pages/coaches/dux/reducer';

export default combineReducers({
  routerReducer,
  loginReducer,
  usersReducer,
  playerProfileReducer,
  coachProfileReducer,
  playerSearchReducer,
  coachSearchReducer
});
