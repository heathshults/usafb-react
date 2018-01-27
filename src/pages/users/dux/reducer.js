import * as actions from './actions';

const initialState = {
  users: [],
  roles: [],
  totalUsers: 0,
  gettingUsers: false,
  retrievedUsers: false,
  creatingUser: false,
  editingUser: false,
  userCreated: false,
  rowsPerPage: 10,
  currentPage: 1,
  userModalOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case action.GET_USERS:
      return { ...state, gettingUsers: true, gettingUserError: '' };
    case actions.USERS_RECEIVED:
      return { ...state, gettingUsers: false, retrievedUsers: true, users: action.users, totalUsers: action.total };
    case actions.GET_USERS_ERROR:
      return { ...state, gettingUsers: false };
    case actions.CREATE_USER:
      return { ...state, creatingUser: true, userCreated: false };
    case actions.USER_CREATED:
      return { ...state, creatingUser: false, userCreated: true };
    case actions.CREATE_USER_ERROR:
      return { ...state, creatingUser: false, userCreated: false };
    case actions.EDIT_USER:
      return { ...state, editingUser: true };
    case actions.USER_EDITED || actions.EDIT_USER_ERROR:
      return { ...state, editingUser: false };
    case actions.UPDATE_ROWS_PER_PAGE:
      return { ...state, rowsPerPage: action.rowsPerPage };
    case actions.UPDATE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case actions.SET_ROLES:
      return { ...state, roles: action.roles };
    case actions.TOGGLE_USER_MODAL:
      return { ...state, userModalOpen: !state.userModalOpen };
    default:
      return state;
  }
};
