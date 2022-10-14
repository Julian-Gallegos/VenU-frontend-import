import React from 'react';


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './SearchBar.js';
import { withAuth0 } from '@auth0/auth0-react';

import Profile from './Profile.js';



class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" style={{ height: '100px' }}>
          <Container>
            <Navbar.Brand href="#home">VenU</Navbar.Brand>

            {/* <SearchBar handleFormSubmit={this.props.handleFormSubmit} handleFormChange={this.props.handleFormChange} searchQuery={this.props.searchQuery} redirectHandler={this.props.redirectHandler}/> */}
            {this.props.auth0.isAuthenticated ? <SearchBar handleFormSubmit={this.props.handleFormSubmit} handleFormChange={this.props.handleFormChange} searchQuery={this.props.searchQuery} redirectHandler={this.props.redirectHandler}/> : <></>}
            <div onClick={this.props.handleClickedProfile}><Profile></Profile></div>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default withAuth0(Header);
