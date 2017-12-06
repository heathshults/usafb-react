import Immutable, { Map } from 'immutable';

export const ID_TOKEN = 'id_token';
export const PROFILE = 'profile';

export const setStoredAuthState = (profile, idToken) => {
    window.localStorage.setItem(ID_TOKEN, idToken);
    window.localStorage.setItem(PROFILE, JSON.stringify(profile));
};

export const removeStoredAuthState = () => {
    window.localStorage.removeItem(ID_TOKEN);
    window.localStorage.removeItem(PROFILE);
};

export const getStoredAuthState = () => {
    try {
        const idToken = window.localStorage.getItem(ID_TOKEN);
        const profile = Immutable.fromJS(JSON.parse(window.localStorage.getItem(PROFILE)));

        return Map({ idToken, profile });
    } catch (err) {
        removeStoredAuthState();

        return Map();
    }
};
