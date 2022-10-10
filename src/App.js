
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  render(){
    return(
      <>
      <Header/>
      <Main/>
      <Footer/>
      </>
    )
  }
}

export default App;
