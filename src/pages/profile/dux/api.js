import * as headers from 'services/api/headers';

export default id =>
  fetch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
    method: 'GET',
    headers: headers.authorizedHeader()
  });
