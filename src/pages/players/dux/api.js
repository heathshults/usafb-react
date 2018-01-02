import * as headers from 'services/api/headers';
import queryString from 'query-string';

const apiUrl = `${process.env.REACT_APP_API_URL}/players/search`;

export default data =>
  fetch(`${apiUrl}?${queryString.stringify(data)}`, {
    method: 'GET',
    headers: headers.authorizedHeader()
  });
