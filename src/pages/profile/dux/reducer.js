import * as actions from './actions';

const initialState = {
  userInformation: {},
  gettingUserInformation: false,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_USER_INFORMATION:
      return { ...state, gettingUserInformation: true, error: '' };
    case actions.USER_INFORMATION_RECEIVED:
      return { ...state, gettingUserInformation: false, userInformation: action.userInformation };
    case actions.USER_INFORMATION_ERROR:
      return { ...state, gettingUserInformation: false, error: '' };
    default:
      return state;
  }
};
