  
import React from 'react';
import '../../App.css';
import Cards from '../Card/Cards';
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;