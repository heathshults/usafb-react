import { fork, all, take, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { toast } from 'react-toastify';

import displayErrorToast from 'services/toast/error-toast';
import * as actions from './actions';
import getImports from './api';

export default function* userInformationFlow() {
  yield all({
    uploadCsvFlow: fork(uploadCsvFlow),
    getImportsFlow: fork(getImportsFlow),
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

function* getImportsFlow() {
  while (true) {
    try {
      const { userType, data } = yield take(actions.GET_IMPORTS);
      const response = yield call(getImports, userType, data);
      const responseData = yield response.json();
      yield put({ type: actions.RECEIVED_IMPORTS, imports: responseData.data, total: responseData.meta.pagination.total });
    } catch (e) {
      const errorMessage = `An error occurred while we were trying to get a list of imports! 
      Please check your network and try again`;
      displayErrorToast(errorMessage);
    }
  }
}

