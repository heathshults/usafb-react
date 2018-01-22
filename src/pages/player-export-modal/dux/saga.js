import { take, call, put } from 'redux-saga/effects'; //eslint-disable-line

import * as actions from './actions';
import exportPlayersInfo from './api';

export default function* exportPlayersInfoFlow() {
  while (true) {
    try {
      const { data } = yield take(actions.EXPORT_PLAYERS_INFO);
      const response = yield call(exportPlayersInfo, data);
      if (response.ok) {
        yield put({ type: actions.EXPORT_PLAYERS_INFO_SUCCESS });
      }
    } catch (e) {
      console.log('error', e); //eslint-disable-line
    }
  }
}
