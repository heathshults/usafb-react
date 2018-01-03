import * as headers from 'services/api/headers';
import queryString from 'query-string';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

const apiUrl = `${process.env.REACT_APP_API_URL}/players/search`;

export default data =>
  fetch(`${apiUrl}?${queryString.stringify(pickBy(data.searchData, identity))}`, {
    method: 'GET',
    headers: headers.authorizedHeader()
  });
