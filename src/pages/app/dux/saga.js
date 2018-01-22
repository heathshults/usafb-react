import { take, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import getRoles, { getUserInformation } from './api';

export default function* appInitFlow() {
  while (true) {
    yield take(actions.INITIALIZE_APP);
    yield call(getUserInformationFlow);
    yield call(getRolesFlow);
  }
}

// get information of the user that is currently logged in
function* getUserInformationFlow() {
  const response = yield call(getUserInformation);
  if (response.ok) {
    const responseData = yield response.json();
    yield put({ type: actions.SET_USER_INFORMATION, userInformation: responseData.data });
  }
}

function* getRolesFlow() {
  const response = yield call(getRoles);
  if (response.ok) {
    const responseData = yield response.json();
    yield put({ type: actions.RECEIVED_ROLES, roles: responseData.data });
  }
}
