import React from 'react';
import { motion } from 'framer-motion';

const futureProducts = [
  "Premium student growth newsletter",
  "AI tools resource packs",
  "Skill roadmaps",
  "Freelancing guides",
  "1-on-1 mentorship",
  "Community for ambitious students",
  "Templates & productivity systems",
  "Courses in future"
];

const FutureMonetization = () => {
  return (
    <section className="monetization-section" id="future">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-title"
          >
            How This Platform Will Help You More Over Time
          </motion.h2>
          <p className="section-subtitle">Future products & services designed to accelerate your growth.</p>
        </div>

        <div className="products-grid">
          {futureProducts.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="product-card glass"
            >
              <div className="coming-soon">Upcoming</div>
              <span className="product-name">{product}</span>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default FutureMonetization;
