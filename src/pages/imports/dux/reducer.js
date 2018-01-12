import * as actions from './actions';

const initialState = {
  gettingImports: false,
  imports: [],
  uploading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_IMPORTS:
      return { ...state, gettingImports: true };
    case actions.RECEIVED_IMPORTS:
      return { ...state, gettingImports: false, imports: action.imports };
    default:
      return state;
  }
};
