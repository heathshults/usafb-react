import { take, call, put } from 'redux-saga/effects'; //eslint-disable-line

import * as actions from './actions';
import getCoachProfile from './api';

export default function* coachProfileFlow() {
  while (true) {
    try {
      const { data } = yield take(actions.GET_COACH_PROFILE);
      const response = yield call(getCoachProfile, data);
      if (response.ok) {
        const responseData = yield response.json();
        yield put({ type: actions.GET_COACH_PROFILE_SUCCESS, coachData: responseData.data });
      }
    } catch (e) {
      console.log('eeee', e); //eslint-disable-line
    }
  }
}
