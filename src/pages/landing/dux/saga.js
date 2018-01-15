import { put, take, call } from 'redux-saga/effects';
import * as actions from './actions';
import getStats from './api';

export default function* getStatsFlow() {
  while (true) {
    yield take(actions.GET_STATS);
    const response = yield call(getStats);
    const responseData = yield response.json();
    if (response.ok) {
      // extract the arrays out one level so we won't ever get a 'cannot read property of undefined' error
      const data = {
        num_players: responseData.data.num_players,
        num_coaches: responseData.data.num_players,
        coaches: responseData.data.coaches.levels,
        players: responseData.data.players.levels
      };
      yield put({ type: actions.RECEIVED_STATS, data });
    }
  }
}
