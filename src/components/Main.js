import React from 'react';
import AboutTeam from './AboutTeam';
import LogIn from './LogIn.js'
import SignUp from './SignUp';

class Main extends React.Component {

	
  render(){
    return(
      <>
      <LogIn/>
      <SignUp/>
      <AboutTeam/>
      </>
    )
  }
}

export default Main;
