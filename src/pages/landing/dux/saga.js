import { fork, all, take, call } from 'redux-saga/effects';
import * as actions from './actions';
import getStats from './api';

export default function* landingPageFlow() {
  yield all({
    getStatsFlow: fork(getStatsFlow)
  });
}

function* getStatsFlow() {
  while (true) {
    yield take(actions.GET_STATS);
    const response = yield call(getStats);
    const responseData = yield response.json();
    if (response.ok) {
      yield put({ type: actions.RECEIVED_STATS, ...responseData.data });
    }
  }
}
