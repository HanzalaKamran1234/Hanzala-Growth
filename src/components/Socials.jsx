import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Linkedin, Youtube, Mail, ArrowLeft } from 'lucide-react';

const Socials = ({ setView }) => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram size={24} />,
      url: 'https://www.instagram.com/hanzala.growth/',
      color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500',
    },
    {
      name: 'Facebook',
      icon: <Facebook size={24} />,
      url: '#',
      color: 'bg-blue-600',
    },
    {
      name: 'Twitter / X',
      icon: <Twitter size={24} />,
      url: '#',
      color: 'bg-gray-800',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: '#',
      color: 'bg-blue-700',
    },
    {
      name: 'YouTube',
      icon: <Youtube size={24} />,
      url: '#',
      color: 'bg-red-600',
    },
    {
      name: 'Email Me',
      icon: <Mail size={24} />,
      url: 'mailto:growtoglow44@gmail.com',
      color: 'bg-teal-600',
    }
  ];

  return (
    <section className="socials-section" style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="bg-bloom top-left"></div>
      <div className="bg-bloom bottom-right"></div>
      
      <div className="container" style={{ maxWidth: '600px' }}>
        <button 
          onClick={() => { if(setView) setView('home'); window.scrollTo(0,0); }}
          className="btn-secondary"
          style={{ marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass socials-card"
          style={{ padding: '3rem 2rem', borderRadius: '32px', textAlign: 'center' }}
        >
          <div className="avatar" style={{ width: '100px', height: '100px', margin: '0 auto 1.5rem auto', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
            H
          </div>
          
          <h1 className="hero-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Hanzala Kamran</h1>
          <p className="text-muted" style={{ marginBottom: '2rem' }}>@hanzala.growth</p>
          
          <div className="social-links-container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`social-btn ${link.color}`}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '1rem', 
                  padding: '1rem', 
                  borderRadius: '16px',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  transition: 'transform 0.2s ease, filter 0.2s ease',
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {link.icon}
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Socials;
