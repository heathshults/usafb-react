import { fork, all, take, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { toast } from 'react-toastify';
import * as actions from './actions';

export default function* userInformationFlow() {
  yield all({
    uploadCsvFlow: fork(uploadCsvFlow)
  });
}

function* uploadCsvFlow() {
  while (true) {
    yield take(actions.UPLOAD_DATA);
    yield delay(5000);
    yield put({ type: actions.UPLOADED_DATA });
    yield toast.info('We just started importing your csv file! Please check back later on the status of this import.', {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  }
}

