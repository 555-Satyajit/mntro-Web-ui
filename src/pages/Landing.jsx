import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';

const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh', background: 'radial-gradient(circle at top left, #1e1b4b, #0f172a 50%, #020617)' }}>
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </Box>
  );
};

export default Home;
