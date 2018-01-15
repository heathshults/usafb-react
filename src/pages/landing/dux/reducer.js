import * as actions from './actions';

const initialState = {
  gettingStats: false,
  num_players: 0,
  num_coaches: 0,
  players: [],
  coaches: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_STATS:
      return { ...state, gettingStats: true };
    case actions.RECEIVED_STATS:
      return { ...state, gettingStats: false, ...action.data };
    default:
      return state;
  }
};
