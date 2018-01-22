import * as actions from './actions';

const initialState = {
  exportingPlayersInfo: false,
  retrievedStatusOfPlayersExport: false,
  exportPlayersError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.EXPORT_PLAYERS_INFO:
      return { ...state, exportingPlayersInfo: true, exportPlayersError: '' };
    case actions.EXPORT_PLAYERS_INFO_SUCCESS:
      return { ...state, exportingPlayersInfo: false, retrievedStatusOfPlayersExport: true };
    case actions.EXPORT_PLAYERS_INFO_ERROR:
      return { ...state, exportingPlayersInfo: false, exportPlayersError: action.exportPlayersError };
    default:
      return state;
  }
};
