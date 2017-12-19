import * as actions from './actions.js';

const initialState = {
  loggingIn: false,
  loginError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return { ...state, loggingIn: true, loginError: '' };
    case actions.LOGGED_IN:
      return { ...state, loggingIn: false };
    case actions.LOGIN_ERROR:
      return { ...state, loggingIn: false, loginError: action.payload };
    default:
      return initialState;
  }
};
