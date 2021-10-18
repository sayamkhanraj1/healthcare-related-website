import React from 'react';
import Doctors from '../Doctors/Doctors';
import HeroSection from '../Header/HeroSection/HeroSection';
import Services from '../Services/Services';
import Updates from '../Updates/Updates';

const Home = () => {
         return (
                  <div id="home">
                      <HeroSection />
                      <Services />  
                      <Doctors />  
                      <Updates />
                  </div>
         );
};

export default Home;