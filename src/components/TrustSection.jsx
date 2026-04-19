import React from 'react';
import { motion } from 'framer-motion';
import { Target, Cpu, Users, Zap, Rocket, Shield } from 'lucide-react';

const cards = [
  {
    icon: <Target className="text-accent" />,
    title: "Real Journey",
    description: "No fake guru talk. Real progress, real lessons from the ground up."
  },
  {
    icon: <Cpu className="text-accent" />,
    title: "Future Skills",
    description: "Learn practical AI, growth, and digital skills that actually matter in 2026."
  },
  {
    icon: <Users className="text-accent" />,
    title: "Student Focused",
    description: "Built for students who want more than an average life and a 9-5 grind."
  },
  {
    icon: <Zap className="text-accent" />,
    title: "Premium Mindset",
    description: "Systems for discipline, execution, consistency, and building leverage."
  },
  {
    icon: <Rocket className="text-accent" />,
    title: "Action Over Theory",
    description: "Stop reading endless advice. Start executing, building projects, and getting real results."
  },
  {
    icon: <Shield className="text-accent" />,
    title: "Long-Term Vision",
    description: "Not looking for quick cash. We are building sustainable skills, authority, and leverage."
  }
];

const TrustSection = () => {
  return (
    <section className="trust-section" id="about">
      <div className="container">
        <div className="section-header">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-tag"
          >
            The Foundations
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Why Follow This Journey?
          </motion.h2>
        </div>

        <div className="cards-grid">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="trust-card glass"
            >
              <div className="icon-box">
                {card.icon}
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default TrustSection;
