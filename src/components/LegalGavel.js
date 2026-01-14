import React from 'react';
import { motion } from 'framer-motion';
import './LegalGavel.css';

const LegalGavel = () => {
  return (
    <div className="legal-gavel-container">
      <motion.div
        className="gavel-wrapper"
        animate={{
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        }}
      >
        <div className="gavel-handle"></div>
        <div className="gavel-head"></div>
      </motion.div>
      <motion.div
        className="gavel-block"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
          delay: 0.3
        }}
      >
        <div className="block-base"></div>
        <motion.div
          className="impact-wave"
          animate={{
            scale: [0, 1.5],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeOut",
            delay: 0.5
          }}
        />
      </motion.div>
    </div>
  );
};

export default LegalGavel;
