import { all, take, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { activateUser, deactivateUser } from 'pages/users/dux/api';
import * as actions from './actions';
import getUserInformation, { saveUser, getMyInfo, saveMyInfo, changePassword } from './api';

export default function* userInformationFlow() {
  yield all({
    getUserInformationFlow: call(getUserInformationFlow),
    saveUserInformationFlow: call(saveUserInformationFlow),
    getMyUserInformationFlow: call(getMyUserInformationFlow),
    saveMyInformationFlow: call(saveMyInformationFlow),
    activateUserFlow: call(activateUserFlow),
    disableUserFlow: call(disableUserFlow),
    changePasswordFlow: call(changePasswordFlow)
  });
}

function* getUserInformationFlow() {
  while (true) {
    const { id } = yield take(actions.GET_USER_INFORMATION);
    const response = yield call(getUserInformation, id);
    yield setUserData(response);
  }
}

function* saveUserInformationFlow() {
  while (true) {
    const { data } = yield take(actions.SAVE_USER_INFORMATION);
    const response = yield call(saveUser, data);
    if (response.ok) {
      const responseData = yield response.json();
      yield put({
        type: actions.USER_INFORMATION_SAVED,
        userInformation: responseData.data
      });
      yield toast.success('User saved!', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    } else {
      yield put({ type: actions.SAVE_INFO_ERROR });
    }
  }
}

function* getMyUserInformationFlow() {
  while (true) {
    yield take(actions.GET_MY_INFORMATION);
    const response = yield call(getMyInfo);
    yield setUserData(response);
  }
}

function* setUserData(response) {
  if (response.ok) {
    const responseData = yield response.json();
    yield put({
      type: actions.USER_INFORMATION_RECEIVED,
      userInformation: responseData.data
    });
  }
}

function* saveMyInformationFlow() {
  while (true) {
    const { data } = yield take(actions.SAVE_MY_INFORMATION);
    const response = yield call(saveMyInfo, data);
    if (response.ok) {
      const responseData = yield response.json();
      yield put({
        type: actions.USER_INFORMATION_SAVED,
        userInformation: responseData.data
      });
      yield toast.success('User saved!', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    } else {
      yield put({ type: actions.SAVE_INFO_ERROR });
    }
  }
}

function* activateUserFlow() {
  while (true) {
    const { id } = yield take(actions.ACTIVATE_USER);
    const response = yield call(activateUser, id);
    if (response.ok) {
      const responseData = yield response.json();
      yield put({ type: actions.USER_STATUS_UPDATED, active: responseData.data.active });
      yield toast.success('User activated!', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  }
}

function* disableUserFlow() {
  while (true) {
    const { id } = yield take(actions.DISABLE_USER);
    const response = yield call(deactivateUser, id);
    if (response.ok) {
      const responseData = yield response.json();
      yield put({ type: actions.USER_STATUS_UPDATED, active: responseData.data.active });
      yield toast.success('User disabled!', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  }
}

function* changePasswordFlow() {
  while (true) {
    const { data } = yield take(actions.CHANGE_PASSWORD);
    const response = yield call(changePassword, data);
    if (response.ok) {
      yield put({ type: actions.PASSWORD_CHANGED });
      yield toast.success('Password changed successfully!', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    } else {
      yield put({ type: actions.CHANGE_PASSWORD_ERROR });
    }
  }
}
