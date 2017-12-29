export const jsonHeader = () => new Headers({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${window.localStorage.id_token}`
});

export const authorizedHeader = () => new Headers({
  Authorization: `Bearer ${window.localStorage.id_token}`
});
