import { take, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import searchPlayer from './api';

export default function* playerSearchFlow() {
  while (true) {
    const { data } = yield take(actions.SEARCH_PLAYERS);
    data.page = yield data.page - 1;
    yield put({ type: actions.SET_SEARCH_VALUES, searchValues: data });
    const nonEmptyValues = yield getNoneEmptyValues(data);
    const response = yield call(searchPlayer, nonEmptyValues);
    if (response.ok) {
      const responseData = yield response.json();
      yield put({
        type: actions.SEARCH_PLAYERS_SUCCESS,
        players: responseData.data,
        total: responseData.meta.pagination.total
      });
    } else {
      yield put({ type: actions.SEARCH_PLAYERS_ERROR });
    }
  }
}

function getNoneEmptyValues(data) {
  const nonEmptyValues = {};

  Object.keys(data).forEach((val) => {
    if (data[val] || val === 'page') {
      nonEmptyValues[val] = data[val];
    }
  });

  return nonEmptyValues;
}
