import { take, call } from 'redux-saga/effects';

import * as actions from './actions';
import login from './api';

function* loginFlow() {
  while (true) {
    const { username, password } = yield take(actions.LOGIN);
    const response = yield call(login(username, password));
    console.dir(response);
  }
}

export default loginFlow;
