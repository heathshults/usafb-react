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

  static get defaultProps() {
    return {
      location: {},
    };
  }

  static get propTypes() {
    return {
      location: PropTypes.object.isRequired
    };
  }

  constructor(props, context) {
    super(props, context);

    this.state = {

    };
  }

  componentWillMount() {

  }

  //   <!-- <div class="row badge-group">
  //   <div class="col-3 p-0">
  //     <div class="badge-01 badge-darkgreen">M</div>
  //   </div>
  //   <div class="col-3 p-0">
  //     <div class="badge-01 badge-darkgreen">11</div>
  //   </div>
  //   <div class="col-3 p-0">
  //     <div class="badge-01 badge-darkgreen">2008</div>
  //   </div>
  //   <div class="col-3 p-0">
  //     <div class="badge-01 badge-darkgreen">7TH</div>
  //   </div>
  // </div>
  // <div class="row badge-group text-center">
  //   <div class="col-3 p-0">
  //     <div class="badge-group-labelrow">GENDER</div>
  //   </div>
  //   <div class="col-3 p-0">
  //     <div class="badge-group-labelrow">AGE</div>
  //   </div>
  //   <div class="col-3 p-0">
  //     <div class="badge-group-labelrow">BORN</div>
  //   </div>
  //   <div class="col-3 p-0">
  //     <div class="badge-group-labelrow">GRADE</div>
  //   </div>


  // </div> -->

  render() {
    return (
      <section id="main-content" class="container-fluid container-flexi-fluid section-main-content">
        <div class="row align-items-stretch">
          <div class="col-12">
            <div class="container container-flexi h-100">
              <div class="row card-theme-red align-items-stretch h-100">
                <div class="col-3 mr-3 h-100 bg-clear-white player-info">
                  <div class="card-red-header-special">
                    <i id="editIcon" class="fa fa-edit float-right mt-1" aria-hidden="true"></i>
                    PLAYER <strong>INFORMATION</strong>
                  </div>

                  <div class="card-red player-info card-red-mspacing-top">
                    <div class="card-red-body">
                      <p>
                        <img src="./content/users/avatar/user-01.jpg" alt="@HeathShults" class="user-avatar-red-md" />
                      </p>
                      <p class="theme-red-title">Dell Cumberledge</p>
                      <p>Male - 11 years - 2008 - 7th Grade
                                      <br> Harris Middle School - CO 2028
                                      <br> Other Sports: Soccer
                                      <div class="theme-red-padded-line">
                              <div class="theme-red-badge">
                                <strong>Player ID: HVEU9D7</strong>
                              </div>
                            </div>
                            Position: Line Backer
                                      <br> Experience: 2017-2018</p>
                              </div>
                          </div>

                        <div class="card-red card-red-mspacing-top">
                          <div class="card-red-header">
                            <i id="editIcon" class="fa fa-edit float-right mt-1" aria-hidden="true"></i> Team/
                                  <strong>Organization</strong>
                          </div>
                          <div class="card-red-body">
                            <div class="theme-red-padded-line">
                              <div class="theme-red-badge">LEAGUE: XXXZZSS</div>
                            </div>

                            <p class="pl-3">
                              Dallas Cowboys
                                      <br> Panthers Flag Football
                                  </p>
                              <p class="pl-3 font-85">
                                Texas, USA
                                      <br>
                                  <span>School:</span> Brandon's School of Rock
                                      <br>
                                    <span>District:</span> North East Dallas
                                  </p>
                              </div>
                          </div>
                              <div class="card-red card-red-mspacing-top">
                                <div class="card-red-header">
                                  <i id="editIcon" class="fa fa-edit float-right mt-1" aria-hidden="true"></i> Parent/
                                  <strong>Guardian</strong>
                                </div>
                                <div class="card-red-body">
                                  <p>
                                    <a class="card-red-link-inverted" data-toggle="collapse" href="#collapseInfo1" aria-expanded="false" aria-controls="collapseExample">Parent: George Doe
                                          <i class="fa fa-chevron-down font-75 mt-2 float-right"></i>
                                    </a>
                                  </p>
                                  <div class="collapse indent" id="collapseInfo1">
                                    <p>
                                      <span>Mobile:</span> 333-333-3333
                                          <br>
                                        <span>Home:</span> 333-333-3333
                                          <br>
                                          <span>Work:</span> 333-333-3333
                                          <br>
                                            <span>Email:</span>
                                            <a href="tel:333-333-3333" class="card-red-link">1234@gmail.com></a>
                                      </p>
                                  </div>
                                        <p>
                                          <a class="card-red-link-inverted" data-toggle="collapse" href="#collapseInfo2" aria-expanded="false" aria-controls="collapseExample">Parent: Sally Doe
                                          <i class="fa fa-chevron-down font-75 offset-top--4 ml-2 float-right"></i>
                                          </a>
                                        </p>
                                        <div class="collapse indent" id="collapseInfo2">
                                          <p>
                                            <span>Mobile:</span> 333-333-3333
                                          <br>
                                              <span>Home:</span> 333-333-3333
                                          <br>
                                                <span>Work:</span> 333-333-3333
                                          <br>
                                                  <span>Email:</span>
                                                  <a href="mailto:1234@gmail.com" class="card-red-link">1234@gmail.com</a>
                                      </p>
                                  </div>
                              </div>
                          </div>
                                        </div>
                                        <div class="col h-100 bg-clear-white player-info red-theme whiteTools-wrapper">
                                          <div class="card-red-header-special">
                                            <i id="editIcon" class="fa fa-edit float-right mt-1" aria-hidden="true"></i> PLAYING
                              <strong>EXPERIENCE</strong>
                                          </div>

                                          <div class="card-red player-info card-red-mspacing-top">

                                            <div class="red-theme-title-2-container">
                                              <span class="red-theme-title-2">CURRENT SEASON</span>
                                            </div>
                                            <div class="card-red">
                                              <div class="card-red-body">
                                                <h4 class="mb-4">STEELERS
                                          <small class="ml-2">(Freeman)</small>

                                                </h4>
                                                <div class="tats-wrapper">
                                                  <div class="row text-center mt-2">
                                                    <div class="col-3 current-stats">
                                                      <div class="stat-title divider-br">WIDE RECEIVER</div>
                                                    </div>
                                                    <div class="col-3 current-stats">
                                                      <div class="stat-title divider-br">
                                                        <div class="badge-grade ar-1by1"> 7th
                                                          <br>
                                                            <span class="font-50">GRADE</span>
                                                      </div> 11-player tackle</div>
                                                      </div>
                                                      <div class="col-3 current-stats">
                                                        <div class="stat-title divider-br">BRANDON ATHLETICS</div>
                                                      </div>
                                                      <div class="col-3 current-stats">
                                                        <div class="stat-title ">FALL 2017</div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="red-theme-title-2-container">
                                                <span class="red-theme-title-2 ">PAST SEASONS</span>
                                              </div>

                                              <div class="card-red">
                                                <div class="card-red-body">
                                                  <div class="stats-container">
                                                    <h5 class="title-3">STEELERS
                                              <small class="ml-2">(Freeman)</small>
                                                    </h5>
                                                    <div class="stats-wrapper">
                                                      <div class="row text-center mt-2">
                                                        <div class="col-3 current-stats">
                                                          <div class="stat-title divider-br">WIDE RECEIVER</div>
                                                        </div>
                                                        <div class="col-3 current-stats">
                                                          <div class="stat-title  divider-br">
                                                            <div class="badge-grade ar-1by1">6th
                                                              <br>
                                                                <span class="font-50">GRADE</span>
                                                          </div> 11-player tackle</div>
                                                          </div>
                                                          <div class="col-3 current-stats">
                                                            <div class="stat-title  divider-br">BRANDON ATHLETICS</div>
                                                          </div>
                                                          <div class="col-3 current-stats">
                                                            <div class="stat-title">FALL 2016</div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>

                                                    <div class="stats-container">
                                                      <h5 class="title-3">STEELERS
                                              <small class="ml-2">(Freeman)</small>
                                                      </h5>
                                                      <div class="stats-wrapper">
                                                        <div class="row text-center mt-2">
                                                          <div class="col-3 current-stats">
                                                            <div class="stat-title divider-br">RUNNING BACK</div>
                                                          </div>
                                                          <div class="col-3 current-stats">
                                                            <div class="stat-title  divider-br">
                                                              <div class="badge-grade ar-1by1">5th
                                                              <br>
                                                                  <span class="font-50">GRADE</span>
                                                          </div> 11-player tackle</div>
                                                            </div>
                                                            <div class="col-3 current-stats">
                                                              <div class="stat-title  divider-br">TIGER SPORTS CLUB</div>
                                                            </div>
                                                            <div class="col-3 current-stats">
                                                              <div class="stat-title">FALL 2015</div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>

                                                      <div class="stats-container">
                                                        <h5 class="title-3">STEELERS
                                              <small class="ml-2">(Freeman)</small>
                                                        </h5>
                                                        <div class="stats-wrapper">
                                                          <div class="row text-center mt-2">
                                                            <div class="col-3 current-stats">
                                                              <div class="stat-title divider-br">RUNNING BACK</div>
                                                            </div>
                                                            <div class="col-3 current-stats">
                                                              <div class="stat-title divider-br">
                                                                <div class="badge-grade ar-1by1">4th
                                                              <br>
                                                                    <span class="font-50">GRADE</span>
                                                          </div> 7on7</div>
                                                              </div>
                                                              <div class="col-3 current-stats">
                                                                <div class="stat-title  divider-br">TIGER SPORTS CLUB</div>
                                                              </div>
                                                              <div class="col-3 current-stats">
                                                                <div class="stat-title">FALL 2014</div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>

                                                        <div class="stats-container">
                                                          <h5 class="title-3">STEELERS
                                              <small class="ml-2">(Freeman)</small>
                                                          </h5>
                                                          <div class="stats-wrapper">
                                                            <div class="row text-center mt-2">
                                                              <div class="col-3 current-stats">
                                                                <div class="stat-title  divider-br">WIDE RECEIVER</div>
                                                              </div>
                                                              <div class="col-3 current-stats">
                                                                <div class="stat-title">
                                                                  <div class="badge-grade ar-1by1">3rd
                                                              <br>
                                                                      <span class="font-50">GRADE</span>
                                                          </div> 7on7</div>
                                                                </div>
                                                                <div class="col-3 current-stats">
                                                                  <div class="stat-title  divider-br">TIGER SPORTS CLUB</div>
                                                                </div>
                                                                <div class="col-3 current-stats">
                                                                  <div class="stat-title ">FALL 2013</div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>

                                                          <div class="stats-container">
                                                            <h5 class="title-3">STEELERS
                                              <small class="ml-2">(Freeman)</small>
                                                            </h5>
                                                            <div class="stats-wrapper">
                                                              <div class="row text-center mt-2">
                                                                <div class="col-3 current-stats">
                                                                  <div class="stat-title  divider-br">TIGHT END</div>
                                                                </div>
                                                                <div class="col-3 current-stats">
                                                                  <div class="stat-title divider-br">
                                                                    <div class="badge-grade ar-1by1">2nd
                                                              <br>
                                                                        <span class="font-50">GRADE</span>
                                                          </div> Youth Flag</div>
                                                                  </div>
                                                                  <div class="col-3 current-stats">
                                                                    <div class="stat-title  divider-br">TIGER SPORTS CLUB</div>
                                                                  </div>
                                                                  <div class="col-3 current-stats">
                                                                    <div class="stat-title ">FALL 2012</div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>

                                                            <div class="stats-container">
                                                              <h5 class="title-3">STEELERS
                                              <small class="ml-2">(Freeman)</small>
                                                              </h5>
                                                              <div class="stats-wrapper">
                                                                <div class="row text-center mt-2">
                                                                  <div class="col-3 current-stats">
                                                                    <div class="stat-title  divider-br">SPECIAL TEAMS</div>
                                                                  </div>
                                                                  <div class="col-3 current-stats">
                                                                    <div class="stat-title">
                                                                      <div class="badge-grade ar-1by1">1st
                                                              <br>
                                                                          <span class="font-50">GRADE</span>
                                                          </div> Youth Flag</div>
                                                                    </div>
                                                                    <div class="col-3 current-stats">
                                                                      <div class="stat-title  divider-br">TIGER SPORTS CLUB</div>
                                                                    </div>
                                                                    <div class="col-3 current-stats">
                                                                      <div class="stat-title">FALL 2011</div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>

                                                              <div class="stats-container">
                                                                <h5 class="title-3">STEELERS
                                              <small class="ml-2">(Freeman)</small>
                                                                </h5>
                                                                <div class="stats-wrapper">
                                                                  <div class="row text-center mt-2">
                                                                    <div class="col-3 current-stats">
                                                                      <div class="stat-title  divider-br">BENCH WARMERV</div>
                                                                    </div>
                                                                    <div class="col-3 current-stats">
                                                                      <div class="stat-title  divider-br">
                                                                        <small>Pre</small> Youth Flag</div>
                                                                    </div>
                                                                    <div class="col-3 current-stats">
                                                                      <div class="stat-title  divider-br">ATHLETES CORNER</div>
                                                                    </div>
                                                                    <div class="col-3 current-stats">
                                                                      <div class="stat-title">FALL 2010</div>
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
                                            </section>)
  }
}

const mapUser = (user) => {
  if (user.profile) {
    return user.profile.userId;
  }

  return null;
};

function mapStateToProps({auth}) {
  if (user) {
    return {
                                              user: mapUser(user),
      loginError
    };
  }

  return {user: null };
}

export default connect(mapStateToProps)(Profile);
