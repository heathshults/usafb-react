import * as actions from './actions.js';

const initialState = {
  gettingPlayerProfile: false,
  getPlayerProfileError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PLAYER_PROFILE:
      return { ...state, gettingPlayerProfile: true, getPlayerProfileError: '' };
    case actions.GET_PLAYER_PROFILE_SUCCESS:
      return { ...state, gettingPlayerProfile: false };
    case actions.GET_PLAYER_PROFILE_ERROR:
      return { ...state, gettingPlayerProfile: false, getPlayerProfileError: action.payload };
    default:
      return initialState;
  }
};
