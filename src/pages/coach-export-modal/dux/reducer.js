import * as actions from './actions';

const initialState = {
  exportingCoachesInfo: false,
  retrievedStatusOfCoachesExport: false,
  exportCoachesError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.EXPORT_COACHES_INFO:
      return { ...state, exportingCoachesInfo: true, exportCoachesError: '' };
    case actions.EXPORT_COACHES_INFO_SUCCESS:
      return { ...state, exportingCoachesInfo: false, retrievedStatusOfCoachesExport: true };
    case actions.EXPORT_COACHES_INFO_ERROR:
      return { ...state, exportingCoachesInfo: false, exportCoachesError: action.exportCoachesError };
    default:
      return state;
  }
};
