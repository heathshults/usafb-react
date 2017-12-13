import * as actions from './actions.js';

const initialState = {
  uploading: false,
  uploadError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.UPLOAD:
      return { ...state, uploading: true, uploadError: '' };
    case actions.UPLOAD_SUCCESS:
      return { ...state, uploading: false };
    case actions.UPLOAD_ERROR:
      return { ...state, uploading: false, uploadError: action.payload };
    default:
      return initialState;
  }
};
