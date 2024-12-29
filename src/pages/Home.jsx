import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Progress from '../components/Progress';
import Cards from '../components/Cards';

const Home = () => {
  return (
    <div>
      <div id="hero">
        <Hero />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Progress">
        <Progress />
      </div>
      <div id="cards">
        <Cards />
      </div>
    </div>
  );
};

export default Home;
