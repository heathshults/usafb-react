import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { GET_PLAYER_PROFILE } from './dux/actions';

class PlayerProfile extends Component {
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

  // {
  //   "data": {
  //     "id": "string",
  //     "id_usafb": "string",
  //     "name_first": "string",
  //     "name_middle": "string",
  //     "name_last": "string",
  //     "dob": "string",
  //     "address": {
  //       "street_1": "string",
  //       "street_2": "string",
  //       "city": "string",
  //       "county": "string",
  //       "state": "string",
  //       "postal_code": "string",
  //       "country_code": "string"
  //     },
  //     "registrations": [
  //       {
  //         "current": true,
  //         "season": "string",
  //         "season_year": 0,
  //         "level": "string",
  //         "level_type": "string",
  //         "organization_name": "string",
  //         "organization_state": "string",
  //         "league_name": "string",
  //         "school_name": "string",
  //         "school_district": "string",
  //         "school_state": "string",
  //         "team_name": "string",
  //         "team_gender": "string",
  //         "created_at_yyyymmdd": "string",
  //         "created_at": "2017-12-26T18:43:05.460Z",
  //         "updated_at": "2017-12-26T18:43:05.460Z"
  //       }
  //     ]
  //   }
  // }

  componentWillMount() {
    const id = this.props.match.params.id; //eslint-disable-line 
    console.log('id', id); // eslint-disable-line
    this.getPlayerProfile({ id });
  }

  getPlayerProfile = (data) => {
    this.props.getPlayerProfile(data);
  }

  render() {
    return (
      <div className="red-theme full-screen-bg-profiles-red">
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
                          <img src="assets/profile/user-01.jpg" alt="@HeathShults" className="user-avatar-red-md" />
                        </p>
                        <p className="theme-red-title">{this.props.playerData.name_first} {this.props.playerData.name_last}</p>
                        <p>{this.props.playerData.gender} - {this.props.playerData.years_experience} years - {this.props.playerData.graduation_year} - {this.props.playerData.grade} Grade
                          <br /> Harris Middle School - CO {this.props.playerData.graduation_year}
                          <br /> Other Sports: {
                            this.props.playerData.sports && this.props.playerData.sports.map(sport => `${sport} `)
                          }
                          <div className="theme-red-padded-line">
                            <div className="theme-red-badge">
                              <strong>Player ID: {this.props.playerData.id_external}</strong>
                            </div>
                          </div>
                          Position: Line Backer
                          <br /> Experience: 2017-2018</p>
                      </div>
                    </div>

                    <div className="card-red card-red-mspacing-top">
                      <div className="card-red-header">
                        <i id="editIcon" className="fa fa-edit float-right mt-1" ariaHidden="true" /> Team/
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
                    {
                      /* eslint-disable */
                    }
                    <div className="card-red card-red-mspacing-top">
                      {this.props.playerData.guardians && this.props.playerData.guardians.map(guardian => (
                        <span key={guardian._id}>
                          <div className="card-red-header">
                            <i id="editIcon" className="fa fa-edit float-right mt-1" ariaHidden="true" /> Parent/
                            <strong>Guardian</strong>
                          </div>
                          <div className="card-red-body">
                            <p>
                              <a className="card-red-link-inverted" data-toggle="collapse" href="#collapseInfo1" aria-expanded="false" aria-controls="collapseExample">Parent: {guardian.name_first} {guardian.name_last}
                                <i className="fa fa-chevron-down font-75 mt-2 float-right" />
                              </a>
                            </p>
                            <div className="collapse indent" id="collapseInfo1">
                              <p>
                                <span>Mobile:</span> {guardian.phone_mobile}
                                <br />
                                <span>Home:</span> {guardian.phone_home}
                                <br />
                                <span>Work:</span> {guardian.phone_work}
                                <br />
                                <span>Email:</span>
                                <a href="tel:333-333-3333" className="card-red-link">{guardian.email || 'N/A'}</a>
                              </p>
                            </div>
                          </div>
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="col h-100 bg-clear-white player-info red-theme whiteTools-wrapper">
                    <div className="card-red-header-special">
                      <i id="editIcon" className="fa fa-edit float-right mt-1" ariaHidden="true" /> PLAYING
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
        </section >
      </div >
    );
  }
}

PlayerProfile.propTypes = {
  getPlayerProfile: PropTypes.func.isRequired,
  playerData: PropTypes.shape({
    years_experience: PropTypes.number.isRequired,
    name_first: PropTypes.string.isRequired,
    name_last: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    graduation_year: PropTypes.number.isRequired,
    grade: PropTypes.number.isRequired,
    sports: PropTypes.array,
    guardians: PropTypes.array,
    id_external: PropTypes.number.isRequired
  }).isRequired
};

PlayerProfile.defaultProps = {
  playerData: {
    sports: [],
    guardians: []
  }
};

const mapStateToProps = ({ playerProfileReducer }) => {
  return { playerData: playerProfileReducer.playerData }
};
const mapDispatchToProps = dispatch => ({
  getPlayerProfile: player => dispatch({ type: GET_PLAYER_PROFILE, data: { player } })
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfile);
