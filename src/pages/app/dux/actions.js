export const OPEN_PLAYER_EXPORT_MODAL = 'open player export modal';
export const OPEN_COACH_EXPORT_MODAL = 'open coach export modal';
export const CLOSE_EXPORT_MODAL = 'close export modal';

export const INITIALIZE_APP = 'usafb initialize application';
export const SET_USER_INFORMATION = 'usafb set user information';
export const GET_ROLES = 'usafb get roles';
export const RECEIVED_ROLES = 'usafb received roles';

export function togglePlayerExportModalOn() {
  return {
    type: OPEN_PLAYER_EXPORT_MODAL
  };
}

export function toggleCoachExportModalOn() {
  return {
    type: OPEN_COACH_EXPORT_MODAL
  };
}

export function toggleExportModalOff() {
  return {
    type: CLOSE_EXPORT_MODAL
  };
}
