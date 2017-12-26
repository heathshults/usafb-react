import { all, call } from 'redux-saga/effects';
import login from 'pages/login/dux/saga';
import playerProfile from 'pages/player-profile/dux/saga';

export default function* rootSaga() {
  yield all({
    login: call(login),
    playerProfile: call(playerProfile)
  });
}
