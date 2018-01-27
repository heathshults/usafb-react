import React from 'react';

import './login-button.css';

const loginButton = () => (
  <div className="row pt-0 pb-0">
    <div className="col-md-12 pt-1 pb- text-center bss">
      <button
        type="submit"
        className="btn btn-blue-grad-pill w-50 mt-2 mx-auto login__btn"
      >
        Sign In
      </button>
    </div>
  </div>
);

export default loginButton;
