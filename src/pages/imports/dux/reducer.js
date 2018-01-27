import * as actions from './actions';

const initialState = {
  gettingImports: false,
  imports: [],
  totalImports: 0,
  currentPage: 1,
  rowsPerPage: 10,
  importing: false,
  dropzoneStatus: 'accepting'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_IMPORTS:
      return { ...state, gettingImports: true };
    case actions.RECEIVED_IMPORTS:
      return { ...state, gettingImports: false, imports: action.imports, totalImports: action.total };
    case actions.UPLOAD_DATA:
      return { ...state, importing: true };
    case actions.UPLOADED_DATA:
      return { ...state, importing: false };
    case actions.UPLOAD_DATA_ERROR:
      return { ...state, importing: false };
    case actions.CSV_ACCEPTING:
      return { ...state, dropzoneStatus: 'accepting' };
    case actions.CSV_CHECKING:
      return { ...state, dropzoneStatus: 'checking' };
    case actions.CSV_REJECTED:
      return { ...state, dropzoneStatus: 'rejected' };
    case actions.CSV_ACCEPTED:
      return { ...state, dropzoneStatus: 'accepted' };
    case actions.UPDATE_ROWS_PER_PAGE:
      return { ...state, rowsPerPage: action.rowsPerPage };
    case actions.UPDATE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    default:
      return state;
  }
};
