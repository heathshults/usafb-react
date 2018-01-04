import { take, call, put } from 'redux-saga/effects'; //eslint-disable-line

import * as actions from './actions';
import getPlayerProfile from './api';

export default function* playerProfileFlow() {
  while (true) {
    try {
      const { data } = yield take(actions.GET_PLAYER_PROFILE);
      const response = yield call(getPlayerProfile, data);
      const responseData = yield response.json();
      if (response.ok) {
        yield put({ type: actions.GET_PLAYER_PROFILE_SUCCESS, playerData: responseData.data });
      }
    } catch (e) {
      console.log('error', e); //eslint-disable-line
    }
  }
}
