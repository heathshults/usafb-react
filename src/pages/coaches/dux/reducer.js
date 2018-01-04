import * as actions from './actions';

const initialState = {
  coachSearchData: [],
  searchingCoaches: false,
  searchedCoaches: false,
  searchingCoachesError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH_COACHES:
      return { ...state, searchingCoaches: true, searchingCoachesError: '' };
    case actions.SEARCH_COACHES_SUCCESS:
      return { ...state, searchingCoaches: false, searchedCoaches: true, coachSearchData: action.coachSearchData };
    case actions.SEARCH_COACHES_ERROR:
      return { ...state, searchingCoaches: false, searchingCoachesError: action.searchingCoachesError };
    default:
      return state;
  }
};
