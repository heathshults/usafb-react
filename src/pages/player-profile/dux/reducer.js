import * as actions from './actions';

const initialState = {
  playerData: {},
  gettingPlayerProfile: false,
  retrievedPlayerProfile: false,
  getPlayerProfileError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PLAYER_PROFILE:
      return { ...state, gettingPlayerProfile: true, getPlayerProfileError: '' };
    case actions.GET_PLAYER_PROFILE_SUCCESS:
      return { ...state, gettingPlayerProfile: false, retrievedPlayerProfile: true, playerData: action.playerData };
    case actions.GET_PLAYER_PROFILE_ERROR:
      return { ...state, gettingPlayerProfile: false, getPlayerProfileError: action.getPlayerProfileError };
    default:
      return state;
  }
};
