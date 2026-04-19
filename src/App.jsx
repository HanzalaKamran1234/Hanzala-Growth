import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import LearningPath from './components/LearningPath';
import LeadCapture from './components/LeadCapture';
import AboutMe from './components/AboutMe';
import FutureMonetization from './components/FutureMonetization';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  const [view, setView] = React.useState('home');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="app-wrapper">
      <Navbar setView={setView} />
      <main>
        {view === 'home' && (
          <>
            <Hero />
            <TrustSection />
            <LearningPath />
            <FutureMonetization />
            <LeadCapture />
            <AboutMe />
            <SocialProof />
          </>
        )}
        {view === 'privacy' && <PrivacyPolicy />}
        {view === 'terms' && <TermsOfService />}
      </main>
      <Footer setView={setView} />
    </div>
  );
}

export default App;
