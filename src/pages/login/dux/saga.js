import { take, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import { login, getUserData } from './api';

export default function* loginFlow() {
  while (true) {
    const loginInfo = yield take(actions.LOGIN);
    yield goToDashboard();
    // yield call(loginSaga, loginInfo.data);
  }
}

export function* loginSaga(data) {
  try {
    const response = yield call(login, data);
    if (response.ok) {
      const tokenData = yield response.json();
      yield call(loginSuccess, tokenData);
    } else {
      const errorData = yield response.json();
      yield put({ type: actions.LOGIN_ERROR, payload: errorData.errors[0].error });
    }
  } catch (error) {
    const errorMessage = `An error occurred when we tried to log you in.
    Please check your network connection and try again`;
    yield put({ type: actions.LOGIN_ERROR, payload: errorMessage });
  }
}

function* loginSuccess(tokenData) {
  window.localStorage.setItem('id_token', tokenData.id_token);
  window.localStorage.setItem('access_token', tokenData.access_token);

  const userInfoOk = yield getUserInfoSaga();
  if (userInfoOk) {
    yield goToDashboard();
  }
}

function goToDashboard() {
  window.location.replace('/');
}

function* getUserInfoSaga() {
  const response = yield call(getUserData);

  if (response.ok) {
    const userInfo = yield response.json();
    window.localStorage.setItem('profile_info', JSON.stringify(userInfo));
  } else {
    const errorData = yield response.json();
    yield put({ type: actions.LOGIN_ERROR, payload: errorData[0].error });
  }

  return response.ok;
}
