
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Header from './components/Header.js';
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
  render(){
    return(
      <>
      <Header/>
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
              element={<UserProfile />}
            >
            </Route>
            <Route
              exact path="/citysearch"
              element={<CitySearch />}
            >
            </Route>
            <Route
              exact path="/artistsearch"
              element={<ArtistSearch />}
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
