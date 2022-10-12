import React from 'react';
import AboutTeam from './AboutTeam';

import HomePage from './HomePage';

import SignUp from './SignUp';

class Main extends React.Component {

	
  render(){
    return(
      <>
      <SignUp/>
      <HomePage/>
      <AboutTeam/>
      </>
    )
  }
}

export default Main;
