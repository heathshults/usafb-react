import * as actions from './actions';

const initialState = {
  players: [],
  searchValues: {},
  totalPlayers: 0,
  rowsPerPage: 10,
  searchingPlayers: false,
  searchedPlayers: false,
  searchingPlayersError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH_PLAYERS:
      return { ...state, searchingPlayers: true, searchingPlayersError: '' };
    case actions.SEARCH_PLAYERS_SUCCESS:
      return {
        ...state,
        searchingPlayers: false,
        searchedPlayers: true,
        players: action.players,
        totalPlayers: action.total
      };
    case actions.SEARCH_PLAYERS_ERROR:
      return { ...state, searchingPlayers: false, searchingPlayersError: action.searchingPlayersError };
    case actions.UPDATE_ROWS_PER_PAGE:
      return { ...state, rowsPerPage: action.rowsPerPage };
    case actions.SET_SEARCH_VALUES:
      return { ...state, searchValues: action.searchValues };
    default:
      return state;
  }
};
