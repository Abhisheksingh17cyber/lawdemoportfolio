import React from 'react';
import { motion } from 'framer-motion';
import './Courtroom.css';

const Courtroom = () => {
  return (
    <div className="courtroom-container">
      <div className="courtroom-scene">
        {/* Pillars */}
        <div className="pillar pillar-left"></div>
        <div className="pillar pillar-right"></div>
        
        {/* Building Front */}
        <div className="building-front">
          <div className="building-top">
            <div className="triangle-roof"></div>
            <div className="roof-text">⚖️</div>
          </div>
          
          <div className="building-columns">
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
          </div>
          
          <div className="entrance">
            <motion.div
              className="door"
              animate={{ scaleY: [1, 0.98, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Steps */}
        <div className="steps-container">
          <div className="step step-1"></div>
          <div className="step step-2"></div>
          <div className="step step-3"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="floating-scale"
          animate={{
            y: [-5, 5, -5],
            rotate: [-5, 5, -5]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          ⚖️
        </motion.div>

        <motion.div
          className="floating-document"
          animate={{
            y: [5, -5, 5],
            x: [-2, 2, -2]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          📜
        </motion.div>
      </div>
    </div>
  );
};

export default Courtroom;
