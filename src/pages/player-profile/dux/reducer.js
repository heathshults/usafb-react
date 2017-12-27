import * as actions from './actions';

const initialState = {
  playerData: {},
  gettingPlayerProfile: false,
  getPlayerProfileError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PLAYER_PROFILE:
      return { ...state, gettingPlayerProfile: true, getPlayerProfileError: '' };
    case actions.GET_PLAYER_PROFILE_SUCCESS:
      return { ...state, gettingPlayerProfile: false, retrievedUsers: true, playerData: action.playerData };
    case actions.GET_PLAYER_PROFILE_ERROR:
      return { ...state, gettingPlayerProfile: false, getPlayerProfileError: action.getPlayerProfileError };
    default:
      return state;
  }
};
