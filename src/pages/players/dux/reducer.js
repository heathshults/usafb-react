import * as actions from './actions';

const initialState = {
  playerSearchData: {},
  searchingPlayers: false,
  searchedPlayers: false,
  searchingPlayersError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH_PLAYERS:
      return { ...state, searchingPlayers: true, searchingPlayersError: '' };
    case actions.SEARCH_PLAYERS_SUCCESS:
      return { ...state, searchingPlayers: false, searchedPlayers: true, playerSearchData: action.playerSearchData };
    case actions.SEARCH_PLAYERS_ERROR:
      return { ...state, searchingPlayers: false, searchingPlayersError: action.searchingPlayersError };
    default:
      return state;
  }
};
