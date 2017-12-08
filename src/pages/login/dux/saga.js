import { take, call } from 'redux-saga/effects';

import * as actions from './actions';
import loginApi from './api';

function* loginFlow() {
  while (true) {
    const loginInfo = yield take(actions.LOGIN);
    yield call(login, loginInfo.data);
  }
}

function* login(data) {
  try {
    const response = yield call(loginApi, data);
    console.dir(response);
  } catch (error) {

  }
}

export default loginFlow;
