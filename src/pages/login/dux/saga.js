import { take, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import * as actions from './actions';
import { login, getUserData } from './api';

export default function* loginFlow() {
  while (true) {
    const loginInfo = yield take(actions.LOGIN);
    // yield call(loginSaga, loginInfo.data);
    yield put(push('/dashboard')); // TODO delete this and remove comment above after login endpoint is complete
  }
}

function* loginSaga(data) {
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

  yield getUserInfoSaga();
  yield put(push('/dashboard'));
}

function* getUserInfoSaga() {
  const response = yield call(getUserData);
  if (response.ok) {
    const userInfo = yield response.json();
    window.lcoalStorage.setItem('profile_info', JSON.stringify(userInfo));
  } else {
    const errorData = yield response.json();
    yield put({ type: actions.LOGIN_ERROR, payload: errorData[0].error });
  }
}
