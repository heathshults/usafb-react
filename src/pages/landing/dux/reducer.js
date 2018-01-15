import * as actions from './actions';

const initialState = {
  gettingStats: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_STATS:
      return { ...state, gettingStats: true };
    case actions.RECEIVED_STATS:
      return { ...state, gettingStats: false };
    default:
      return state;
  }
};
