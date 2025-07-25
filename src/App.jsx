import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import AppRoute from './components/route.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './ScrollToTop'
import useLenis from './useLenis' // import the custom hook

function App() {
  useLenis(); // initialize smooth scroll

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AppRoute />
      <Footer />
    </>
  );
}

export default App;
