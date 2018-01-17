import * as headers from 'services/api/headers';
import queryString from 'query-string';

export default (type, data) =>
  fetch(`${process.env.REACT_APP_API_URL}/imports/${type}?${queryString.stringify(data)}`, {
    method: 'GET',
    headers: headers.authorizedHeader()
  });
