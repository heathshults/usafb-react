import React from 'react';

const navigation = () => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a>
          Home
        </a>
      </li>
      <li className="breadcrumb-item">
        <a>
          Library
        </a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        Data
      </li>
    </ol>
  </nav>
);

export default navigation;
