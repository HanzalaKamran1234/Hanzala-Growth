import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ setView }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-black/20 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className={`container`}>
        <div className={`glass nav-pill flex items-center justify-between`}>
          <div className="logo-section" style={{cursor: 'pointer'}} onClick={() => { if(setView) setView('home'); window.location.hash = ''; }}>
            <span className="text-xl font-extrabold tracking-tighter text-white">
              HANZALA<span className="text-accent-nav">.GROWTH</span>
            </span>
          </div>

          <div className="nav-links hidden md:flex">
            {['Home', 'About', 'Resources', 'Growth Tools', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="nav-link"
                onClick={() => { if(setView) setView('home'); }}
              >
                {item}
              </a>
            ))}
          </div>

          <button 
            className="btn-primary nav-cta"
            onClick={() => { if(setView) setView('socials'); window.scrollTo(0,0); }}
          >
            Join Circle
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
