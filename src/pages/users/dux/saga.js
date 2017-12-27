import { take, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import getUsers from './api';

export default function* usersFlow() {
  while (true) {
    const { data } = yield take(actions.GET_USERS);
    const response = yield call(getUsers, data);
    const responseData = yield response.json();
    if (response.ok) {
      yield put({ type: actions.USERS_RECEIVED, users: responseData.data, total: responseData.meta.pagination.total });
    }
  }
}
