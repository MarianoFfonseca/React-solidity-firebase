import React from 'react'
import {Navbar, Container, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function NavbarComponent() {
  return (
    <div>  <Navbar bg="dark" variant="dark">
    <Container>
  
      <Navbar.Brand bg="dark" variant="dark">
        {/* <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '} */}
      React-solidity-firebase
      </Navbar.Brand>
  
    </Container>
  </Navbar></div>
  )
}

export default NavbarComponent