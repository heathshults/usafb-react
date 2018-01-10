import { take, call, put } from 'redux-saga/effects'; //eslint-disable-line

import * as actions from './actions';
// import searchPlayer from './api';

export default function* getUserInformationFlow() {
  while (true) {
    try {
      const { id } = yield take(actions.GET_USER_INFORMATION);
      console.log(id); //eslint-disable-line
    } catch (e) {
      const errorMessage = `An error occurred when we tried to search for players.
      Please check your network connection and try again`;
      yield put({
        type: actions.USER_INFORMATION_ERROR, error: errorMessage
      });
    }
  }
}
