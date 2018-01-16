import { fork, all, take, call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as actions from './actions';
import getUsers, { createUser, editUser, getRoles, activateUser, deactivateUser } from './api';
import userManagementSelector from './selectors.js';

export default function* userManagementFlow() {
  yield all({
    getUserFlow: fork(getUserFlow),
    createUserFlow: fork(createUserFlow),
    editUserFlow: fork(editUserFlow),
    activateUserFlow: fork(activateUserFlow),
    deactivateUser: fork(deactivateUserFlow)
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
    if (response.ok) {
      yield put({ type: actions.USER_CREATED });
      yield call(getUpdatedUsers);
      yield toast.success('User has been successfully created!', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    } else {
      yield put({ type: actions.CREATE_USER_ERROR });
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

      // We need to find the user and replace all values with updated fields.
      // Cannot simply get data from API because pagination will reset
      const { users, totalUsers } = yield select(userManagementSelector);
      const updatedUser = yield extractUserData(data);
      const updatedUsers = yield updateUser(users, updatedUser);

      yield put({ type: actions.USERS_RECEIVED, users: updatedUsers, total: totalUsers });
      yield toast.success(`${data.name_first} ${data.name_last} updated successfully!`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
    // else {
    //   const responseData = yield response.json();
    //   yield toast.error(responseData.error.errors[0], {
    //     position: toast.POSITION.BOTTOM_RIGHT
    //   });
    // }
  }
}

function updateUser(users, updatedUser) {
  let userToUpdate = users.find(user => user._id === updatedUser._id); //eslint-disable-line
  // we need to carry over the status because it is not being returned from the sagas
  updatedUser.active = userToUpdate.active; //eslint-disable-line
  users[users.findIndex(user => user._id === userToUpdate._id)] = updatedUser; //eslint-disable-line
  return users;
}

function* activateUserFlow() {
  while (true) {
    const { user } = yield take(actions.ACTIVATE_USER);
    const response = yield call(activateUser, user._id); //eslint-disable-line
    if (response.ok) {
      const { users, totalUsers } = yield select(userManagementSelector);
      yield user.active = true;
      const updatedUsers = yield updateUser(users, user);
      yield put({ type: actions.USERS_RECEIVED, users: updatedUsers, total: totalUsers });
      yield put({ type: actions.USER_STATUS_UPDATED });
      yield toast.info(`${user.name_first} ${user.name_last} has been activated!`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  }
}

function* deactivateUserFlow() {
  while (true) {
    const { user } = yield take(actions.DEACTIVATE_USER);
    const response = yield call(deactivateUser, user._id); //eslint-disable-line
    if (response.ok) {
      const { users, totalUsers } = yield select(userManagementSelector);
      yield user.active = false;
      const updatedUsers = yield updateUser(users, user);
      yield put({ type: actions.USERS_RECEIVED, users: updatedUsers, total: totalUsers });
      yield put({ type: actions.USER_STATUS_UPDATED });
      yield toast.warn(`${user.name_first} ${user.name_last} has been deactivated!`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  }
}
