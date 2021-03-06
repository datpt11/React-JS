import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <p>List Based</p>
          <Nav>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">Disabled Link</NavLink>
            </NavItem>
          </Nav>
          <hr />
          <p>Link Based</p>
          <Nav>
            <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
          </Nav>
        </div>
      </div>
    );
  }

}

export default App;
