import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import Upload from './components/upload/Upload';

import './dropzone.css';

const dropzone = props => (
  <Dropzone
    className="usafb__dropzone pt-0"
    children={Upload}
  />
);

dropzone.propTypes = {

};

export default dropzone;
