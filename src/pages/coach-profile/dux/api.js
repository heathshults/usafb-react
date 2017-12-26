import * as headers from 'services/api/headers';

export default getPlayerProfile = data =>
  fetch(`${process.env.REACT_APP_API_URL}/players/${data.id}`, {
    method: 'GET',
    headers: headers.postHeader()
  });
