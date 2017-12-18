import sagaHelper from 'redux-saga-testing';
import { loginSaga } from '../dux/saga';
import { LOGIN } from '../dux/actions';

const loginPayload = {
  data: {
    email: 'usafbsuperuser@gmail.com',
    password: 'password123'
  }
};
const loginAction = () => ({ type: LOGIN, payload: loginPayload })

// TODO complete this test after login API endpoint is completed
describe('[LOGIN PAGE] sagas test', () => {
  const it = sagaHelper(loginSaga(loginAction));
  let token;

  it('Login API call', (response) => {
    // expect(response.ok).toBe(true);
  });

  // it('Get token data from response', (tokenData) => {
  //   token = tokenData.access_token;

  //   expect(tokenData).expect.objectContaining({
  //     access_token: expect.any(String)
  //   })
  // });

  // it('Call login success', () => {
  //   expect(window.localStorage.getItem('access_token').toBe(token));
  // });

  // it('Get user info saga', (response) => {
  //   expect(response.call);
  // });
});