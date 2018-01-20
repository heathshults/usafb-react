import * as headers from 'services/api/headers';

export default data =>
  fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
    method: 'POST',
    headers: headers.jsonHeader(),
    body: JSON.stringify({
      email: data.email,
      password: data.password
    })
  });

export const setNewPassword = data =>
  fetch(`${process.env.REACT_APP_API_URL}/auth/activate-user`, {
    method: 'POST',
    headers: headers.jsonHeader(),
    body: JSON.stringify(data)
  });


export const sendVerificationCode = data =>
  fetch(`${process.env.REACT_APP_API_URL}/auth/forgot-password`, {
    method: 'POST',
    headers: headers.jsonHeader(),
    body: JSON.stringify(data)
  });

export const confirmVerification = data =>
  fetch(`${process.env.REACT_APP_API_URL}/auth/forgot-password-confirm`, {
    method: 'POST',
    headers: headers.jsonHeader(),
    body: JSON.stringify(data)
  });
