import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import Upload from './components/upload/Upload';

// React drop-zone sets the borders as a style instead of class.
// Once we add any className to the component, it gets completely overwritten
// so we had to bring it in here.
import './dropzone.css';

const dropzone = (props) => {
  const captureFile = (acceptedFiles) => {
    props.updateFileInParentState(acceptedFiles[0]);
  };
  return (
    <Dropzone
      className="usafb__dropzone pt-0"
      onDrop={captureFile}
      multiple={false}
    >
      <Upload uploadedFile={props.uploadedFile} />
    </Dropzone>
  );
};

dropzone.propTypes = {
  updateFileInParentState: PropTypes.func.isRequired,
  uploadedFile: PropTypes.any
};

dropzone.defaultProps = {
  uploadedFile: null
};

export default dropzone;
