export default (email, password) =>
  fetch(process.env.REACT_API_URL, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    })
  });
