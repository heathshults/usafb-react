import * as actions from './actions';

const initialState = {
  gettingImports: false,
  imports: [],
  uploading: false,
  dropzoneStatus: 'accepting'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_IMPORTS:
      return { ...state, gettingImports: true };
    case actions.RECEIVED_IMPORTS:
      return { ...state, gettingImports: false, imports: action.imports };
    case actions.CSV_ACCEPTING:
      return { ...state, dropzoneStatus: 'accepting' };
    case actions.CSV_CHECKING:
      return { ...state, dropzoneStatus: 'checking' };
    case actions.CSV_REJECTED:
      return { ...state, dropzoneStatus: 'rejected' };
    case actions.CSV_ACCEPTED:
      return { ...state, dropzoneStatus: 'accepted' };
    default:
      return state;
  }
};
