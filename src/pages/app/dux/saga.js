import { take, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import getRoles from './api';

// TODO need to find a way to inform users to refresh the page so we can get the roles
// again and application will work
export default function* coachSearchFlow() {
  while (true) {
    yield take(actions.GET_ROLES);
    const response = yield call(getRoles);
    const responseData = yield response.json();
    if (response.ok) {
      yield put({ type: actions.RECEIVED_ROLES, roles: responseData.data });
    }
  }
}
