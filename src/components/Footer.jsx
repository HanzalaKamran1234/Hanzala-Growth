import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, CheckCircle } from 'lucide-react';
import { sendEmail } from '../utils/sendEmail';

const Footer = ({ setView }) => {
  const [circleEmail, setCircleEmail] = useState('');
  const [productEmail, setProductEmail] = useState('');
  const [circleStatus, setCircleStatus] = useState('idle');
  const [productStatus, setProductStatus] = useState('idle');

  const handleCircleSubmit = async (e) => {
    e.preventDefault();
    if (!circleEmail) return;
    setCircleStatus('loading');
    try {
      await sendEmail({
        email: circleEmail,
        subject: 'New Request: Free Growth Circle',
        html: `<p>A new user has requested to join the Free Growth Circle.</p><p><strong>Email:</strong> ${circleEmail}</p>`
      });
      setCircleStatus('success');
      setCircleEmail('');
    } catch {
      setCircleStatus('error');
    }
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    if (!productEmail) return;
    setProductStatus('loading');
    try {
      await sendEmail({
        email: productEmail,
        subject: 'New Request: Future Products Notification',
        html: `<p>A new user has requested to be notified about Future Products.</p><p><strong>Email:</strong> ${productEmail}</p>`
      });
      setProductStatus('success');
      setProductEmail('');
    } catch {
      setProductStatus('error');
    }
  };

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
          <div className="cta-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <form onSubmit={handleCircleSubmit} style={{ display: 'flex', gap: '0.5rem', width: '100%', maxWidth: '400px' }}>
              <input 
                type="email" 
                value={circleEmail}
                onChange={(e) => setCircleEmail(e.target.value)}
                placeholder="Enter email to join circle..." 
                required
                style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)', color: 'white', outline: 'none' }} 
              />
              <button type="submit" className="btn-primary" disabled={circleStatus === 'loading'}>
                {circleStatus === 'loading' ? 'Sending...' : circleStatus === 'success' ? <><CheckCircle size={18} /> Sent</> : 'Join Free Growth Circle'}
              </button>
            </form>
            <button onClick={() => { if(setView) setView('socials'); window.scrollTo(0,0); }} className="btn-secondary flex items-center justify-center gap-2">
              <Instagram size={18} /> Social Accounts
            </button>
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
            <button onClick={() => { if(setView) setView('socials'); window.scrollTo(0,0); }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}>
              <Instagram size={18} /> Social Accounts
            </button>
            <a href="mailto:growtoglow44@gmail.com"><Mail size={18} /> info@hanzala.growth</a>
          </div>

          <div className="footer-newsletter">
            <h4>Future Products</h4>
            <p>Get notified when we launch new roadmaps.</p>
            <form onSubmit={handleProductSubmit} className="mini-form">
              <input 
                type="email" 
                value={productEmail}
                onChange={(e) => setProductEmail(e.target.value)}
                placeholder="Email" 
                required
                className="mini-input glass" 
              />
              <button type="submit" className="mini-btn" disabled={productStatus === 'loading'}>
                {productStatus === 'loading' ? '...' : productStatus === 'success' ? 'Sent' : 'Join'}
              </button>
            </form>
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
