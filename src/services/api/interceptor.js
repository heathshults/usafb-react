import fetchIntercept from 'fetch-intercept';
import { toast } from 'react-toastify';
import * as headers from 'services/api/headers';

/**
 * The purpose of this class is to check if the API
 * rejects any call because of an expired token.
 * If a token is expired, we will get another token from the refresh token that
 * is stored in memory, and retry the failed API call
 */
export default class Interceptor {
  constructor() {
    this.registerInterceptor();

    // we need to store the url and config every time a request is made.
    // these values will allow us to retry any unauthorized calls that occurred because of expired tokens
    this.url = '';
    this.config = {};
    this.formData = {};
  }

  registerInterceptor = () =>
    fetchIntercept.register({
      request: (url, config) => {
        if (config.body && !(config.body instanceof FormData)) {
          const body = JSON.parse(config.body);
          if (!body.refresh_token) {
            this.url = url;
            this.config = config;
          }
        } else {
          this.url = url;
          this.config = config;
        }

        return [url, config];
      },
      requestError: error => Promise.reject(error),
      response: (response) => {
        // if the user token is invalid and they have a refresh token, get a new access token
        if (response.statusText.toUpperCase() === 'UNAUTHORIZED' && response.status === 401 && !!window.localStorage.getItem('access_token') && !!window.localStorage.getItem('refresh_token')) {
          return this.refreshToken()
            .then(resp => resp.json())
            .then(data => this.storeTokens(data))
            .then(() => this.retryApiCall())
            .then(updatedResponse => updatedResponse);
        }

        // automatically display a toast error message for every failed API call
        if (this.url.indexOf('auth') === -1 && response.statusText.toUpperCase() !== 'UNAUTHORIZED' && response.status !== 401 && !response.ok) {
          response.json()
            .then(err => toast.error(this.getErrorMessage(err), {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: false
            }));
        }

        return response;
      },
      responseError: error => Promise.reject(error)
    });

  refreshToken = () =>
    fetch(`${process.env.REACT_APP_API_URL}/auth/refresh-token`, {
      method: 'POST',
      headers: headers.jsonHeader(),
      body: JSON.stringify({
        refresh_token: window.localStorage.getItem('refresh_token')
      })
    });

  storeTokens = (data) => {
    window.localStorage.setItem('access_token', data.access_token);
    window.localStorage.setItem('id_token', data.id_token);
  }

  retryApiCall = () => {
    const data = this.getFetchData();
    return fetch(this.url, data);
  }

  getFetchData = () => {
    const data = {};

    data.method = this.config.method || 'GET';

    if (data.method !== 'GET') {
      data.headers = headers.jsonHeader();
    } else {
      data.headers = headers.authorizedHeader();
    }

    if (this.config.body) {
      data.body = this.config.body;
    }

    return data;
  }

  getErrorMessage = (err) => {
    if (err.data.errors) {
      return err.data.errors[0].error;
    }

    return err.data.error.message;
  };
}
