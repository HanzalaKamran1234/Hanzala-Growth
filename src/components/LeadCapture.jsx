import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Sparkles, CheckCircle } from 'lucide-react';
import { sendEmail } from '../utils/sendEmail';

const LeadCapture = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await sendEmail({
        email,
        subject: 'New Request: Growth Starter Kit',
        html: `<p>A new user has requested the Lead Capture Growth Starter Kit.</p><p><strong>Email:</strong> ${email}</p>`
      });
      setSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="lead-section" id="growth-tools">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lead-container glass"
        >
          <div className="orange-glow centered"></div>
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="lead-content"
              >
                <div className="icon-badge">
                  <Sparkles size={20} className="text-accent" />
                </div>
                
                <h2 className="lead-title">
                  Get My Free Student <span className="text-accent">Growth Starter Kit</span>
                </h2>
                
                <p className="lead-subtitle">
                  The exact tools, habits, AI resources, and skills roadmap I use to stay ahead. Built for the modern ambitious student.
                </p>

                <form className="lead-form" onSubmit={handleSubmit}>
                  <div className="input-group">
                    <Mail className="input-icon" size={20} />
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your best email" 
                      required 
                      className="lead-input"
                    />
                  </div>
                  <button type="submit" className="btn-primary lead-btn" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Me The Kit'}
                  </button>
                </form>
                
                <p className="form-footer">
                  Join 1,000+ students already growing. No spam, just value.
                </p>
              </motion.div>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="success-content"
              >
                <div className="icon-badge success">
                  <CheckCircle size={30} className="text-accent" />
                </div>
                <h2 className="lead-title">You're In!</h2>
                <p className="lead-subtitle">
                  Check your inbox. The Growth Starter Kit is headed your way.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary">
                  Back
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

    </section>
  );
};

export default LeadCapture;
