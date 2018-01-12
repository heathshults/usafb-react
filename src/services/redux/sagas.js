import { all, call } from 'redux-saga/effects';
import login from 'pages/login/dux/saga';
import playerProfile from 'pages/player-profile/dux/saga';
import coachProfile from 'pages/coach-profile/dux/saga';
import playerSearchReducer from 'pages/players/dux/saga';
import coachSearchReducer from 'pages/coaches/dux/saga';
import users from 'pages/users/dux/saga';
import user from 'pages/profile/dux/saga';
import imports from 'pages/imports/dux/saga';

export default function* rootSaga() {
  yield all({
    login: call(login),
    playerProfile: call(playerProfile),
    coachProfile: call(coachProfile),
    playerSearchReducer: call(playerSearchReducer),
    coachSearchReducer: call(coachSearchReducer),
    users: call(users),
    user: call(user),
    imports: call(imports)
  });
}
