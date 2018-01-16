import React from 'react';
import logoImage from 'images/logo/logo-header-horizontal.png';

import './logo.css';

const logo = () => (
  <div className="nav-bar__logo-container">
    <img
      src={logoImage}
      alt="USAFB"
      className="nav-bar__logo"
    />
    <div className="nav-bar__header">
      <h4>
        National Database
      </h4>
    </div>
  </div>
);

export default logo;
