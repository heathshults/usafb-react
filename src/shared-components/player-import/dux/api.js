import * as headers from 'services/api/headers';

export const importPlayerList = data =>
  fetch(`${process.env.REACT_APP_API_URL}/import`, {
    method: 'POST',
    headers: headers.postHeader(),
    body: JSON.stringify({
      playerList: data.playerList
    })
  });

export const getUserData = () =>
  fetch(`${process.env.REACT_APP_API_URL}/me`, {
    headers: headers.authorizedHeader()
  });
