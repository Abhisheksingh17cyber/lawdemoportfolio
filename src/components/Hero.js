import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="hero" id="hero">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-icon">⚖️</span>
            <span className="badge-text">Law Student</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Ashmita Srivastava
          </motion.h1>

          <motion.div className="hero-subtitle" variants={itemVariants}>
            <TypeAnimation
              sequence={[
                'Aspiring Legal Professional',
                2000,
                'Research Enthusiast',
                2000,
                'Constitutional Law Scholar',
                2000,
                'Advocate for Justice',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            Dedicated law student with a passion for constitutional law, human rights, 
            and legal research. Committed to excellence in advocacy and the pursuit of justice.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <a href="#contact" className="btn btn-primary">
              <FaEnvelope />
              <span>Get in Touch</span>
            </a>
            <a href="#about" className="btn btn-secondary">
              <span>Learn More</span>
            </a>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="mailto:ashmita.srivastava@example.com" className="social-link">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="hero-visual" variants={itemVariants}>
          <div className="visual-circle">
            <div className="circle-inner">
              <span className="visual-icon">⚖️</span>
            </div>
            <div className="circle-ring ring-1"></div>
            <div className="circle-ring ring-2"></div>
            <div className="circle-ring ring-3"></div>
          </div>
          <div className="floating-elements">
            <div className="float-item item-1">📜</div>
            <div className="float-item item-2">⚖️</div>
            <div className="float-item item-3">🏛️</div>
            <div className="float-item item-4">📚</div>
          </div>
        </motion.div>
      </motion.div>

      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
