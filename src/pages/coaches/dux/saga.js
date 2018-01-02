import { take, call, put } from 'redux-saga/effects'; //eslint-disable-line

import * as actions from './actions';
import searchCoaches from './api';

export default function* coachSearchFlow() {
  while (true) {
    try {
      const { data } = yield take(actions.SEARCH_COACHES);
      const response = yield call(searchCoaches, data);
      const responseData = yield response.json();
      if (response.ok) {
        yield put({ type: actions.SEARCH_COACHES_SUCCESS, coachSearchData: responseData.data });
      } else {
        yield put({ type: actions.SEARCH_COACHES_ERROR, searchingCoachesError: response.errors[0] });
      }
    } catch (e) {
      console.log('eeee', e); //eslint-disable-line
    }
  }
}
