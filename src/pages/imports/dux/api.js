import * as headers from 'services/api/headers';
import queryString from 'query-string';

const apiURL = `${process.env.REACT_APP_API_URL}/imports`;

export default (type, data) =>
  fetch(`${apiURL}/${type}?${queryString.stringify(data)}`, {
    method: 'GET',
    headers: headers.authorizedHeader()
  });

export const importFile = (type, file) => {
  const data = new FormData();
  data.append('file', file);

  return fetch(`${apiURL}/${type}`, {
    method: 'POST',
    headers: headers.authorizedHeader(),
    body: data
  });
};
