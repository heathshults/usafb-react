import * as headers from 'services/api/headers';

export default type =>
  fetch(`${process.env.REACT_APP_API_URL}/imports/${type}`, {
    method: 'GET',
    headers: headers.authorizedHeader()
  });
