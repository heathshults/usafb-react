import React from 'react';

const headerMessage = () => (
  <div className="col-4 alertPane">
    <div id="mbx" className="alert alert-success alert-dismissible fade" role="alert">
      <button id="alert-close" type="button" className="close">
        <span className="">Dismiss</span>
      </button>
      <label id="mbxLbl" className="mt-2" />
    </div>
  </div>
);

export default headerMessage;
