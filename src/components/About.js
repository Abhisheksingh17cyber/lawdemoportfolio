import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGavel, FaBookOpen, FaAward, FaBalanceScale } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const highlights = [
    {
      icon: <FaGavel />,
      title: 'Legal Research',
      description: 'Extensive experience in legal research and case analysis'
    },
    {
      icon: <FaBookOpen />,
      title: 'Academic Excellence',
      description: 'Strong academic record with focus on constitutional law'
    },
    {
      icon: <FaAward />,
      title: 'Recognition',
      description: 'Multiple awards and accolades in moot courts and debates'
    },
    {
      icon: <FaBalanceScale />,
      title: 'Justice Advocacy',
      description: 'Passionate about human rights and social justice'
    }
  ];

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Get to Know Me</span>
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <p className="about-paragraph">
              I am <span className="highlight-text">Ashmita Srivastava</span>, a dedicated law student with 
              an unwavering passion for the pursuit of justice and the rule of law. My academic journey has 
              been defined by a deep commitment to understanding the intricacies of constitutional law, 
              human rights, and legal frameworks that shape our society.
            </p>
            <p className="about-paragraph">
              Throughout my legal education, I have developed strong analytical and research skills, 
              participating actively in moot court competitions, legal aid clinics, and academic discussions. 
              I believe in the transformative power of law to create positive change and uphold the 
              fundamental rights of every individual.
            </p>
            <p className="about-paragraph">
              My goal is to become a skilled legal professional who not only excels in advocacy but also 
              contributes meaningfully to the development of jurisprudence and the protection of civil 
              liberties. I am committed to continuous learning and staying abreast of evolving legal 
              principles and societal needs.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years of Study</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Research Papers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Moot Courts</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="about-highlights" variants={itemVariants}>
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-description">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
