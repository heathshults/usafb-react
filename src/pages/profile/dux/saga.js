import { take, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import getUserInformation from './api';

export default function* getUserInformationFlow() {
  while (true) {
    try {
      const { id } = yield take(actions.GET_USER_INFORMATION);
      const response = yield call(getUserInformation, id);
      const responseData = yield response.json();
      if (response.ok) {
        yield put({
          type: actions.USER_INFORMATION_RECEIVED,
          userInformation: responseData.data
        });
      } else {
        yield put({ type: actions.USER_INFORMATION_ERROR, error: response.errors[0].error });
      }
    } catch (e) {
      const errorMessage = `An error occurred when we tried to search for players.
      Please check your network connection and try again`;
      yield put({
        type: actions.USER_INFORMATION_ERROR, error: errorMessage
      });
    }
  }
}
