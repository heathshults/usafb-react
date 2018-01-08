import React, { Component } from 'react';

export default class dashboard extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <section id="main-content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <iframe
                title="periscope"
                id="statsFrame"
                src="https://app.periscopedata.com/shared/b20d184b-8851-4ce0-86fd-d4381b9deadb?embed=true"
                width="100%"
                height="2000"
                frameBorder="0"
                className="if-height"
                scroll="no"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
