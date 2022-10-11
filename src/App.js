
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Header from './components/Header.js';
import Main from './components/Main.js';
import LogIn from './components/LogIn.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  render(){
    return(
      <>
      <Header/>
      <Main/>
      <LogIn/>
      <Footer/>
      </>
    )
  }
}

export default App;
