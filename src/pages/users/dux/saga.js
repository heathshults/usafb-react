import { all, take, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import getUsers, { createUser } from './api'; //eslint-disable-line

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

function* createUserFlow() {
  while (true) {
    const { data } = yield take(actions.CREATE_USER);
    console.dir(data); //eslint-disable-line
  }
}
