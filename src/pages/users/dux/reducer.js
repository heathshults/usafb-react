import * as actions from './actions';

const initialState = {
  users: [],
  totalUsers: 0,
  gettingUsers: false,
  retrievedUsers: false,
  gettingUsersError: '',
  creatingUser: false,
  userCreated: false,
  createUserError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case action.GET_USERS:
      return { ...state, gettingUsers: true, gettingUserError: '' };
    case actions.USERS_RECEIVED:
      return { ...state, gettingUsers: false, retrievedUsers: true, users: action.users, totalUsers: action.total };
    case actions.GET_USERS_ERROR:
      return { ...state, gettingUsers: false, gettingUsersError: action.gettingUsersError };
    case actions.CREATE_USER:
      return { ...state, creatingUser: true, userCreated: false };
    case actions.USER_CREATED:
      return { ...state, creatingUser: false, userCreated: true };
    case actions.CREATE_USER_ERROR:
      return { ...steate, creatingUser: false, userCreated: false, createUserError: action.createUserError };
    default:
      return state;
  }
};
