import React from 'react';
// import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import importCsv from 'utils/import';

import Upload from './components/upload/Upload';

// React drop-zone sets the borders as a style instead of class.
// Once we add any className to the component, it gets completely overwritten
// so we had to bring it in here.
import './dropzone.css';

const dropzone = () => {
  const captureFile = (acceptedFiles) => {
    importCsv(acceptedFiles[0])
      .then(data => data)
      .catch(err => err);
  };
  return (
    <Dropzone
      className="usafb__dropzone pt-0"
      children={Upload} // eslint-disable-line
      onDrop={captureFile}
      multiple={false}
    />
  );
};

dropzone.propTypes = {

};

export default dropzone;
