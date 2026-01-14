import React from 'react';
import { motion } from 'framer-motion';
import './LawStructure.css';

const LawStructure = () => {
  const levels = [
    { title: 'Supreme Court', width: '80%', icon: '⚖️' },
    { title: 'High Courts', width: '100%', icon: '🏛️' },
    { title: 'District Courts', width: '120%', icon: '⚖️' },
    { title: 'Lower Courts', width: '140%', icon: '📜' },
  ];

  return (
    <div className="law-structure-container">
      <motion.div
        className="structure-top"
        animate={{
          rotateY: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="structure-peak">
          <div className="peak-symbol">⚖️</div>
        </div>
      </motion.div>

      <div className="structure-levels">
        {levels.map((level, index) => (
          <motion.div
            key={index}
            className="structure-level"
            style={{ width: level.width }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="level-content">
              <span className="level-icon">{level.icon}</span>
              <span className="level-title">{level.title}</span>
            </div>
            <div className="level-glow"></div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="structure-base"
        animate={{
          boxShadow: [
            '0 10px 40px rgba(212, 175, 55, 0.3)',
            '0 10px 50px rgba(212, 175, 55, 0.5)',
            '0 10px 40px rgba(212, 175, 55, 0.3)',
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="base-text">Justice System</div>
      </motion.div>

      {/* Floating Documents */}
      <motion.div
        className="floating-doc doc-1"
        animate={{
          y: [-10, 10, -10],
          rotate: [-10, 10, -10]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        📜
      </motion.div>

      <motion.div
        className="floating-doc doc-2"
        animate={{
          y: [10, -10, 10],
          rotate: [10, -10, 10]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        📋
      </motion.div>
    </div>
  );
};

export default LawStructure;
