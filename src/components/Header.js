import React from 'react';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './SearchBar.js';



class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">VenU</Navbar.Brand>

            <SearchBar handleFormSubmit={this.props.handleFormSubmit} handleFormChange={this.props.handleFormChange} searchQuery={this.props.searchQuery} redirectHandler={this.props.redirectHandler}/>

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
