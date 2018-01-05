import fetchIntercept from 'fetch-intercept';
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
  }

  registerInterceptor = () =>
    fetchIntercept.register({
      request: (url, config) => {
        if (config.body) {
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
        if (response.statusText.toUpperCase() === 'UNAUTHORIZED' && response.status === 401) {
          return this.refreshToken()
            .then(resp => resp.json())
            .then(data => this.storeTokens(data))
            .then(() => response);
        }
        // Modify the response object
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

  storeTokens = (data) => { //eslint-disable-line
    console.log(this.url); //eslint-disable-line
    console.dir(this.config); //eslint-disable-line
    // window.localStorage.setItem('access_token', data.access_token);
    // window.localStorage.setItem('access_token', data.id_token);
  }

  retryApiCall = () =>
    fetch(this.url, {
      method: this.config.method || 'GET',
      headers: jsonHeader()
    })

  getFetchData = () => {
    const data = {};

    data.method = this.config.method || 'GET';

    if (data.method !== 'GET') {
      data.headers = headers.jsonHeader();
    } else {
      data.headers = headers.authorizedHeader();
    }

    return data;
  }
}
