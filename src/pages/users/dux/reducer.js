import * as actions from './actions';

const initialState = {
  users: [],
  totalUsers: 0,
  gettingUsers: false,
  retrievedUsers: false,
  gettingUsersError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case action.GET_USERS:
      return { ...state, gettingUsers: true, gettingUserError: '' };
    case actions.USERS_RECEIVED:
      return { ...state, gettingUsers: false, retrievedUsers: true, users: action.users, totalUsers: action.total };
    case actions.GET_USERS_ERROR:
      return { ...state, gettingUsers: false, gettingUsersError: action.gettingUsersError };
    default:
      return state;
  }
};
