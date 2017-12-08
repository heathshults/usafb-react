const login = data =>
  fetch(`${process.env.REACT_APP_API_URL}/login`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      email: data.email,
      password: data.password
    })
  });

export default login;
