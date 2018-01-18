import * as actions from './actions.js';

const initialState = {
  loggingIn: false,
  loginError: '',
  changePasswordModalOpen: true,
  settingPassword: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return { ...state, loggingIn: true, loginError: '' };
    case actions.LOGGED_IN:
      return { ...state, loggingIn: false };
    case actions.LOGIN_ERROR:
      return { ...state, loggingIn: false, loginError: action.payload };
    case actions.TOGGLE_CHANGE_PASSWORD_MODAL:
      return { ...state, changePasswordModalOpen: !state.changePasswordModalOpen };
    case actions.SET_NEW_PASSWORD:
      return { ...state, settingPassword: true };
    case actions.PASSWORD_SET:
      return { ...state, settingPassword: false, changePasswordModalOpen: false };
    default:
      return initialState;
  }
};
