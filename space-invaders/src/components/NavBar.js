import React, { Component } from 'react';

class NavBar extends Component {
  //
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-dark black">
        <div className="container">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapseEx12" aria-controls="collapseEx2" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand">Space Invaderz</a>
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
              </div>
          </div>
      </nav>
    )
  }
}

export default NavBar
