import { all, call } from 'redux-saga/effects';
import login from 'pages/login/dux/saga';

export default function* rootSaga() {
  yield all({
    login: call(login)
  });
}
