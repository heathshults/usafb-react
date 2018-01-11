import { fork, all, take, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import getUserInformation, { saveUser, getMyInfo, saveMyInfo } from './api'; //eslint-disable-line

export default function* userInformationFlow() {
  yield all({
    getUserInformationFlow: fork(getUserInformationFlow),
    saveUserInformationFlow: fork(saveUserInformationFlow),
    getMyUserInformationFlow: fork(getMyUserInformationFlow),
    saveMyInformationFlow: fork(saveMyInformationFlow)
  });
}

function* getUserInformationFlow() {
  while (true) {
    try {
      const { id } = yield take(actions.GET_USER_INFORMATION);
      const response = yield call(getUserInformation, id);
      yield setUserData(response);
    } catch (e) {
      const errorMessage = `An error occurred when we tried to get this user information.
      Please check your network connection and try again`;
      yield put({
        type: actions.USER_INFORMATION_ERROR, error: errorMessage
      });
    }
  }
}

function* saveUserInformationFlow() {
  while (true) {
    try {
      const { data } = yield take(actions.SAVE_USER_INFORMATION);
      const response = yield call(saveUser, data);
      const responseData = yield response.json();
      if (response.ok) {
        yield put({
          type: actions.USER_INFORMATION_SAVED,
          userInformation: responseData.data
        });
      } else {
        yield put({ type: actions.USER_INFORMATION_ERROR, error: response.errors[0].error });
      }
    } catch (e) {
      const errorMessage = `An error occurred when we tried to save this users information.
      Please check your network connection and try again`;
      yield put({
        type: actions.USER_INFORMATION_ERROR, error: errorMessage
      });
    }
  }
}

function* getMyUserInformationFlow() {
  while (true) {
    try {
      yield take(actions.GET_MY_INFORMATION);
      const response = yield call(getMyInfo);
      yield setUserData(response);
    } catch (e) {
      const errorMessage = `An error occurred when we tried to save your user information.
      Please check your network connection and try again`;
      yield put({
        type: actions.USER_INFORMATION_ERROR, error: errorMessage
      });
    }
  }
}

function* setUserData(response) {
  const responseData = yield response.json();
  if (response.ok) {
    yield put({
      type: actions.USER_INFORMATION_RECEIVED,
      userInformation: responseData.data
    });
  } else {
    yield put({ type: actions.USER_INFORMATION_ERROR, error: response.errors[0].error });
  }
}

function* saveMyInformationFlow() {
  while (true) {
    try {
      const { data } = yield take(actions.SAVE_MY_INFORMATION);
      const response = yield call(saveMyInfo, data);
      const responseData = yield response.json();
      if (response.ok) {
        yield put({
          type: actions.USER_INFORMATION_SAVED,
          userInformation: responseData.data
        });
      } else {
        yield put({ type: actions.USER_INFORMATION_ERROR, error: response.errors[0].error });
      }
    } catch (e) {
      const errorMessage = `An error occurred when we tried to save this users information.
      Please check your network connection and try again`;
      yield put({
        type: actions.USER_INFORMATION_ERROR, error: errorMessage
      });
    }
  }
}
