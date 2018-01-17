import { take, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import login from './api';

export default function* loginFlow() {
  while (true) {
    const loginInfo = yield take(actions.LOGIN);
    yield call(loginSaga, loginInfo.data);
  }
}

export function* loginSaga(data) {
  try {
    const response = yield call(login, data);
    const responseData = yield response.json();
    if (response.ok) {
      yield call(loginSuccess, responseData);
    } else {
      yield put({ type: actions.LOGIN_ERROR, payload: responseData.data.error.message });
    }
  } catch (error) {
    const errorMessage = `An error occurred when we tried to log you in.
    Please check your network connection and try again`;
    yield put({ type: actions.LOGIN_ERROR, payload: errorMessage });
  }
}

function* loginSuccess(tokenData) {
  yield window.localStorage.setItem('id_token', tokenData.id_token);
  yield window.localStorage.setItem('access_token', tokenData.access_token);
  yield window.localStorage.setItem('refresh_token', tokenData.refresh_token);

  yield goToDashboard();
}

function goToDashboard() {
  window.location.replace('/');
}
