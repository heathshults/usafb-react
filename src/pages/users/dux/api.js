import * as headers from 'services/api/headers';
import queryString from 'query-string';

export default (data) => {
  const queryParams = queryString.stringify(data);
  return fetch(`${process.env.REACT_APP_API_URL}/users?${queryParams}`, {
    headers: headers.authorizedHeader()
  });
};

