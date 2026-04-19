import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <section style={{ paddingTop: '180px', paddingBottom: '100px', minHeight: '80vh' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass"
          style={{ padding: '4rem', borderRadius: '32px', maxWidth: '800px', margin: '0 auto' }}
        >
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Terms of Service</h1>
          <div style={{ width: '60px', height: '4px', background: 'var(--accent)', marginBottom: '2rem', borderRadius: '2px' }}></div>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Last updated: April 2026</p>
          
          <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>1. Agreement to Terms</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>By accessing our website and engaging with Hanzala.Growth content, you agree to be bound by these Terms of Service.</p>
          
          <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>2. Intellectual Property</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>All content, roadmaps, and materials provided are the intellectual property of Hanzala.Growth. You may not distribute or reproduce them for commercial use without permission.</p>
          
          <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>3. Disclaimer</h3>
          <p style={{ color: 'var(--muted)' }}>The educational content and advice provided are based on personal experience. We do not guarantee specific financial results or job placements.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService;
