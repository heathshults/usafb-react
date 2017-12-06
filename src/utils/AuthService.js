import jwtDecode from 'jwt-decode';


// import LogoImg from 'images/test-icon.png';

export default class AuthService {
    // ======================================================
    // Static methods
    // ======================================================
    static loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = AuthService.getToken();
        return !!token && !AuthService.isTokenExpired(token);
    }

    static logout() {
        // Clear user token and profile data from window.localStorage
        window.localStorage.removeItem('id_token');
        window.localStorage.removeItem('profile');
    }

    static getProfile() {
        // Retrieves the profile data from window.localStorage
        const profile = window.localStorage.getItem('profile');
        return profile ? JSON.parse(window.localStorage.profile) : {};
    }

    static setProfile(profile) {
        // Saves profile data to window.localStorage
        window.localStorage.setItem('profile', JSON.stringify(profile));
        // Triggers profile_updated event to update the UI
    }

    static setToken(idToken) {
        // Saves user token to window.localStorage
        window.localStorage.setItem('id_token', idToken);
    }

    static getToken() {
        // Retrieves the user token from window.localStorage
        return window.localStorage.getItem('id_token');
    }

    static getTokenExpirationDate() {
        const token = AuthService.getToken();
        const decoded = jwtDecode(token);
        if (!decoded.exp) {
            return null;
        }

        const date = new Date(0); // The 0 here is the key, which sets the date to the epoch
        date.setUTCSeconds(decoded.exp);
        return date;
    }

    static isTokenExpired() {
        const token = AuthService.getToken();
        if (!token) return true;
        const date = AuthService.getTokenExpirationDate(token);
        const offsetSeconds = 0;
        if (date === null) {
            return false;
        }
        return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
    }
}
