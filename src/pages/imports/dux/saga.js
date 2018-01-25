import { fork, all, take, put, call, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import Papa from 'papaparse';
import FileSaver from 'file-saver';

import displayErrorToast from 'services/toast/error-toast';
import * as actions from './actions';
import getImports, { importFile, downloadFile } from './api';
import importSelector from './selectors';

export default function* userInformationFlow() {
  yield all({
    uploadCsvFlow: fork(uploadCsvFlow),
    getImportsFlow: fork(getImportsFlow),
    downloadFilesFlow: fork(downloadFilesFlow),
    downloadResults: fork(downloadResults)
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
    const { id, fileType, userType, fileName } = yield take(actions.DOWNLOAD_FILE);
    // toggle spinner for downloading file
    yield updateImportsDownloadStatus(id, fileType);
    const response = yield call(downloadFile, id, fileType, userType);

    if (response.ok) {
      const responseData = yield response.json();
      const uniqueFileName = yield call(setFileName, fileName, fileType);

      yield call(saveBase64File, responseData.data.content, uniqueFileName, true);
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

function saveBase64File(content, fileName) {
  try {
    const a = window.document.createElement('a');
    const downloadUrl = `data:text/csv;base64,${content}`;
    a.setAttribute('href', downloadUrl);
    a.setAttribute('download', fileName);
    window.document.body.appendChild(a);
    a.click(); // IE: "Access is denied"; see: https://connect.microsoft.com/IE/feedback/details/797361/ie-10-treats-blob-url-as-cross-origin-and-denies-access
    window.document.body.removeChild(a);
  } catch (e) {
    displayErrorToast('Unable to download file!');
  }
}

function* downloadResults() {
  while (true) {
    const { results, fileName } = yield take(actions.DOWNLOAD_RESULTS);

    const csv = yield Papa.unparse(results);
    const csvData = yield new Blob([csv], { type: 'text/csv;charset=utf-8' });
    yield FileSaver.saveAs(csvData, fileName);
  }
}

// We need to distinguish each file download by the type of file it is,
// so users will not be confused when they save something
function setFileName(filename, fileType) {
  const splitFileName = filename.split('.');
  const updatedFileName = [];

  splitFileName.forEach((value) => {
    if (value === 'csv') {
      updatedFileName.push(`-${fileType}.`);
    } else {
      updatedFileName.push(value);
    }
  });

  // add the csv extension to the filename
  updatedFileName.push(splitFileName[splitFileName.length - 1]);

  return updatedFileName.join('');
}
