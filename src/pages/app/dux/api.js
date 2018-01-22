import * as headers from 'services/api/headers';

export default () =>
  fetch(`${process.env.REACT_APP_API_URL}/roles`, {
    headers: headers.authorizedHeader()
  });

export const getUserInformation = () =>
  fetch(`${process.env.REACT_APP_API_URL}/user`, {
    headers: headers.authorizedHeader()
  });
