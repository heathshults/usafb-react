import { take, call, put } from 'redux-saga/effects'; //eslint-disable-line

import * as actions from './actions';
import getPlayerProfile from './api';

export default function* playerProfileFlow() {
  while (true) {
    try {
      const { data } = yield take(actions.GET_PLAYER_PROFILE);
      const response = yield call(getPlayerProfile, data);
      const responseData = yield response.json();
      yield console.log('response', response); //eslint-disable-line
      if (response.ok) {
        yield put({ type: actions.GET_PLAYER_PROFILE_SUCCESS, playerData: responseData.data });
      }
    } catch (e) {
      console.log('eeee', e); //eslint-disable-line
    }
  }
}
