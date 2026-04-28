import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PostcardSection from './components/PostcardSection';
import Work from './components/Work';
import About from './components/About';
import Experience from './components/Experience';
import Metrics from './components/Metrics';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PostcardSection />
        <Work />
        <About />
        <Experience />
        <Metrics />
        <Footer />
      </main>
    </>
  );
};

export default Home;
