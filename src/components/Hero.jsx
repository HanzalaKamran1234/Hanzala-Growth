import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowRight, CheckCircle } from 'lucide-react';
import heroImage from '../assets/hero.png';
import { sendEmail } from '../utils/sendEmail';

const Hero = ({ setView }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleGetGuide = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      await sendEmail({
        email,
        subject: 'New Request: Free Growth Guide',
        html: `<p>A new user has requested the Free Growth Guide.</p><p><strong>Email:</strong> ${email}</p>`
      });
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="bg-bloom top-left"></div>
      <div className="bg-bloom bottom-right"></div>
      
      <div className="container hero-container">
        <div className="hero-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-text"
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
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="hero-actions"
          >
            <div className="hero-ctas" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => { if(setView) setView('socials'); window.scrollTo(0,0); }} 
                  className="btn-primary"
                >
                  <Instagram size={20} />
                  Social Accounts
                </button>
              </div>
              <form onSubmit={handleGetGuide} style={{ display: 'flex', gap: '0.5rem', width: '100%', maxWidth: '400px' }}>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email for guide..." 
                  required
                  style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)', color: 'white', outline: 'none' }} 
                />
                <button type="submit" className="btn-secondary" disabled={status === 'loading'} style={{ minWidth: status === 'success' ? '120px' : 'auto' }}>
                  {status === 'loading' ? 'Sending...' : status === 'success' ? <><CheckCircle size={18} /> Sent</> : <>Get Guide <ArrowRight size={18} /></>}
                </button>
              </form>
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
        </div>

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
