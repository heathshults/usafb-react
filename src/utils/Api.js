/* Service for api calls */
import FileSaver from 'file-saver';
import { isNil } from 'ramda';
import AuthService from './AuthService';
import DateFunctions from './Date';

const apiUrl = '/api';

const constants = {
    DEFAULT_ERROR_MESSAGE: 'Error.',
    TOKEN_TYPE: 'Bearer',
    PAGE_SIZE: 15,
    START_PAGE: 1,
    URIS: {
        LOGIN: `${apiUrl}/login`,
        USER_INFO: `${apiUrl}/me`,
        FORGOT_PASSWORD: `${apiUrl}/forgot-password`,
        UPLOAD_PLAYERS: `${apiUrl}/registrants/import?type=player`,
        DOWNLOAD_PLAYERS: `${apiUrl}/registrants/export?type=player`,
        UPLOAD_COACHES: `${apiUrl}/registrants/import?type=coach`,
        DOWNLOAD_COACHES: `${apiUrl}/registrants/export?type=coach`,
        USERS: `${apiUrl}/users`
    },
    METHODS: {
        POST: 'POST',
        GET: 'GET',
        PUT: 'PUT',
    }
};

/**
* Generic function to handle response of all endpoints
* If success returns data, if failure and throw error when failure
*
* @param {object} response
* @return {object} if API responds with success
* @throws {Error} if API responds with an error
*/
const handleResponse = (response) => {
    const data = response.json();
    if (response.ok) {
        return data;
    }

    return data.then((errorResponse) => {
        let message = constants.DEFAULT_ERROR_MESSAGE;
        if (errorResponse.errors.length) {
            let validationMessage = '';
            errorResponse.errors.forEach((item, index) => {
                validationMessage = index === 0 ? item.error : `${validationMessage}\n${item.error}`;
            }, this);
            message = validationMessage;
        }
        throw new Error(message);
    });
};

/**
* Generic function to handle fetch errors ex: Connection error
*
* @return {Error}
*/
const handleFetchError = () => {
    throw new Error(constants.DEFAULT_ERROR_MESSAGE);
};

/**
* Fetch /login endpoint to get token info
*
* @param {object} data
* @return {object} if API responds with success
* @throws {Error} if API responds with an error
*/
export const login = data => (
    fetch(constants.URIS.LOGIN, {
        method: constants.METHODS.POST,
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            email: data.email,
            password: data.password
        })
    })
    .catch(() => handleFetchError())
    .then(response => handleResponse(response))
);

/**
* Fetch /me endpoint to get user info based on token provided in header
*
* @param {object} token
* @return {object} if API responds with success
* @throws {Error} if API responds with an error
*/
export const getUser = token => (
    fetch(constants.URIS.USER_INFO, {
        method: constants.METHODS.GET,
        headers: new Headers({
            Authorization: `${constants.TOKEN_TYPE} ${token}`
        })
    })
    .catch(() => handleFetchError())
    .then(response => handleResponse(response))
);

/**
* Fetch /forgot-password endpoint to send link to reset password via email
*
* @param {object} data
* @return {object} if API responds with success
* @throws {Error} if API responds with an error
*/
export const sendEmailForgotPassword = data => (
    fetch(constants.URIS.FORGOT_PASSWORD, {
        method: constants.METHODS.POST,
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            email: data.email
        })
    })
    .catch(() => handleFetchError())
    .then(response => handleResponse(response))
);

/**
* Fetch /players/upload endpoint to import player registrations
*
* @param {object} file
* @return {object} if API responds with success
* @throws {Error} if API responds with an error
*/
export const uploadPlayers = (file) => {
    const formData = new FormData();
    formData.append('csv_file', file);
    return fetch(constants.URIS.UPLOAD_PLAYERS, {
        method: constants.METHODS.POST,
        headers: new Headers({
            Authorization: `${constants.TOKEN_TYPE} ${AuthService.getToken()}`
        }),
        body: formData
    })
    .catch(() => handleFetchError())
    .then(response => handleResponse(response));
};

/**
* Fetch /player/download endpoint to export players
*
* @return {object} if API responds with success
* @throws {Error} if API responds with an error
*/
export const exportPlayers = () => {
    fetch(constants.URIS.DOWNLOAD_PLAYERS, {
        method: constants.METHODS.GET,
        headers: new Headers({
            Authorization: `${constants.TOKEN_TYPE} ${AuthService.getToken()}`
        })
    })
    .catch(() => handleFetchError())
    .then(response => response.blob())
    .then((blob) => {
        FileSaver.saveAs(blob, `players-${DateFunctions.currentDate()}.csv`);
    });
};

/**
* Fetch /coach/upload endpoint to import coach registrations
*
* @param {object} file
* @return {object} if API responds with success
* @throws {Error} if API responds with an error
*/
export const uploadCoaches = (file) => {
    const formData = new FormData();
    formData.append('csv_file', file);
    return fetch(constants.URIS.UPLOAD_COACHES, {
        method: constants.METHODS.POST,
        headers: new Headers({
            Authorization: `${constants.TOKEN_TYPE} ${AuthService.getToken()}`
        }),
        body: formData
    })
    .catch(() => handleFetchError())
    .then(response => handleResponse(response));
};

/**
* Fetch /coach/download endpoint to export coaches
*
* @return {object} if API responds with success
* @throws {Error} if API responds with an error
*/
export const exportCoaches = () => {
    fetch(constants.URIS.DOWNLOAD_COACHES, {
        method: constants.METHODS.GET,
        headers: new Headers({
            Authorization: `${constants.TOKEN_TYPE} ${AuthService.getToken()}`
        })
    })
    .catch(() => handleFetchError())
    .then(response => response.blob())
    .then((blob) => {
        FileSaver.saveAs(blob, `coaches-${DateFunctions.currentDate()}.csv`);
    });
};

/**
 * Will request for a user page according to parameters
 * @param {Number} param.pageNumber page number requested
 * @param {String} param.sortParam String containing sorting param
 * @param {String} param.searchParam String containing search param
 */
export const getUserList = ({
        pageNumber = constants.START_PAGE,
        sortParam = null,
        searchParam = null }) => {
    const sortable = isNil(sortParam) ? '' : `&sort=${sortParam}`;
    const query = isNil(searchParam) ? '' : `&q=${searchParam}`;
    return (
        fetch(`${constants.URIS.USERS}?page=${pageNumber}&per_page=${constants.PAGE_SIZE}${sortable}${query}`, {
            method: constants.METHODS.GET,
            headers: new Headers({
                Authorization: `${constants.TOKEN_TYPE} ${AuthService.getToken()}`
            })
        })
            .catch(() => handleFetchError())
            .then(response => handleResponse(response))
    );
};

/**
* Fetch GET /users/{id} endpoint to get a user by id
*
* @param {object} data
* @return {object} if API responds with success
* @throws {Error} if API responds with an error
*/
export const getUserById = userId => (
    fetch(`${constants.URIS.USERS}/${userId}`, {
        method: constants.METHODS.GET,
        headers: new Headers({
            Authorization: `${constants.TOKEN_TYPE} ${AuthService.getToken()}`
        })
    })
        .catch(() => handleFetchError())
        .then(response => handleResponse(response))
);

/**
* Fetch PUT /users endpoint to update a user
*
* @param {object} data
* @return {object} if API responds with success
* @throws {Error} if API responds with an error
*/
export const updateUser = (userId, data) => (
    fetch(`${constants.URIS.USERS}/${userId}`, {
        method: constants.METHODS.PUT,
        headers: new Headers({
            Authorization: `${constants.TOKEN_TYPE} ${AuthService.getToken()}`,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data)
    })
        .catch(() => handleFetchError())
        .then(response => handleResponse(response))
);

/**
* Fetch POST /users endpoint to create a new user
*
* @param {object} user
* @return {object} if API responds with success
* @throws {Error} if API responds with an error
*/
export const createUser = user => (
    fetch(constants.URIS.USERS, {
        method: constants.METHODS.POST,
        headers: new Headers({
            Authorization: `${constants.TOKEN_TYPE} ${AuthService.getToken()}`,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(user)
    })
        .catch(() => handleFetchError())
        .then(response => handleResponse(response))
);
