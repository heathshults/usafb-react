import { take, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import getCoachProfile from './api';

export default function* playerProfileFlow() {
  while (true) {
    const { data } = yield take(actions.GET_COACH_PROFILE);
    const response = yield call(getCoachProfile, data);
    const responseData = yield response.json();
    if (response.ok) {
      yield put({ type: actions.GET_COACH_PROFILE_SUCCESS, coachData: responseData.data });
    }
  }
}
