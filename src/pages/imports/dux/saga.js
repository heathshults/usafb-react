import { fork, all, take, put, call, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
// import FileSaver from 'file-saver';

import * as actions from './actions';
import getImports, { importFile, downloadFile } from './api';
import importSelector from './selectors';

export default function* userInformationFlow() {
  yield all({
    uploadCsvFlow: fork(uploadCsvFlow),
    getImportsFlow: fork(getImportsFlow),
    downloadFilesFlow: fork(downloadFilesFlow),
  });
}

function* uploadCsvFlow() {
  while (true) {
    const { userType, file } = yield take(actions.UPLOAD_DATA);
    const response = yield call(importFile, userType, file);
    if (response.ok) {
      yield put({ type: actions.UPLOADED_DATA });
      yield toast.success('We just started importing your csv file! Please check back later on the status of this import.', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      const state = yield select(importSelector);

      const data = {
        page: 1,
        per_page: state.rowsPerPage
      };
      yield getImportsCall(userType, data);
    } else {
      yield put({ type: actions.UPLOAD_DATA_ERROR });
    }
  }
}

function* getImportsFlow() {
  while (true) {
    const { userType, data } = yield take(actions.GET_IMPORTS);
    yield getImportsCall(userType, data);
  }
}

function* getImportsCall(userType, data) {
  const response = yield call(getImports, userType, data);
  if (response.ok) {
    const responseData = yield response.json();

    const imports = yield responseData.data.map(values => ({
      ...values,
      downloadingSource: false,
      downloadingResults: false,
      downloadingErrors: false
    }));

    yield put({ type: actions.RECEIVED_IMPORTS, imports, total: responseData.meta.pagination.total });
  }
}

function* downloadFilesFlow() {
  while (true) {
    const { id, fileType, userType } = yield take(actions.DOWNLOAD_FILE);
    // toggle spinner for downloading file
    yield updateImportsDownloadStatus(id, fileType);
    const response = yield call(downloadFile, id, fileType, userType);
    if (response.ok) {
      const responseData = yield response.json();
      yield call(saveFile, responseData.data);
      yield updateImportsDownloadStatus(id, fileType);
    } else {
      // toggle spinner for downloading file
      yield updateImportsDownloadStatus(id, fileType);
    }
  }
}

function* updateImportsDownloadStatus(id, fileType) {
  const state = yield select(importSelector);

  const updatedImports = yield state.imports.map((file) => {
    if (file._id === id) { //eslint-disable-line
      if (fileType === 'source') {
        file.downloadingSource = !file.downloadingSource; //eslint-disable-line
      }

      if (fileType === 'errors') {
        file.downloadingErrors = !file.downloadingErrors; //eslint-disable-line
      }

      if (fileType === 'results') {
        file.downloadingResults = !file.downloadingResults; //eslint-disable-line
      }
    }
    return file;
  });

  yield put({ type: actions.RECEIVED_IMPORTS, imports: updatedImports, total: state.totalImports });
}

function saveFile(data) {
  // const blob = new Blob(data.content, {
  //   type: data.content_type
  // });
  // FileSaver.saveAs(blob, 'test.csv');
  if (window.navigator.msSaveOrOpenBlob) { // IE hack; see http://msdn.microsoft.com/en-us/library/ie/hh779016.aspx
    window.navigator.msSaveBlob(blob, 'filename.csv');
  } else {
    // const url = `data:text/csv;base64,${data.content}`;
    const a = window.document.createElement('a');
    a.setAttribute('href', `data:text/csv;base64,${data.content}`);
    a.setAttribute('download', data.file_name);
    window.document.body.appendChild(a);
    a.click(); // IE: "Access is denied"; see: https://connect.microsoft.com/IE/feedback/details/797361/ie-10-treats-blob-url-as-cross-origin-and-denies-access
    window.document.body.removeChild(a);
    // a.href = window.URL.createObjectURL(blob, { type: 'text/plain' });
    // a.download = 'filename.csv';
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
  }
}
