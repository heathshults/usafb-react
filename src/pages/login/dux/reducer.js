import * as actions from './actions.js';

const initialState = {
  loggingIn: false,
  loginError: '',
  email: '',
  session: '',
  changePasswordModalOpen: false,
  settingPassword: false,
  passwordError: '',
  displayForgotPasswordModal: false,
  sendingVerificationCode: false,
  verificationCodeSent: false,
  verificationCodeError: '',
  confirmingVerification: false,
  verificationConfirmed: false,
  confirmationError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return { ...state, loggingIn: true, loginError: '' };
    case actions.LOGGED_IN:
      return { ...state, loggingIn: false };
    case actions.LOGIN_ERROR:
      return { ...state, loggingIn: false, loginError: action.payload, displayForgotPasswordModal: false };
    case actions.TOGGLE_CHANGE_PASSWORD_MODAL:
      return { ...state, changePasswordModalOpen: !state.changePasswordModalOpen };
    case actions.SET_NEW_PASSWORD:
      return { ...state, settingPassword: true, passwordError: '' };
    case actions.SET_NEW_PASSWORD_FIELDS:
      return { ...state, email: action.email, session: action.session };
    case actions.PASSWORD_SET:
      return { ...state, settingPassword: false, changePasswordModalOpen: false };
    case actions.PASSWORD_SET_ERROR:
      return { ...state, settingPassword: false, passwordError: action.error };
    case actions.TOGGLE_FORGOT_PASSWORD_MODAL:
      return { ...state, displayForgotPasswordModal: !state.displayForgotPasswordModal };
    case actions.SEND_VERIFICATION_CODE:
      return { ...state, sendingVerificationCode: true, verificationCodeError: '' };
    case actions.RECEIVED_VERIFICATION_CODE:
      return { ...state, sendingVerificationCode: false, verificationCodeSent: true };
    case actions.VERIFICATION_CODE_ERROR:
      return { ...state, sendingVerificationCode: false, verificationCodeError: action.error };
    case actions.CONFIRM_VERIFICATION:
      return { ...state, confirmingVerification: true, confirmationError: '' };
    case actions.VERIFICATION_CONFIRMED:
      return { ...state, confirmingVerification: false, verificationConfirmed: true, displayForgotPasswordModal: false };
    case actions.VERIFICATION_CONFIRMATION_ERROR:
      return { ...state, confirmingVerification: false, confirmationError: action.error };
    default:
      return initialState;
  }
};
