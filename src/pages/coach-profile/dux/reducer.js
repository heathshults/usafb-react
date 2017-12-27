import * as actions from './actions';

const initialState = {
  coachData: {},
  gettingCoachProfile: false,
  retrievedCoachProfile: false,
  getCoachProfileError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_COACH_PROFILE:
      return { ...state, gettingCoachProfile: true, getCoachProfileError: '' };
    case actions.GET_COACH_PROFILE_SUCCESS:
      return { ...state, gettingCoachProfile: false, retrievedCoachProfile: true, coachData: action.coachData };
    case actions.GET_COACH_PROFILE_ERROR:
      return { ...state, gettingCoachProfile: false, getCoachProfileError: action.getCoachProfileError };
    default:
      return state;
  }
};
