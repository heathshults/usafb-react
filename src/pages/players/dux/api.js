import * as headers from 'services/api/headers';
import queryString from 'query-string';
import _ from 'lodash';

const apiUrl = `${process.env.REACT_APP_API_URL}/players/search`;

export default data =>
  fetch(`${apiUrl}?${queryString.stringify(_.pickBy(data.searchData, _.identity))}`, {
    method: 'GET',
    headers: headers.authorizedHeader()
  });
