import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'

import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import ValueProposition from './components/ValueProposition';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Services from './components/Services';
import Mission from './components/Mission';
import Team from './components/Team';

import Footer from './components/Footer';
import LandingAnimation from './components/LandingAnimation';
import ScrollToTop from './components/ScrollToTop';

import HomeContact from './components/HomeContact'; // New import
import ServiceDetail from './components/ServiceDetail';
import ServicesPreview from './components/ServicesPreview';

// ... imports ...

function App() {
  const location = useLocation();

  const getRouteClass = (pathname) => {
    switch (pathname) {
      case '/contact': return 'route-contact';
      case '/services': return 'route-services';
      case '/mission': return 'route-mission';
      case '/team': return 'route-team';
      default: return 'page-home';
    }
  };

  return (
    <div className={`layout layout-default main breakpoint-desktop scrolling-up ${getRouteClass(location.pathname)}`}>
      <ScrollToTop />
      <LandingAnimation />
      <Header />

      <Routes>
        <Route path="/" element={
          <div className="page-home page">
            <Hero />
            <WhoWeAre />
            <Clients />
            <ServicesPreview />
            <HomeContact /> {/* Replaced ValueProposition */}
            <Footer />
          </div>
        } />
        <Route path="/contact" element={<><Contact /><Footer /></>} />
        <Route path="/services" element={<><Services /><Footer /></>} />
        <Route path="/services/:id" element={<><ServiceDetail /><Footer /></>} />
        <Route path="/mission" element={<><Mission /><Footer /></>} /> {/* Added ValueProposition here */}
        <Route path="/team" element={<><Team /><Footer /></>} />
      </Routes>
    </div>
  )
}

export default App
