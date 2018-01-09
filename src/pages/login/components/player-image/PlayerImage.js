import React from 'react';

import image from 'images/bg/bg-sign-in-player-bg-01.png';
import './player-image.css';

const playerImage = () => (
  <div className="col-8">
    <div className="login__player" style={{ backgroundImage: `url(${image})` }} />
  </div>
);

export default playerImage;
