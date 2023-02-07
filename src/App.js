import React from 'react';

import { AboutUs,   Footer,  Header, Intro,  SpecialMenu ,BookTable, Laurels } from './container';
import { Navbar } from './components';
import './App.css';


const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />

    <Intro />
    <Laurels/>
   <BookTable/>
    <Footer />

  </div>
);

export default App;
