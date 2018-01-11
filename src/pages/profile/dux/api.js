import * as headers from 'services/api/headers';

export default id =>
  fetch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
    method: 'GET',
    headers: headers.authorizedHeader()
  });


export const saveUser = data =>
  fetch(`${process.env.REACT_APP_API_URL}/users/${data.id}`, {
    method: 'PUT',
    headers: headers.jsonHeader(),
    body: JSON.stringify(data)
  });
