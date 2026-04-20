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
          
          <h3 style={{ color: '#fff', marginBottom: '0.5rem', marginTop: '1.5rem', fontSize: '1.5rem' }}>1. Agreement to Terms</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>By accessing our website and engaging with Hanzala.Growth content, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.</p>
          
          <h3 style={{ color: '#fff', marginBottom: '0.5rem', marginTop: '1.5rem', fontSize: '1.5rem' }}>2. User Obligations</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>As a user of our website, you agree not to use our materials for illegal purposes. You agree to provide accurate information when subscribing to our services or submitting contact forms.</p>

          <h3 style={{ color: '#fff', marginBottom: '0.5rem', marginTop: '1.5rem', fontSize: '1.5rem' }}>3. Intellectual Property</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>All content, roadmaps, designs, and materials provided on this platform are the intellectual property of Hanzala.Growth. You may not distribute, reproduce, or resell them for commercial use without explicit written permission.</p>
          
          <h3 style={{ color: '#fff', marginBottom: '0.5rem', marginTop: '1.5rem', fontSize: '1.5rem' }}>4. Links to Other Websites</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>Our website may contain links to third-party web sites or services that are not owned or controlled by Hanzala.Growth. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.</p>

          <h3 style={{ color: '#fff', marginBottom: '0.5rem', marginTop: '1.5rem', fontSize: '1.5rem' }}>5. Limitation of Liability</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>In no event shall Hanzala.Growth, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of our Service.</p>

          <h3 style={{ color: '#fff', marginBottom: '0.5rem', marginTop: '1.5rem', fontSize: '1.5rem' }}>6. Disclaimer</h3>
          <p style={{ color: 'var(--muted)', lineHeight: '1.8' }}>The educational content and advice provided are based on personal experience. We do not guarantee specific financial results, job placements, or business growth.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService;
