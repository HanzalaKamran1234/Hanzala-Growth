import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <section style={{ paddingTop: '180px', paddingBottom: '100px', minHeight: '80vh' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass"
          style={{ padding: '4rem', borderRadius: '32px', maxWidth: '800px', margin: '0 auto' }}
        >
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Privacy Policy</h1>
          <div style={{ width: '60px', height: '4px', background: 'var(--accent)', marginBottom: '2rem', borderRadius: '2px' }}></div>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Last updated: April 2026</p>
          
          <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>1. Information We Collect</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>We only collect the information you choose to provide, such as your email address when you sign up for the Growth Starter Kit.</p>
          
          <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>2. How We Use Your Information</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>We use your email address strictly to send you the resources you requested and occasional updates related to Hanzala.Growth. We do not sell or share your data.</p>
          
          <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>3. Data Security</h3>
          <p style={{ color: 'var(--muted)' }}>We implement standard security measures to keep your data safe and secure.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
