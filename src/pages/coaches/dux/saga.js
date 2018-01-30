import { take, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import searchCoaches from './api';

export default function* coachSearchFlow() {
  while (true) {
    const { data } = yield take(actions.SEARCH_COACHES);
    data.page = yield data.page - 1;
    yield put({ type: actions.SET_SEARCH_VALUES, searchValues: data });
    const nonEmptyValues = yield getNoneEmptyValues(data);
    const response = yield call(searchCoaches, nonEmptyValues);
    const responseData = yield response.json();
    if (response.ok) {
      yield put({
        type: actions.SEARCH_COACHES_SUCCESS,
        coaches: responseData.data,
        total: responseData.meta.pagination.total
      });
    } else {
      yield put({ type: actions.SEARCH_COACHES_ERROR });
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
