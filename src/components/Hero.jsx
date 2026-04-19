import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="bg-bloom top-left"></div>
      <div className="bg-bloom bottom-right"></div>
      
      <div className="container hero-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content"
        >
          <div className="badge">
            <span className="dot"></span>
            Join the Next Generation
          </div>
          
          <h1 className="hero-title">
            Helping Students Build <span className="text-accent-hero">Skills, Income & Growth</span> in the AI Era
          </h1>
          
          <p className="hero-description">
            I document my real journey as a CS student building valuable skills, online income, discipline, and future success.
          </p>

          <div className="hero-ctas">
            <a href="https://www.instagram.com/hanzala.growth/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Instagram size={20} />
              Follow Instagram
            </a>
            <button className="btn-secondary">
              Get Free Growth Guide
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="trust-footer">
            <div className="avatars">
              <div className="avatar"></div>
              <div className="avatar"></div>
              <div className="avatar"></div>
            </div>
            <p className="trust-text">
              Join <span className="highlight">1,000+</span> ambitious students building ahead of the crowd.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 5 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-visual"
        >
          <div className="visual-wrapper glass">
            <img src={heroImage} alt="Future Growth Dashboard" className="hero-img" />
            <div className="glow-overlay"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
