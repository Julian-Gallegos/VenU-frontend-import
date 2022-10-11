
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header.js';
import LogIn from './components/LogIn.js';
import Footer from './components/Footer.js';
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile';
import CitySearch from './components/CitySearch';
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
            {/* <Route
              exact path="/aboutteam"
              element={<AboutTeam />}
            >
            </Route> */}
          </Routes>
        </Router>
      <Header/>
      {/* <LogInRouter/> */}
      <Footer/>
      </>
    )
  }
}

export default App;
