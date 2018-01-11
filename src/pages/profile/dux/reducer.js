import * as actions from './actions';

const initialState = {
  active: false,
  address: {},
  email: '',
  name_first: '',
  name_last: '',
  phone: '',
  role_name: '',
  gettingUserInformation: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_USER_INFORMATION:
      return { ...state, gettingUserInformation: true, error: '' };
    case actions.USER_INFORMATION_RECEIVED:
      return { ...state, gettingUserInformation: false, ...action.userInformation };
    case actions.USER_INFORMATION_ERROR:
      return { ...state, gettingUserInformation: false, error: '' };
    default:
      return state;
  }
};
