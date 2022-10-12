import React from 'react';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">VenU</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/userprofile">Username</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default Header;
