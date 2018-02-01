import React from 'react';

// import image from './images/FB-Hero.png';
// import imageShadow from './images/FB-Hero-shadow.png';
import './player-image.css';

const playerImage = () => (
  <div className="col-md-7">
    <div className="login__player-container">
      <div className="login__players-signin"><img src={require('images/bg/players/FB-Hero.svg')} alt="USA Football" className="login__player align-self-end" /></div>
    </div>
  </div>
);

export default playerImage;
