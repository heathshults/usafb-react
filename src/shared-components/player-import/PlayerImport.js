import React, { Component } from 'react';

export default class PlayerImport extends Component {
  componentDidMount() {
    $('#userSearch').keypress(function () {
      $('.search input[type="text"]').val($(this).val());
    });

    // upload the file (simulate)
    $('#btn-import').click(function () {
      if (('#dnd-c1').length) {
        $('#importer').modal('toggle')
      } else {
        $('#dropzone').html(backtothefuture)
        $('#importer').modal('toggle')
      }
    })
    // Show the progress
    $('#btn-upload').click(function () {
      var progressbar = "<div style='margin-left:auto; margin-right: auto; width: 90%;'><div class='prog-bar'>" +
        "<div class='progress-bar bg-info progress-auto-grow' role='progressbar' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'></div></div>" +
        "<div class='text-center' style='margin-top: -10px;'><div class='countPercentage'><span>0</span>%</div></div></div>"
      var mbx =
        "<div id='mbx' class='alert alert-success alert-dismissible fade mb-2 text-center' style=' width: 90%; margin-top: 30px; margin-left:auto; margin-right: auto;' role='alert'>" +
        "<span id='mbxLbl' class='mt-2'>Got it! Please review your file below and click Upload</span></div>"

      $('#dropzone').html(mbx + progressbar)
      var display = $('.countPercentage > span');
      var currentValue = parseInt(display.text());
      var nextValue = 100;

      var diff = nextValue - currentValue;
      var step = (0 < diff ? 1 : -1);

      for (var i = 0; i < Math.abs(diff); ++i) {
        setTimeout(function () {
          currentValue += step
          display.text(currentValue);
        }, 15 * i)
      }
      setTimeout(function () {
        $('#mbx').addClass('show')
        $('#btn-cancel').html('Close')
      }, 1500);
      $('#btn-upload').attr('disabled', 'disabled')
    })
    $('#alert-close').click(function () {
      $('#mbx').removeClass('show')
    })
    // cloase the modal
    $('#btn-cancel').click(function () {
      $('#importer').modal('toggle')
      $('#dropzone').removeClass('dz-started')
      $('#dropzone').html(backtothefuture)
    })
  }

  render() {
    // DnD Import functions
    let backtothefuture = "<div id='dnd-c1' class='dz-clickable dz-message needsclick dnd-c1 fade show'> " +
      "<p class='dz-clickable dz-message needsclick'><i class='fa fa-cloud-upload display-4 text-secondary' aria-hidden='true'></i></p>" +
      "<p class='dz-clickable dz-message needsclick'>Drop files here to upload or <span style='color:#09254a;'>choose a file</span></p></div>"

    return (
      <div>
        <a href="javascript:void(0);" id="btn-import" className="btn btn-primary-02" ataToggle="modal" ataTarget="#importer">
          <i className="fa fa-cloud-upload mr-1" ariaHidden="true"></i> IMPORT</a>
        <div className="modal fade" id="importer" tabIndex="-1" role="dialog" ariaLabelledby="#modal-title-l" ariaHidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h3 className="modal-title mr-auto ml-auto" id="modal-title-l">
                  <i className="fa fa-file text-yellow mr-2" ariaHidden="true"></i> File Upload</h3>
                <button type="button" className="close" dataDismiss="modal" ariaLabel="Close">
                  <span ariaHidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 text-center dnd-div p-0">
                      <p>Files must be uploaded in CSV format.</p>
                      <form action="uploadFiles.php" className="dropzone needsclick dz-clickable pt-0" id="dropzone">
                        <div id="dnd-content-1" className="dz-clickable dz-message needsclick dnd-c1 fade show">
                          <p className="dz-clickable dz-message needsclick">
                            <i className="fa fa-cloud-upload display-4 text-secondary" ariaHidden="true"></i>
                          </p>
                          <p className="dz-clickable dz-message needsclick">Drop files here to upload or
                            <span style="color:#09254a;">choose a file</span>
                          </p>
                        </div>
                        <div id="fileUpload" className="fallback ">
                          <input name="file" type="file" multiple />
                        </div>
                      </form>
                      <p className='mt-4'>
                        <button id='btn-cancel' className='btn btn-red mr-2'>CANCEL</button>
                        <button id='btn-upload' className='btn btn-primary-02 btnUpload' disabled>UPLOAD</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}