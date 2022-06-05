import React from 'react'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
         <ul class="navbar-nav me-auto">

          <Nav.Item >
            <Nav.Link as={Link} to="/">
              Admin Dashboard
            </Nav.Link>
          </Nav.Item>
         </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex">
              <Nav.Item>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/Signup">
                  SignUp
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/Signin">
                  Signin
                </Nav.Link>
              </Nav.Item>
            </div>
          </div>
        </div>
      </nav>
      
    </>
  );
}

export default Header