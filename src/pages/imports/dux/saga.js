import { fork, all, take, call, put } from 'redux-saga/effects'; //eslint-disable-line

import * as actions from './actions';

export default function* userInformationFlow() {
  yield all({
    checkUploadedCsvFlow: fork(checkUploadedCsvFlow)
  });
}

function* checkUploadedCsvFlow() {
  while (true) {
    yield take(actions.CSV_CHECKING);
  }
}

