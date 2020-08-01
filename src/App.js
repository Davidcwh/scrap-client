import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";

import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect bg='dark' variant='dark'>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>
              <NavLink to='/signup' className='navbarItems' activeStyle={{ color:'black' }}>Signup</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/login' className='navbarItems' activeStyle={{ color:'black' }}>Login</NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;