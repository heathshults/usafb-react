import { all, take, call, put, select } from 'redux-saga/effects';

import * as actions from './actions';
import getUsers, { createUser, editUser, getRoles } from './api';
import userManagementSelector from './selectors.js';

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
      yield getRolesFlow();
    }
  }
}

function* getRolesFlow() {
  const response = yield call(getRoles);
  const responseData = yield response.json();
  if (response.ok) {
    yield put({ type: actions.SET_ROLES, roles: responseData.data });
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
  const state = yield select(userManagementSelector);
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
      const { users, totalUsers } = yield select(userManagementSelector);
      const updatedUser = yield extractUserData(data);
      const updatedUsers = yield updateUser(users, updatedUser);
      yield put({ type: actions.USERS_RECEIVED, users: updatedUsers, total: totalUsers });
    } else {
      const responseData = yield response.json();
      yield put({ type: actions.EDIT_USER_ERROR, editUserError: responseData.errors[0] });
    }
  }
}

function updateUser(users, updatedUser) {
  let userToUpdate = users.find(user => user._id === updatedUser._id); //eslint-disable-line
  users[users.findIndex(user => user === userToUpdate)] = updatedUser; //eslint-disable-line
  return users;
}
