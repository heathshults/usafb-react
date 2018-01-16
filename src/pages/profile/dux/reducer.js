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
  saving: false,
  togglingUserStatus: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_USER_INFORMATION:
      return { ...state, gettingUserInformation: true, error: '' };
    case actions.USER_INFORMATION_RECEIVED:
      return { ...state, gettingUserInformation: false, ...action.userInformation };
    case actions.USER_INFORMATION_ERROR:
      return { ...state, gettingUserInformation: false, saving: false, error: action.error };
    case actions.SAVE_USER_INFORMATION:
      return { ...state, saving: true, error: '' };
    case actions.SAVE_MY_INFORMATION:
      return { ...state, saving: true, error: '' };
    case actions.USER_INFORMATION_SAVED:
      return { ...state, saving: false, ...action.userInformation };
    case actions.ACTIVATE_USER || actions.DISABLE_USER:
      return { ...state, togglingUserStatus: true };
    case actions.USER_STATUS_UPDATED:
      return { ...state, togglingUserStatus: false, active: action.active };
    default:
      return state;
  }
};
