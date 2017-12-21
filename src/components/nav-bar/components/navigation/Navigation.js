import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.css';

const navigation = () => (
  <ul className="d-flex nav-bar__navigation mr-auto mt-2 mt-lg-0 ml-auto">
    <li>
      <Link className="nav-bar__link" to="/">Home</Link>
    </li>
    <span className="nav-bar__separator" />
    <li>
      <Link className="nav-bar__link" to="/players">Players</Link>
    </li>
    <span className="nav-bar__separator" />
    <li>
      <Link className="nav-bar__link" to="/coaches">Coaches</Link>
    </li>
    <span className="nav-bar__separator" />
    <li>
      <Link className="nav-bar__link" to="/dashboard">Dashboard</Link>
    </li>
  </ul>
);

export default navigation;
