import React from 'react';

import './upload.css';

const upload = () => (
  <div id="dnd-content-1" className="dz-clickable dz-message needsclick dnd-c1 fade show usafb__dropzone-upload">
    <p className="dz-clickable dz-message needsclick">
      <i className="fa fa-cloud-upload display-4 text-secondary" aria-hidden="true" />
    </p>
    <p className="dz-clickable dz-message needsclick">Drop files here to upload or
    <span style={{ color: '#09254a' }}>choose a file</span>
    </p>
  </div>
);

export default upload;
