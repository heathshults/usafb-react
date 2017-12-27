import * as headers from 'services/api/headers';

export default data =>
  fetch(`${process.env.REACT_APP_API_URL}/coaches/${data.id}`, {
    method: 'GET',
    headers: headers.authorizedHeader()
  });
