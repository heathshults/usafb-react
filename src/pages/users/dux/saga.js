import { all, take, call, put, select } from 'redux-saga/effects';

import * as actions from './actions';
import getUsers, { createUser, editUser, getRoles, activateUser, deactivateUser } from './api';
import userManagementSelector from './selectors.js';

export default function* userManagementFlow() {
  yield all({
    getUserFlow: call(getUserFlow),
    createUserFlow: call(createUserFlow),
    editUserFlow: call(editUserFlow),
    activateUserFlow: call(activateUserFlow),
    deactivateUser: call(deactivateUserFlow)
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

// We need to extract the id and name of each role
// and set them as value and label so the dropdown
// in the user modal will display properly
const extractRoles = (roles) => {
  const userRoles = [{
    value: '',
    label: 'Role'
  }];

  const extractedRoles = roles.map(role => ({
    value: role._id, //eslint-disable-line
    label: role.name
  }));

  return [...userRoles, ...extractedRoles];
};

function* getRolesFlow() {
  const response = yield call(getRoles);
  const responseData = yield response.json();
  if (response.ok) {
    const roles = yield extractRoles(responseData.data);
    yield put({ type: actions.SET_ROLES, roles });
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
  users[users.findIndex(user => user._id === userToUpdate._id)] = updatedUser; //eslint-disable-line
  return users;
}

function* activateUserFlow() {
  const { user } = yield take(actions.ACTIVATE_USER);
  const response = yield call(activateUser, user._id); //eslint-disable-line
  if (response.ok) {
    const { users, totalUsers } = yield select(userManagementSelector);
    yield user.active = true;
    const updatedUsers = yield updateUser(users, user);
    yield put({ type: actions.USERS_RECEIVED, users: updatedUsers, total: totalUsers });
  }
}

function* deactivateUserFlow() {
  const { user } = yield take(actions.DEACTIVATE_USER);
  const response = yield call(deactivateUser, user._id); //eslint-disable-line
  if (response.ok) {
    const { users, totalUsers } = yield select(userManagementSelector);
    yield user.active = false;
    const updatedUsers = yield updateUser(users, user);
    yield put({ type: actions.USERS_RECEIVED, users: updatedUsers, total: totalUsers });
  }
}
