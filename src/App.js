
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import LogIn from './components/LogIn.js';
import Footer from './components/Footer.js';
import UserProfile from './components/UserProfile.js';
import CitySearch from './components/CitySearch.js';
import ArtistSearch from './components/ArtistSearch.js';
import AboutTeam from './components/AboutTeam.js'
import Header from './components/Header.js'
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

// import LogInRouter from './components/LogInRouter';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      formData: "",
      redirect: false,
      clickedProfile: false,
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ searchQuery: this.state.formData, redirect: true });
  }

  handleFormChange = (e) => {
    e.preventDefault();
    this.setState({ formData: e.target.value });
  }

  handleClickedProfile = (e) => {
    e.preventDefault();
    this.setState({ clickedProfile: true })
  }

  redirectToProfile = () => {
    if (this.state.clickedProfile) {
      this.setState({ clickedProfile: false });
      return true;
    }
    return false;
  }

  /* 
  handler to make sure Navigate react component doesn't rerender forever.
  this.state.redirect value is currently only changed whenever a SearchBar.js form is submitted.
  This Handler is called as part of the following line in SearchBar.js (at time of typing, this is line 60).
  `{this.props.redirectHandler ? <Navigate to={`/${this.state.formType}`} /> : <></>}`
  */
  redirectHandler = () => {
    if (this.state.redirect) {
      this.setState({ redirect: false });
      return true;
    }
    return false;
  }

  profileInDB = async () => {
    if (this.props.auth0.isAuthenticated) {
      try {
        const res = await this.props.auth0.getIdTokenClaims();
        const token = res.__raw;
        const config = {
          headers: { Authorization: `Bearer ${token}` },
          method: 'get',
          baseURL: SERVER_URL,
          url: `/profile`,
        }
        const profile = await axios(config);
        console.log(profile);

        if (profile.data.length>0) {
          console.log('profile exists?');
          return true;
        }
      } catch (error) {
        console.error('Error in profileInDB: ', error);
      }
    }
    return false;
  }

  addProfileToDB = async () => {
    try {
      console.log('ping');
      const res = await this.props.auth0.getIdTokenClaims();
      const token = res.__raw;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'post',
        baseURL: SERVER_URL,
        url: `/profile`,
        data: {
          venues: [],
          artist: []
        }
      }
      await axios(config);
    } catch (error) {
      console.error('Error in addProfileToDB: ', error);
    }
  }
  
  render() {
    return (
      <>
        <main>
          <div id='shade'>
            <Router>
              <Header handleClickedProfile={this.handleClickedProfile} handleFormSubmit={this.handleFormSubmit} handleFormChange={this.handleFormChange} searchQuery={this.state.searchQuery} redirectHandler={this.redirectHandler} />
              <Routes>
                <Route
                  exact path="/"
                  element={<LogIn redirectToProfile={this.redirectToProfile} />}
                ></Route>
                <Route
                  exact path="/userprofile"
                  element={<UserProfile searchQuery={this.state.searchQuery} redirectToProfile={this.redirectToProfile} />}
                >
                </Route>
                <Route
                  exact path="/citysearch"
                  element={<CitySearch searchQuery={this.state.searchQuery} redirectToProfile={this.redirectToProfile} />}
                >
                </Route>
                <Route
                  exact path="/artistsearch"
                  element={<ArtistSearch searchQuery={this.state.searchQuery} redirectToProfile={this.redirectToProfile} />}
                >
                </Route>
                <Route
                  exact path="/aboutteam"
                  element={<AboutTeam redirectToProfile={this.redirectToProfile} />}
                >
                </Route>
              </Routes>
            </Router>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}

export default withAuth0(App);
