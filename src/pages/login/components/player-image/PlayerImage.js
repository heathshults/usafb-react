import React from 'react';

import image from 'images/bg/bg-sign-in-player-bg-01.png';
import './player-image.css';

const playerImage = () => (
  <div className="col-8 h-100 pt-0 pb-0">
    <div className="login__player h-100" style={{ backgroundImage: `url(${image})` }} />
  </div>
);

export default playerImage;
