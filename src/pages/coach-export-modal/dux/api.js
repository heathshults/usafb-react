import * as headers from 'services/api/headers';

export default body =>
  fetch(`${process.env.REACT_APP_API_URL}/coaches/export`, {
    method: 'POST',
    headers: headers.authorizedHeader(),
    body
  });
