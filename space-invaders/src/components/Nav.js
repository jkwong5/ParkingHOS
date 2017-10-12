
import React, {Component} from 'react';

class Nav extends Component {
  render () {
    return (
      <nav className="navbar navbar-toggleable-md navbar-dark black">
          <div className="container">
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapseEx12" aria-controls="collapseEx2" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="#">Space Invaderz</a>
              <div className="collapse navbar-collapse" id="collapseEx12">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                          <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item" id="unauthedNav">
                       {/* % include "./auth.njk" %
                       */}
                      </li>
                      <li className="nav-item btn-group" id="authedNav">
                        {/*}% include "./auth.njk" %*/}
                      </li>
                  </ul>
                      <a className="nav-link waves-effect waves-light fa fa-search prefix" id="search" data-toggle="modal" data-target="#modalRRForm"></a>
              </div>
          </div>
      </nav>

      <div className="modal fade" id="modalLRForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog cascading-modal" role="document">
              <div className="modal-content">
                  <div className="modal-c-tabs">
                      <ul className="nav nav-tabs tabs-2 light-blue darken-3" role="tablist">
                          <li className="nav-item">
                              <a className="nav-link active" data-toggle="tab" href="#panel7" role="tab"><i className="fa fa-user mr-1"></i> Login</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" data-toggle="tab" href="#panel8" role="tab"><i className="fa fa-user-plus mr-1"></i> Register</a>
                          </li>
                      </ul>

                      {/*Login modal */}
                      <div className="tab-content">
                          <div className="tab-pane fade in show active" id="panel7" role="tabpanel">
                              <div className="modal-body mb-1">
                                <form id="loginForm">
                                  <div className="md-form form-sm">
                                      <i className="fa fa-envelope prefix"></i>
                                      <input type="text" id="loginEmail" className="form-control" required>
                                      <label for="loginEmail">Your email</label>
                                  </div>
                                  <div className="md-form form-sm">
                                      <i className="fa fa-lock prefix"></i>
                                      <input type="password" id="loginPassword" className="form-control" required>
                                      <label for="loginPassword">Your password</label>
                                  </div>
                                  <div className="text-center mt-2">
                                      <button type="submit" className="btn btn-info" id="loginBtn">Log in <i className="fa fa-sign-in ml-1"></i></button>
                                  </div>
                                </form>
                              </div>
                              <div className="modal-footer display-footer">
                                  <div className="options text-center text-md-right mt-1">
                                      <p className="darken-3" role="tablist"><a href="#panel12" className="blue-text" data-toggle="tab" role="tab">Forgot Password?</a></p>
                                      {/* <p>Forgot <a href="#" className="blue-text">Password?</a></p> */}
                                  </div>
                                  <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close <i className="fa fa-times-circle ml-1"></i></button>
                              </div>
                          </div>

                          {/* Forgot Modal */}
                              <div className="tab-pane fade" id="panel12" role="tabpanel">
                                <form>
                                  <div className="modal-body">
                                    <i className="fa fa-envelope prefix"></i>
                                        <label for="email">Enter your email to reset password.</label>
                                        <input type="email" name="email" id="email" className="form-control" required>
                                        <input type="submit" className="btn btn-info" name="submit" id="forgotPW" value="Send">
                                  </div>
                                </form>
                                  <div className="modal-footer display-footer">
                                      <button type="button" className="btn btn-info" data-dismiss="modal">Close <i className="fa fa-times-circle ml-1"></i></button>
                                  </div>
                              </div>

                          {/* Registration Modal */}
                          <div className="tab-pane fade" id="panel8" role="tabpanel">
                            <form id = "userRegistration">
                              <div className="modal-body">
                                  <div className="md-form form-sm">
                                      <i className="fa fa-envelope prefix"></i>
                                      <input type="text" id="regEmail" className="form-control" required>
                                      <label for="regEmail">Your email</label>
                                  </div>
                                  <div className="md-form form-sm">
                                      <i className="fa fa-lock prefix"></i>
                                      <input type="password" id="regPassword" className="form-control" required>
                                      <label for="form25">Your password</label>
                                  </div>
                                  <div className="md-form form-sm">
                                      <i className="fa fa-lock prefix"></i>
                                      <input type="password" id="regPasswordRepeat" className="form-control" required>
                                      <label for="regPasswordRepeat">Repeat password</label>
                                  </div>
                                  <div className="text-center form-sm mt-2">
                                      <button className="btn btn-info" type="submit" id="signUp">Sign up <i className="fa fa-sign-in ml-1"></i></button>
                                  </div>
                              </div>
                            </form>
                              <div className="modal-footer">
                                  <div className="options text-right">
                                      <p className="pt-1 nav-tabs darken-3" role="tablist">Already have an account? <a href="#panel7" className="blue-text" data-toggle="tab" role="tab">Log In</a></p>
                                  </div>
                                  <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close <i className="fa fa-times-circle ml-1"></i></button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="modal fade" id="modalRRForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog cascading-modal" role="document">
              <div className="modal-content">
                  <div className="modal-c-tabs">
                      <ul className="nav nav-tabs tabs-2 light-blue darken-3" role="tablist">
                          <li className="nav-item">
                              <a className="nav-link active" data-toggle="tab" href="#panel9" role="tab"><i className="fa fa-map mr-1"></i> State</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" data-toggle="tab" href="#panel10" role="tab"><i className="fa fa-drivers-license mr-1"></i> Plate</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" data-toggle="tab" href="#panel11" role="tab"><i className="fa fa-automobile mr-1"></i> Model</a>
                          </li>
                      </ul>
                      <div className="tab-content">
                          <div className="tab-pane fade in show active" id="panel9" role="tabpanel">
                              <div className="modal-body mb-1">
                                <i className="fa fa-map-marker prefix"></i>
                                <div className="md-form form-sm">
                                  <select name="state" id="searchState" className="form-control" required>
                                    <option value=""> ---States --- </option>
                                    {/*inlclude states.njk*/}

                                  </select>
                                  </div>
                                  <div className="text-center mt-2">
                                      <button className="btn btn-info" id ="searchStateBtn">Search <i className="fa fa-search ml-1"></i></button>
                                  </div>
                              </div>
                              <div className="modal-footer display-footer">
                                  <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close <i className="fa fa-times-circle ml-1"></i></button>
                              </div>
                          </div>
                          <div className="tab-pane fade" id="panel10" role="tabpanel">
                              <div className="modal-body">
                                <i className="fa fa-drivers-license prefix"></i>
                                  <div className="md-form form-sm">
                                      <input type="text" id="lic_plate_search" className="form-control" required/>
                                      <label for="form19">License Plate</label>
                                  </div>
                                  <div className="text-center mt-2">
                                      <button className="btn btn-info" id="searchPlateBtn">Search <i className="fa fa-search ml-1"></i></button>
                                  </div>
                              <div className="modal-footer">
                                  <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close <i className="fa fa-times-circle ml-1"></i></button>
                              </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="panel11" role="tabpanel">
                            <div className="modal-body">
                              <i className="fa fa-car prefix"></i>
                              <div className="md-form form-sm">
                                <select name="Make" id="makeSearch" className="form-control" required>
                                  <option value=""> ---Make --- </option>
                                  {/* include carmakes.njk */}
                                </select>
                              </div>
                              <i className="fa fa-search-plus prefix"></i>
                              <div className="md-form form-sm">
                                <select name="Model" id="modelSearch" className="form-control" required>
                                  <option value=""> ---Model --- </option>
                                {/* include carmodels.njk */}
                                </select>
                              </div>
                              <div className="text-center mt-2">
                                  <button className="btn btn-info" id="searchModelBtn">Search <i className="fa fa-search ml-1"></i></button>
                              </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close <i className="fa fa-times-circle ml-1"></i></button>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
      </div>
      {/* end block */}

    )
  }
}

export default Nav
