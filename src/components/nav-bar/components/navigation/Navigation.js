import React from 'react';

import './navigation.css';

const navigation = () => (
  <ul className="d-flex nav-bar__navigation mr-auto mt-2 mt-lg-0 ml-auto">
    <li>
      <a className="nav-bar__link" href="./dashboard.html">Home</a>
    </li>
    <span className="nav-bar__separator" />
    <li>
      <a className="nav-bar__link active" href="./players-list.html">Players</a>
    </li>
    <span className="nav-bar__separator" />
    <li>
      <a className="nav-bar__link" href="./coaches-list.html">Coaches</a>
    </li>
    <span className="nav-bar__separator" />
    <li>
      <a className="nav-bar__link" href="./dashboard01.html">Dashboard</a>
    </li>
  </ul>
);

export default navigation;
