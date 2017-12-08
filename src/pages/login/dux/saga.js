import { take, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

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
    if (response.ok) {
      response.json()
        .then(tokenData => loginSuccess(tokenData));
    }
  } catch (error) {
    const errorMessage = `An error occurred when we tried to log you in.
    Please check your network connection and try again`;
    yield put({ type: actions.LOGIN_ERROR, payload: errorMessage });
  }
}

function* loginSuccess(tokenInformation) {
  window.localStorage.setItem('ID_TOKEN', tokenInformation.id_token);
  window.localStorage.setItem('ACCESS_TOKEN', tokenInformation.access_token);

  yield put(push('/dashboard'));
}

export default loginFlow;
