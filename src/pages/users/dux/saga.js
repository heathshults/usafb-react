import { take, call, put } from 'redux-saga/effects'; //eslint-disable-line

import * as actions from './actions';
// import { login, getUserData } from './api';

export default function* usersFlow() {
  while (true) {
    const paginationData = yield take(actions.GET_USERS);
    console.log(paginationData); //eslint-disable-line
  }
}
