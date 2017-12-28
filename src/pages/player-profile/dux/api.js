import * as headers from 'services/api/headers';

export default data =>
  fetch(`${process.env.REACT_APP_API_URL}/players/${data.player.id}`, {
    method: 'GET',
    headers: headers.authorizedHeader()
  });
