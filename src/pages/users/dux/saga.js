import { all, take, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import getUsers, { createUser } from './api';

export default function* userManagementFlow() {
  yield all({
    getUserFlow: call(getUserFlow),
    createUserFlow: call(createUserFlow)
  });
}

function* getUserFlow() {
  while (true) {
    const { data } = yield take(actions.GET_USERS);
    const response = yield call(getUsers, data);
    const responseData = yield response.json();
    if (response.ok) {
      yield put({ type: actions.USERS_RECEIVED, users: responseData.data, total: responseData.meta.pagination.total });
    }
  }
}

const extractUserData = (data) => {
  const userData = data;

  delete data.dismissStatus; //eslint-disable-line
  delete data.modalStatus; //eslint-disable-line

  return userData;
};

function* createUserFlow() {
  while (true) {
    const { data } = yield take(actions.CREATE_USER);
    const userData = yield extractUserData(data);
    const response = yield call(createUser, userData);
    const responseData = yield response.json();
    if (response.ok) {
      yield put({ type: actions.USER_CREATED });
    } else {
      yield put({ type: actions.CREATE_USER_ERROR, createUserError: responseData.errors[0] });
    }
  }
}
