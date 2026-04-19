import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Star } from 'lucide-react';

const testimonials = [
  { text: "Finally content for students who want more.", author: "Future Founder" },
  { text: "Realistic growth advice, not fake motivation.", author: "CS Student" },
  { text: "Exactly what students need in 2026.", author: "Digital Creator" }
];

const SocialProof = () => {
  return (
    <section className="social-section" id="social">
      <div className="container">
        <div className="instagram-box glass">
          <div className="ig-header">
            <Instagram className="text-accent" />
            <h3>Follow Daily Growth Content</h3>
          </div>
          <div className="ig-grid">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="ig-card">
                <div className="ig-placeholder"></div>
              </div>
            ))}
          </div>
          <a href="https://www.instagram.com/hanzala.growth/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">Follow @hanzala.growth</a>
        </div>

        <div className="testimonials-box">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-title text-center"
          >
            Built For Ambitious People
          </motion.h2>
          <div className="test-grid">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="test-card glass"
              >
                <div className="stars">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="var(--accent)" color="var(--accent)" />)}
                </div>
                <p className="test-text">“{t.text}”</p>
                <span className="test-author">— {t.author}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default SocialProof;
