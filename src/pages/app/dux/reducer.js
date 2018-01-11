import * as actions from './actions';

const initialState = {
  player_export_modal_open: false,
  coach_export_modal_open: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.OPEN_PLAYER_EXPORT_MODAL:
      return { ...state, player_export_modal_open: true };
    case actions.OPEN_COACH_EXPORT_MODAL:
      return { ...state, coach_export_modal_open: true };
    case actions.CLOSE_EXPORT_MODAL:
      return { ...state, coach_export_modal_open: false, player_export_modal_open: false };
    default:
      return state;
  }
};
