import { take, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as actions from './actions';
import login, { setNewPassword, sendVerificationCode, confirmVerification } from './api';

export default function* loginSagas() {
  yield all({
    loginFlow: call(loginFlow),
    sendVerificationCodeFlow: call(sendVerificationCodeFlow),
    verifyConfirmationFlow: call(verifyConfirmationFlow)
  });
}

function* loginFlow() {
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
      if (responseData.challenge) {
        yield put({ type: actions.TOGGLE_CHANGE_PASSWORD_MODAL });
        const { password } = yield take(actions.SET_NEW_PASSWORD);
        const npData = {
          email: data.email,
          password,
          session: responseData.session
        };
        const npResponse = yield call(setNewPassword, npData);
        const npResponseData = yield npResponse.json();
        if (npResponse.ok) {
          yield put({ type: actions.PASSWORD_SET });
          yield loginSuccess(npResponseData.data);
        } else {
          yield put({ type: actions.PASSWORD_SET_ERROR, error: npResponseData.data.error.errors[0].error });
        }
      } else {
        yield call(loginSuccess, responseData);
      }
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

function* sendVerificationCodeFlow() {
  while (true) {
    const { data } = yield take(actions.SEND_VERIFICATION_CODE);
    const response = yield call(sendVerificationCode, data);
    const responseData = yield response.json();
    if (response.ok) {
      yield put({ type: actions.RECEIVED_VERIFICATION_CODE });
    } else {
      yield put({ type: actions.VERIFICATION_CODE_ERROR, error: responseData.data.error.message });
    }
  }
}

function* verifyConfirmationFlow() {
  while (true) {
    const { data } = yield take(actions.CONFIRM_VERIFICATION);
    const response = yield call(confirmVerification, data);
    const responseData = yield response.json();
    if (response.ok) {
      yield put({ type: actions.VERIFICATION_CONFIRMED });
      yield toast.success('Your password has been set! Please login again', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false
      });
    } else {
      yield put({ type: actions.VERIFICATION_CONFIRMATION_ERROR, error: responseData.data.error.message });
    }
  }
}
