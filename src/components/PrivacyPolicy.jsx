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
          
          <h3 style={{ color: '#fff', marginBottom: '0.5rem', marginTop: '1.5rem', fontSize: '1.5rem' }}>1. Information We Collect</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>We only collect the information you choose to provide, such as your email address when you sign up for the Growth Starter Kit or our newsletters. This data is collected voluntarily for the purpose of communicating with you and delivering our resources.</p>
          
          <h3 style={{ color: '#fff', marginBottom: '0.5rem', marginTop: '1.5rem', fontSize: '1.5rem' }}>2. How We Use Your Information</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>We use your email address strictly to send you the resources you requested and occasional updates related to Hanzala.Growth. We do not sell, rent, or share your personal data with third parties for their independent use.</p>
          
          <h3 style={{ color: '#fff', marginBottom: '0.5rem', marginTop: '1.5rem', fontSize: '1.5rem' }}>3. Data Security</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>We implement standard industry security measures to keep your data safe and secure. However, please understand that no transmission of data over the internet is 100% secure.</p>

          <h3 style={{ color: '#fff', marginBottom: '0.5rem', marginTop: '1.5rem', fontSize: '1.5rem' }}>4. Cookies and Tracking Technologies</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>Our website may use 'cookies' to enhance the user experience, understand analytics, and improve performance. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent.</p>

          <h3 style={{ color: '#fff', marginBottom: '0.5rem', marginTop: '1.5rem', fontSize: '1.5rem' }}>5. User Rights</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>You have the right to request access, correction, or deletion of your personal data at any time. If you wish to unsubscribe from our communications, an unsubscribe action will be made available in our emails.</p>

          <h3 style={{ color: '#fff', marginBottom: '0.5rem', marginTop: '1.5rem', fontSize: '1.5rem' }}>6. Contact Information</h3>
          <p style={{ color: 'var(--muted)', lineHeight: '1.8' }}>If you have any questions about this Privacy Policy or our practices, please contact us at <strong>info@hanzala.online</strong>.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
