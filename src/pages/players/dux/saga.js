import { take, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import searchPlayer from './api';

export default function* playerSearchFlow() {
  while (true) {
    try {
      const { data } = yield take(actions.SEARCH_PLAYERS);
      yield put({ type: actions.SET_SEARCH_VALUES, searchValues: data });
      const nonEmptyValues = yield getNoneEmptyValues(data);
      const response = yield call(searchPlayer, nonEmptyValues);
      const responseData = yield response.json();
      if (response.ok) {
        yield put({
          type: actions.SEARCH_PLAYERS_SUCCESS,
          players: responseData.data,
          total: responseData.meta.pagination.total
        });
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

function getNoneEmptyValues(data) {
  const nonEmptyValues = {};

  Object.keys(data).forEach((val) => {
    if (data[val]) {
      nonEmptyValues[val] = data[val];
    }
  });

  return nonEmptyValues;
}
