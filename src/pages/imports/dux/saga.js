import { fork, all, take, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as actions from './actions';

export default function* userInformationFlow() {
  yield all({
    uploadCsvFlow: fork(uploadCsvFlow)
  });
}

function* uploadCsvFlow() {
  while (true) {
    yield take(actions.UPLOAD_DATA);
    yield delay(3000);
    yield put({ type: actions.UPLOADED_DATA });
  }
}

