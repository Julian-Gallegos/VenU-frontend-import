
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import LogIn from './components/LogIn.js';
import Footer from './components/Footer.js';
import SignUp from './components/SignUp.js';
import UserProfile from './components/UserProfile.js';
import CitySearch from './components/CitySearch.js';
import ArtistSearch from './components/ArtistSearch.js';
import AboutTeam from './components/AboutTeam.js'

// import LogInRouter from './components/LogInRouter';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      formData: "",
      redirect: false,
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({searchQuery: this.state.formData, redirect: true});
  }

  handleFormChange = (e) => {
    e.preventDefault();
    this.setState({formData: e.target.value});
  }

  /* 
  handler to make sure Navigate react component doesn't rerender forever.
  this.state.redirect value is currently only changed whenever a SearchBar.js form is submitted.
  This Handler is called as part of the following line in SearchBar.js (at time of typing, this is line 60).
  `{this.props.redirectHandler ? <Navigate to={`/${this.state.formType}`} /> : <></>}`
  */
  redirectHandler = () => {
    if (this.state.redirect) {
      this.setState({redirect: false});
      return true;
    }
    return false;
  }

  render(){
    return(
      <>
      <main>
        <Router>
          <Routes>
            <Route
              exact path="/"
              element={<LogIn />}
            ></Route>
            <Route
              exact path="/signup"
              element={<SignUp />}
            >
            </Route>
            <Route
              exact path="/userprofile"
              element={<UserProfile handleFormSubmit={this.handleFormSubmit} handleFormChange={this.handleFormChange} searchQuery={this.state.searchQuery} redirectHandler={this.redirectHandler}/>}
            >
            </Route>
            <Route
              exact path="/citysearch"
              element={<CitySearch handleFormSubmit={this.handleFormSubmit} handleFormChange={this.handleFormChange} searchQuery={this.state.searchQuery} redirectHandler={this.redirectHandler}/>}
            >
            </Route>
            <Route
              exact path="/artistsearch"
              element={<ArtistSearch handleFormSubmit={this.handleFormSubmit} handleFormChange={this.handleFormChange} searchQuery={this.state.searchQuery} redirectHandler={this.redirectHandler}/>}
            >
            </Route>
            <Route
              exact path="/aboutteam"
              element={<AboutTeam />}
            >
            </Route>
          </Routes>
        </Router>
        </main>
      <Footer/>
      </>
    )
  }
}

export default App;
