import * as actions from './actions';

const initialState = {
  coaches: [],
  searchValues: {},
  totalCoaches: 0,
  rowsPerPage: 10,
  searchingCoaches: false,
  searchedCoaches: false,
  searchingCoachesError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH_COACHES:
      return { ...state, searchingCoaches: true, searchingCoachesError: '' };
    case actions.SEARCH_COACHES_SUCCESS:
      return {
        ...state,
        searchingCoaches: false,
        searchedCoaches: true,
        coaches: action.coaches,
        totalCoaches: action.total
      };
    case actions.SEARCH_COACHES_ERROR:
      return { ...state, searchingCoaches: false };
    case actions.UPDATE_ROWS_PER_PAGE:
      return { ...state, rowsPerPage: action.rowsPerPage };
    case actions.SET_SEARCH_VALUES:
      return { ...state, searchValues: action.searchValues };
    default:
      return state;
  }
};
