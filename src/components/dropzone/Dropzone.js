import React from 'react';
// import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import Upload from './components/upload/Upload';

// React drop-zone sets the borders as a style instead of class.
// Once we add any className to the component, it gets completely overwritten
// so we had to bring it in here.
import './dropzone.css';

const dropzone = () => (
  <Dropzone
    className="usafb__dropzone pt-0"
    children={Upload} // eslint-disable-line
  />
);

dropzone.propTypes = {

};

export default dropzone;
