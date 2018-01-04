import { take, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import searchCoaches from './api';

export default function* coachSearchFlow() {
  while (true) {
    try {
      const { data } = yield take(actions.SEARCH_COACHES);
      const nonEmptyValues = yield getNoneEmptyValues(data);
      const response = yield call(searchCoaches, nonEmptyValues);
      const responseData = yield response.json();
      console.dir(responseData); //eslint-disable-line
      if (response.ok) {
        yield put({ type: actions.SEARCH_COACHES_SUCCESS, coaches: responseData.data });
      } else {
        yield put({ type: actions.SEARCH_COACHES_ERROR, searchingCoachesError: response.errors[0].error });
      }
    } catch (error) {
      const errorMessage = `An error occurred when we tried to search for coaches.
      Please check your network connection and try again`;
      yield put({
        type: actions.SEARCH_COACHES_ERROR, searchingCoachesError: errorMessage
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
