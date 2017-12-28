export const jsonHeader = () => new Headers({
  'Content-Type': 'application/json'
});

export const authorizedHeader = () => new Headers({
  Authorization: `Bearer ${window.localStorage.id_token}`
});
