import * as headers from 'services/api/headers';

export const login = data =>
  fetch(`${process.env.REACT_APP_API_URL}/login`, {
    method: 'POST',
    headers: headers.postHeader(),
    body: JSON.stringify({
      email: data.email,
      password: data.password
    })
  });

export const getUserData = () =>
  fetch(`${process.env.REACT_APP_API_URL}/me`, {
    headers: headers.authorizedHeader()
  });
