import React from 'react';
import AboutTeam from './AboutTeam';
import HomePage from './HomePage';
import LogIn from './LogIn.js'
import SignUp from './SignUp';

class Main extends React.Component {

	
  render(){
    return(
      <>
      <LogIn/>
      <SignUp/>
      <HomePage/>
      <AboutTeam/>
      </>
    )
  }
}

export default Main;
