import * as headers from 'services/api/headers';

const apiURL = `${process.env.REACT_APP_API_URL}/users`;

export default id =>
  fetch(`${apiURL}/${id}`, {
    method: 'GET',
    headers: headers.authorizedHeader()
  });


export const saveUser = data =>
  fetch(`${apiURL}/${data.id}`, {
    method: 'PUT',
    headers: headers.jsonHeader(),
    body: JSON.stringify(data)
  });

export const getMyInfo = () =>
  fetch(`${process.env.REACT_APP_API_URL}/user`, {
    method: 'GET',
    headers: headers.authorizedHeader()
  });
