import { all, take, call, put, select } from 'redux-saga/effects';

import * as actions from './actions';
import getUsers, { createUser, editUser } from './api';

export default function* userManagementFlow() {
  yield all({
    getUserFlow: call(getUserFlow),
    createUserFlow: call(createUserFlow),
    editUserFlow: call(editUserFlow)
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
      yield call(getUpdatedUsers);
    } else {
      yield put({ type: actions.CREATE_USER_ERROR, createUserError: responseData.errors[0] });
    }
  }
}

function* getUpdatedUsers() {
  const usersReducerSelector = state => state.usersReducer;
  const state = yield select(usersReducerSelector);
  const response = yield call(getUsers, { page: 1, per_page: state.rowsPerPage });
  const responseData = yield response.json();
  if (response.ok) {
    yield put({ type: actions.USERS_RECEIVED, users: responseData.data, total: responseData.meta.pagination.total });
  }
}

function* editUserFlow() {
  while (true) {
    const { data } = yield take(actions.EDIT_USER);
    const response = yield call(editUser, data);
    if (response.ok) {
      yield put({ type: actions.USER_EDITED });
    } else {
      const responseData = yield response.json();
      yield put({ type: actions.EDIT_USER_ERROR, editUserError: responseData.errors[0] });
    }
  }
}
