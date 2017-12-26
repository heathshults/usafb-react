import { all, call } from 'redux-saga/effects';
import login from 'pages/login/dux/saga';
import users from 'pages/users/dux/saga';

export default function* rootSaga() {
  yield all({
    login: call(login),
    users: call(users)
  });
}
