import { all, take, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { activateUser, deactivateUser } from 'pages/users/dux/api';
import displayErrorToast from 'services/toast/error-toast';
import * as actions from './actions';
import getUserInformation, { saveUser, getMyInfo, saveMyInfo } from './api';

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
    try {
      const { id } = yield take(actions.GET_USER_INFORMATION);
      const response = yield call(getUserInformation, id);
      yield setUserData(response);
    } catch (e) {
      const errorMessage = `An error occurred when we tried to get this user information.
      Please check your network connection and try again`;
      displayErrorToast(errorMessage);
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
        yield toast.success('User saved!', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: false
        });
      } else {
        yield put({ type: actions.USER_INFORMATION_ERROR });
      }
    } catch (e) {
      const errorMessage = `An error occurred when we tried to save this users information.
      Please check your network connection and try again`;
      displayErrorToast(errorMessage);
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
      displayErrorToast(errorMessage);
      yield put({ type: actions.USER_INFORMATION_ERROR });
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
        yield toast.success('User saved!', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      } else {
        yield put({ type: actions.USER_INFORMATION_ERROR });
      }
    } catch (e) {
      const errorMessage = `An error occurred when we tried to save this users information.
      Please check your network connection and try again`;
      displayErrorToast(errorMessage);
      yield put({ type: actions.USER_INFORMATION_ERROR });
    }
  }
}

function* activateUserFlow() {
  while (true) {
    try {
      const { id } = yield take(actions.ACTIVATE_USER);
      const response = yield call(activateUser, id);
      const responseData = yield response.json();
      yield put({ type: actions.USER_STATUS_UPDATED, active: responseData.data.active });
      yield toast.success('User activated!', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    } catch (e) {
      const errorMessage = `An error occurred when we tried to enable this user.
      Please check your network connection and try again`;
      displayErrorToast(errorMessage);
    }
  }
}

function* disableUserFlow() {
  while (true) {
    try {
      const { id } = yield take(actions.DISABLE_USER);
      const response = yield call(deactivateUser, id);
      const responseData = yield response.json();
      yield put({ type: actions.USER_STATUS_UPDATED, active: responseData.data.active });
      yield toast.success('User disabled!', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    } catch (e) {
      const errorMessage = `An error occurred when we tried to enable this user.
      Please check your network connection and try again`;
      displayErrorToast(errorMessage);
    }
  }
}

function* changePasswordFlow() {
  while (true) {
    try {
      const { data } = yield take(actions.CHANGE_PASSWORD);
      console.dir(data); //eslint-disable-line
    } catch (e) {
      const errorMessage = `An error occurred when we tried to enable this user.
      Please check your network connection and try again`;
      displayErrorToast(errorMessage);
    }
  }
}
