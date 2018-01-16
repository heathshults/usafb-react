import { fork, all, take, call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import displayErrorToast from 'services/toast/error-toast';

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
    try {
      const { data } = yield take(actions.GET_USERS);
      const response = yield call(getUsers, data);
      const responseData = yield response.json();
      if (response.ok) {
        yield put({ type: actions.USERS_RECEIVED, users: responseData.data, total: responseData.meta.pagination.total });
        yield getRolesFlow();
      }
    } catch (e) {
      const errorMessage = `An error occurred while we were trying to get a list of users! 
      Please check your network and try again`;
      displayErrorToast(errorMessage);
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

// TODO we can remove this since we get the roles from appReducer
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
    try {
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
    } catch (e) {
      const errorMessage = `An error occurred while we were trying to create a new user! 
      Please check your network and try again`;
      displayErrorToast(errorMessage);
    }
  }
}

function* getUpdatedUsers() {
  try {
    const state = yield select(userManagementSelector);
    const response = yield call(getUsers, { page: 1, per_page: state.rowsPerPage });
    const responseData = yield response.json();
    if (response.ok) {
      yield put({ type: actions.USERS_RECEIVED, users: responseData.data, total: responseData.meta.pagination.total });
    }
  } catch (e) {
    const errorMessage = `An error occurred while we were trying to get an updated list of users! 
    Please check your network and try again`;
    displayErrorToast(errorMessage);
  }
}

function* editUserFlow() {
  while (true) {
    try {
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
    } catch (e) {
      const errorMessage = `An error occurred while we were trying to edit this user! 
      Please check your network and try again`;
      displayErrorToast(errorMessage);
    }
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
    try {
      const { user } = yield take(actions.ACTIVATE_USER);
      const response = yield call(activateUser, user._id); //eslint-disable-line
      if (response.ok) {
        const { users, totalUsers } = yield select(userManagementSelector);
        yield user.active = true;
        const updatedUsers = yield updateUser(users, user);
        yield put({ type: actions.USERS_RECEIVED, users: updatedUsers, total: totalUsers });
        yield put({ type: actions.USER_STATUS_UPDATED });
        yield toast.success(`${user.name_first} ${user.name_last} has been activated!`, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
    } catch (e) {
      const errorMessage = `An error occurred while we were trying to activate this user! 
      Please check your network and try again`;
      displayErrorToast(errorMessage);
    }
  }
}

function* deactivateUserFlow() {
  while (true) {
    try {
      const { user } = yield take(actions.DEACTIVATE_USER);
      const response = yield call(deactivateUser, user._id); //eslint-disable-line
      if (response.ok) {
        const { users, totalUsers } = yield select(userManagementSelector);
        yield user.active = false;
        const updatedUsers = yield updateUser(users, user);
        yield put({ type: actions.USERS_RECEIVED, users: updatedUsers, total: totalUsers });
        yield put({ type: actions.USER_STATUS_UPDATED });
        yield toast.success(`${user.name_first} ${user.name_last} has been deactivated!`, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
    } catch (e) {
      const errorMessage = `An error occurred while we were trying to deactivate this user! 
      Please check your network and try again`;
      displayErrorToast(errorMessage);
    }
  }
}
