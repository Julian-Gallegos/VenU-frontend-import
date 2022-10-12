import React from 'react';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



class Footer extends React.Component {
  render() {
    return (
      <>

        <Navbar bg="dark" variant="dark" style={{}}>
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/aboutteam">AboutTeam</Nav.Link>
              <Nav.Link href="https://github.com/orgs/VenU-301/repositories" target="_blank">GitHub</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

      </>
    )
  }
}

export default Footer;
