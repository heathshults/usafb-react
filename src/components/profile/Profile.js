import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Profile extends Component {
  static get contextTypes() {
    return {
      history: PropTypes.object,
      location: PropTypes.object,
      router: PropTypes.object
    };
  }

  constructor(props, context) {
    super(props, context);

    this.state = {

    };
  }

  componentWillMount() {

  }

  render() {
    return (
      <section id="main-content" className="container-fluid container-flexi-fluid section-main-content">
        <div className="row align-items-stretch">
          <div className="col-12">
            <div className="container container-flexi h-100">
              <div className="row card-theme-red align-items-stretch h-100">
                <div className="col-3 mr-3 h-100 bg-clear-white player-info">
                  <div className="card-red-header-special">
                    <i id="editIcon" className="fa fa-edit float-right mt-1" ariaHidden="true" />
                    PLAYER <strong>INFORMATION</strong>
                  </div>

                  <div className="card-red player-info card-red-mspacing-top">
                    <div className="card-red-body">
                      <p>
                        <img src="./content/users/avatar/user-01.jpg" alt="@HeathShults" className="user-avatar-red-md" />
                      </p>
                      <p className="theme-red-title">Dell Cumberledge</p>
                      <p>Male - 11 years - 2008 - 7th Grade
                        <br /> Harris Middle School - CO 2028
                        <br /> Other Sports: Soccer
                        <div className="theme-red-padded-line">
                          <div className="theme-red-badge">
                            <strong>Player ID: HVEU9D7</strong>
                          </div>
                        </div>
                        Position: Line Backer
                        <br /> Experience: 2017-2018</p>
                    </div>
                  </div>

                  <div className="card-red card-red-mspacing-top">
                    <div className="card-red-header">
                      <i id="editIcon" className="fa fa-edit float-right mt-1" aria-hidden="true" /> Team/
                      <strong>Organization</strong>
                    </div>
                    <div className="card-red-body">
                      <div className="theme-red-padded-line">
                        <div className="theme-red-badge">LEAGUE: XXXZZSS</div>
                      </div>

                      <p className="pl-3">
                        Dallas Cowboys
                        <br /> Panthers Flag Football
                      </p>
                      <p className="pl-3 font-85">
                        Texas, USA
                        <br />
                        <span>School:</span> Brandon&#39;s School of Rock
                        <br />
                        <span>District:</span> North East Dallas
                      </p>
                    </div>
                  </div>
                  <div className="card-red card-red-mspacing-top">
                    <div className="card-red-header">
                      <i id="editIcon" className="fa fa-edit float-right mt-1" aria-hidden="true" /> Parent/
                      <strong>Guardian</strong>
                    </div>
                    <div className="card-red-body">
                      <p>
                        <a className="card-red-link-inverted" data-toggle="collapse" href="#collapseInfo1" aria-expanded="false" aria-controls="collapseExample">Parent: George Doe
                          <i className="fa fa-chevron-down font-75 mt-2 float-right" />
                        </a>
                      </p>
                      <div className="collapse indent" id="collapseInfo1">
                        <p>
                          <span>Mobile:</span> 333-333-3333
                          <br />
                          <span>Home:</span> 333-333-3333
                          <br />
                          <span>Work:</span> 333-333-3333
                          <br />
                          <span>Email:</span>
                          <a href="tel:333-333-3333" className="card-red-link">1234@gmail.com></a>
                        </p>
                      </div>
                      <p>
                        <a className="card-red-link-inverted" data-toggle="collapse" href="#collapseInfo2" aria-expanded="false" aria-controls="collapseExample">Parent: Sally Doe
                          <i className="fa fa-chevron-down font-75 offset-top--4 ml-2 float-right" />
                        </a>
                      </p>
                      <div className="collapse indent" id="collapseInfo2">
                        <p>
                          <span>Mobile:</span> 333-333-3333
                          <br />
                          <span>Home:</span> 333-333-3333
                          <br />
                          <span>Work:</span> 333-333-3333
                          <br />
                          <span>Email:</span>
                          <a href="mailto:1234@gmail.com" className="card-red-link">1234@gmail.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col h-100 bg-clear-white player-info red-theme whiteTools-wrapper">
                  <div className="card-red-header-special">
                    <i id="editIcon" className="fa fa-edit float-right mt-1" aria-hidden="true" /> PLAYING
                    <strong>EXPERIENCE</strong>
                  </div>

                  <div className="card-red player-info card-red-mspacing-top">

                    <div className="red-theme-title-2-container">
                      <span className="red-theme-title-2">CURRENT SEASON</span>
                    </div>
                    <div className="card-red">
                      <div className="card-red-body">
                        <h4 className="mb-4">STEELERS
                          <small className="ml-2">(Freeman)</small>
                        </h4>
                        <div className="tats-wrapper">
                          <div className="row text-center mt-2">
                            <div className="col-3 current-stats">
                              <div className="stat-title divider-br">WIDE RECEIVER</div>
                            </div>
                            <div className="col-3 current-stats">
                              <div className="stat-title divider-br">
                                <div className="badge-grade ar-1by1"> 7th
                                  <br />
                                  <span className="font-50">GRADE</span>
                                </div> 11-player tackle</div>
                            </div>
                            <div className="col-3 current-stats">
                              <div className="stat-title divider-br">BRANDON ATHLETICS</div>
                            </div>
                            <div className="col-3 current-stats">
                              <div className="stat-title ">FALL 2017</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="red-theme-title-2-container">
                      <span className="red-theme-title-2 ">PAST SEASONS</span>
                    </div>

                    <div className="card-red">
                      <div className="card-red-body">
                        <div className="stats-container">
                          <h5 className="title-3">STEELERS
                            <small className="ml-2">(Freeman)</small>
                          </h5>
                          <div className="stats-wrapper">
                            <div className="row text-center mt-2">
                              <div className="col-3 current-stats">
                                <div className="stat-title divider-br">WIDE RECEIVER</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title  divider-br">
                                  <div className="badge-grade ar-1by1">6th
                                    <br />
                                    <span className="font-50">GRADE</span>
                                  </div> 11-player tackle</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title  divider-br">BRANDON ATHLETICS</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title">FALL 2016</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="stats-container">
                          <h5 className="title-3">STEELERS
                            <small className="ml-2">(Freeman)</small>
                          </h5>
                          <div className="stats-wrapper">
                            <div className="row text-center mt-2">
                              <div className="col-3 current-stats">
                                <div className="stat-title divider-br">RUNNING BACK</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title  divider-br">
                                  <div className="badge-grade ar-1by1">5th
                                    <br />
                                    <span className="font-50">GRADE</span>
                                  </div> 11-player tackle</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title  divider-br">TIGER SPORTS CLUB</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title">FALL 2015</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="stats-container">
                          <h5 className="title-3">STEELERS
                            <small className="ml-2">(Freeman)</small>
                          </h5>
                          <div className="stats-wrapper">
                            <div className="row text-center mt-2">
                              <div className="col-3 current-stats">
                                <div className="stat-title divider-br">RUNNING BACK</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title divider-br">
                                  <div className="badge-grade ar-1by1">4th
                                    <br />
                                    <span className="font-50">GRADE</span>
                                  </div> 7on7</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title  divider-br">TIGER SPORTS CLUB</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title">FALL 2014</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="stats-container">
                          <h5 className="title-3">STEELERS
                            <small className="ml-2">(Freeman)</small>
                          </h5>
                          <div className="stats-wrapper">
                            <div className="row text-center mt-2">
                              <div className="col-3 current-stats">
                                <div className="stat-title  divider-br">WIDE RECEIVER</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title">
                                  <div className="badge-grade ar-1by1">3rd
                                    <br />
                                    <span className="font-50">GRADE</span>
                                  </div> 7on7</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title  divider-br">TIGER SPORTS CLUB</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title ">FALL 2013</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="stats-container">
                          <h5 className="title-3">STEELERS
                            <small className="ml-2">(Freeman)</small>
                          </h5>
                          <div className="stats-wrapper">
                            <div className="row text-center mt-2">
                              <div className="col-3 current-stats">
                                <div className="stat-title  divider-br">TIGHT END</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title divider-br">
                                  <div className="badge-grade ar-1by1">2nd
                                    <br />
                                    <span className="font-50">GRADE</span>
                                  </div> Youth Flag</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title  divider-br">TIGER SPORTS CLUB</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title ">FALL 2012</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="stats-container">
                          <h5 className="title-3">STEELERS
                            <small className="ml-2">(Freeman)</small>
                          </h5>
                          <div className="stats-wrapper">
                            <div className="row text-center mt-2">
                              <div className="col-3 current-stats">
                                <div className="stat-title  divider-br">SPECIAL TEAMS</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title">
                                  <div className="badge-grade ar-1by1">1st
                                    <br />
                                    <span className="font-50">GRADE</span>
                                  </div> Youth Flag</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title  divider-br">TIGER SPORTS CLUB</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title">FALL 2011</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="stats-container">
                          <h5 className="title-3">STEELERS
                            <small className="ml-2">(Freeman)</small>
                          </h5>
                          <div className="stats-wrapper">
                            <div className="row text-center mt-2">
                              <div className="col-3 current-stats">
                                <div className="stat-title  divider-br">BENCH WARMERV</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title  divider-br">
                                  <small>Pre</small> Youth Flag</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title  divider-br">ATHLETES CORNER</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title">FALL 2010</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Profile);
