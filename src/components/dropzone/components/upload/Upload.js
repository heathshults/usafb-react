import React from 'react';
import PropTypes from 'prop-types';

import './upload.css';

const upload = props => (
  <div id="dnd-content-1" className="dz-clickable dz-message needsclick dnd-c1 fade show usafb__dropzone-upload">
    <p className="dz-clickable dz-message needsclick">
      <i className="fa fa-cloud-upload display-4 text-secondary" aria-hidden="true" />
    </p>
    {props.uploadedFile ?
      <p className="dz-clickable dz-message">{props.uploadedFile.name}</p> :
      <p className="dz-clickable dz-message needsclick">Drop files here to upload or
        <span style={{ color: '#09254a' }}>choose a file</span>
      </p>
    }
  </div>
);

upload.propTypes = {
  uploadedFile: PropTypes.any
};

upload.defaultProps = {
  uploadedFile: null
};

export default upload;
