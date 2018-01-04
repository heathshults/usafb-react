import * as headers from 'services/api/headers';
import queryString from 'query-string';

const apiUrl = `${process.env.REACT_APP_API_URL}/coaches/search`;

export default (data) => {
  console.dir(data.searchData); //eslint-disable-line
  console.dir(queryString.stringify(data.searchData)); //eslint-disable-line
  return fetch(`${apiUrl}?page=1&state=CA`, {
    method: 'GET',
    headers: headers.authorizedHeader()
  });
};
