import React, { useState, useEffect  } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";

import "./App.css";
import Routes from "./Routes";
import { onError } from "./libs/errorLib";

function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        onError(e);
      }
    }
  
    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();
  
    userHasAuthenticated(false);
    history.push("/login");
  }

  return (
    !isAuthenticating &&
    <div className="App container">
      <Navbar fluid collapseOnSelect bg='dark' variant='dark'>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Scrap</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {
              isAuthenticated
              ? <NavItem onClick={handleLogout}>Logout</NavItem>
              : <>
              <NavItem>
                <NavLink to='/signup' className='navbarItems' activeStyle={{ color:'black' }}>Signup</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/login' className='navbarItems' activeStyle={{ color:'black' }}>Login</NavLink>
              </NavItem>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;