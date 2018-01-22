import * as headers from 'services/api/headers';

export default body =>
  fetch(`${process.env.REACT_APP_API_URL}/players/export`, {
    method: 'POST',
    headers: headers.authorizedHeader(),
    body
  });
