import { take, call, put } from 'redux-saga/effects'; //eslint-disable-line

import * as actions from './actions';
import getUsers from './api';

export default function* usersFlow() {
  while (true) {
    const { data } = yield take(actions.GET_USERS);
    const response = yield call(getUsers, data);
    console.dir(response); //eslint-disable-line
  }
}
