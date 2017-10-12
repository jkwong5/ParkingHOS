import React, { Component } from 'react';

//all these files components coming from ./src/index. 'mbdreact' is an alias for that path per webpack.config.js
import { Button, Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, NavLink } from 'mdbreact';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="flyout">
        <Navbar color="black" dark expand="md">
          <NavbarBrand href="/">Space Invaderz</NavbarBrand>
          <NavbarToggler />
          <div className="collapse navbar-collapse" id="reactNavbar">

            <NavbarNav className="ml-auto">
              <NavItem>
                <NavLink href="/javascript/modal">Login/Register</NavLink>
              </NavItem>
            </NavbarNav>

          </div>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
