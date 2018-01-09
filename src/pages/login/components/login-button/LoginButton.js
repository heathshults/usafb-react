import React from 'react';

import './login-button.css';

const loginButton = () => (
  <div className="row pt-0 pb-0">
    <div className="col-md-12 pt-0 pb- text-center">
      <button
        type="submit"
        className="btn btn-primary login__btn w-75 mr-auto ml-auto"
      >
        Login
      </button>
    </div>
  </div>
);

export default loginButton;
