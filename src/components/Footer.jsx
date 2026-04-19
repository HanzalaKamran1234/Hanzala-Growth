import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';

const Footer = ({ setView }) => {
  return (
    <footer className="main-footer" id="contact">
      <div className="container">
        {/* Final CTA Section */}
        <div className="final-cta glass">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="cta-title"
          >
            Average Is Crowded. <span className="text-accent">Build Early.</span>
          </motion.h2>
          <p className="cta-subtitle">
            Join the next generation building skills, leverage, and freedom.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Join Free Growth Circle</button>
            <a href="https://www.instagram.com/hanzala.growth/" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center">Follow Instagram</a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo">HANZALA<span className="text-accent">.GROWTH</span></span>
            <p className="brand-pitch">Building the future of student growth, AI, and digital income.</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#resources">Resources</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <a href="https://www.instagram.com/hanzala.growth/" target="_blank" rel="noopener noreferrer"><Instagram size={18} /> Instagram</a>
            <a href="#"><Mail size={18} /> info@hanzala.growth</a>
          </div>

          <div className="footer-newsletter">
            <h4>Future Products</h4>
            <p>Get notified when we launch new roadmaps.</p>
            <div className="mini-form">
              <input type="email" placeholder="Email" className="mini-input glass" />
              <button className="mini-btn">Join</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 HANZALA.GROWTH. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); if (setView) setView('privacy'); }}>Privacy Policy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); if (setView) setView('terms'); }}>Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
