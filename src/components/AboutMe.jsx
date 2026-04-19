import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/about.png';

const AboutMe = () => {
  return (
    <section className="about-section" id="about-me">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-visual"
          >
            <div className="image-frame glass">
              <img src={aboutImage} alt="Hanzala" className="profile-img" />
              <div className="image-overlay"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <span className="section-tag">Building In Public</span>
            <h2 className="section-title">Who Is <span className="text-accent">Hanzala?</span></h2>
            <div className="divider"></div>
            <p className="about-text">
              I’m a CS student building publicly and documenting the path to skills, income, and personal growth.
            </p>
            <p className="about-text">
              This brand exists to help students stop wasting years and start building early. Whether it's mastering AI agents, building software, or creating digital leverage—I'm here to show you it's possible.
            </p>
            
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-num">CS</span>
                <span className="stat-label">Student</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">AI</span>
                <span className="stat-label">Focused</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">2026</span>
                <span className="stat-label">Project</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default AboutMe;
