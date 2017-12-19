import React from 'react';
import Dropzone from 'components/dropzone/Dropzone';

const importModal = () => (
  <div className="modal fade" id="coach-import-modal" tabIndex="-1" role="dialog" aria-labelledby="#modal-title-l" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header text-center">
          <h3 className="modal-title mr-auto ml-auto" id="modal-title-l">
            <i className="fa fa-file text-yellow mr-2" aria-hidden="true" /> File Upload</h3>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-center dnd-div p-0">
                <p>Files must be uploaded in CSV format.</p>
                <Dropzone />
                <p className="mt-4">
                  <button id="btn-cancel" className="btn btn-red mr-2">CANCEL</button>
                  <button id="btn-upload" className="btn btn-primary-02 btnUpload" disabled>UPLOAD</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default importModal;
