import * as headers from 'services/api/headers';
import queryString from 'query-string';

const apiUrl = `${process.env.REACT_APP_API_URL}/users`;

export default (data) => {
  const queryParams = queryString.stringify(data);
  return fetch(`${apiUrl}?${queryParams}`, {
    headers: headers.authorizedHeader()
  });
};

export const createUser = data =>
  fetch(`${apiUrl}`, {
    method: 'POST',
    headers: headers.jsonHeader(),
    body: JSON.stringify(data)
  });

export const editUser = data =>
  fetch(`${apiUrl}/${data._id}`, { //eslint-disable-line
    method: 'PUT',
    headers: headers.jsonHeader(),
    body: JSON.stringify(data)
  });

export const getRoles = () =>
  fetch(`${process.env.REACT_APP_API_URL}/roles`, {
    headers: headers.authorizedHeader()
  });

export const activateUser = id =>
  fetch(`${apiUrl}/${id}/activate`, {
    method: 'PUT',
    headers: headers.jsonHeader()
  });

export const deactivateUser = id =>
  fetch(`${apiUrl}/${id}/deactivate`, {
    method: 'PUT',
    headers: headers.jsonHeader()
  });
