import React from 'react';
import { FaHeart, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">⚖️</span>
              <span className="logo-text">Ashmita Srivastava</span>
            </div>
            <p className="footer-tagline">
              Aspiring Legal Professional | Justice Advocate | Law Student
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#experience">Experience</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>More</h4>
              <ul>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#achievements">Achievements</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Ashmita Srivastava. Made with <FaHeart className="heart-icon" /> | All Rights Reserved
          </p>
          <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
            <FaArrowUp />
          </button>
        </div>
      </div>

      <div className="footer-decoration">
        <div className="decoration-line"></div>
      </div>
    </footer>
  );
};

export default Footer;
