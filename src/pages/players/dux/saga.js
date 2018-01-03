import { take, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import searchPlayer from './api';

export default function* playerSearchFlow() {
  while (true) {
    try {
      const { data } = yield take(actions.SEARCH_PLAYERS);
      const response = yield call(searchPlayer, data);
      const responseData = yield response.json();
      if (response.ok) {
        yield put({ type: actions.SEARCH_PLAYERS_SUCCESS, playerSearchData: responseData.data });
      } else {
        yield put({ type: actions.SEARCH_PLAYERS_ERROR, searchingPlayersError: response.errors[0].error });
      }
    } catch (e) {
      const errorMessage = `An error occurred when we tried to search for players.
      Please check your network connection and try again`;
      yield put({
        type: actions.SEARCH_PLAYERS_ERROR, searchingPlayersError: errorMessage
      });
    }
  }
}
