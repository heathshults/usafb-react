import { take, call, put } from 'redux-saga/effects'; //eslint-disable-line

import * as actions from './actions';
import exportCoachesInfo from './api';

export default function* exportCoachesInfoFlow() {
  while (true) {
    try {
      const { data } = yield take(actions.EXPORT_COACHES_INFO);
      const response = yield call(exportCoachesInfo, data);
      if (response.ok) {
        yield put({ type: actions.EXPORT_COACHES_INFO_SUCCESS });
      }
    } catch (e) {
      console.log('error', e); //eslint-disable-line
    }
  }
}
