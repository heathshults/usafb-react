import * as headers from 'services/api/headers';

export default () =>
  fetch(`${process.env.REACT_APP_API_URL}/stats/overview`, {
    method: 'GET',
    headers: headers.authorizedHeader()
  });
