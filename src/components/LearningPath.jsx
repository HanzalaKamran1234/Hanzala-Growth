import React from 'react';
import { motion } from 'framer-motion';
import { Bot, LineChart, Banknote, Workflow } from 'lucide-react';

const learningCards = [
  {
    icon: <Bot size={24} />,
    title: "AI Tools For Students",
    desc: "Use AI smarter to save time and grow faster."
  },
  {
    icon: <Workflow size={24} />,
    title: "Skill Building",
    desc: "Learn valuable digital skills step by step."
  },
  {
    icon: <Banknote size={24} />,
    title: "Income Pathways",
    desc: "Freelancing, online opportunities, leverage."
  },
  {
    icon: <LineChart size={24} />,
    title: "Growth Systems",
    desc: "Habits, mindset, productivity, execution."
  }
];

const LearningPath = () => {
  return (
    <section className="learning-section" id="resources">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="section-title text-gradient"
          >
            What You’ll Learn Here
          </motion.h2>
        </div>

        <div className="learning-grid">
          {learningCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="learning-card"
            >
              <div className="card-inner glass">
                <div className="icon-wrap">{card.icon}</div>
                <div className="card-content">
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default LearningPath;
