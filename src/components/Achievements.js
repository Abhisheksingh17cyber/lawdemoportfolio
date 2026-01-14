import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaAward, FaCertificate, FaMedal } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: <FaTrophy />,
      title: 'Best Advocate Award',
      organization: 'National Moot Court Competition 2024',
      description: 'Won the Best Advocate Award representing my university in the national moot court competition.',
      date: 'March 2024'
    },
    {
      icon: <FaMedal />,
      title: 'First Prize - Legal Research',
      organization: 'All India Law Students Conference',
      description: 'Awarded first prize for research paper on Constitutional Amendments and Judicial Review.',
      date: 'December 2023'
    },
    {
      icon: <FaCertificate />,
      title: 'Legal Writing Excellence',
      organization: 'Indian Law Institute',
      description: 'Received certificate of excellence for outstanding legal writing and analytical skills.',
      date: 'August 2023'
    },
    {
      icon: <FaAward />,
      title: 'Dean\'s Honor List',
      organization: 'National Law University',
      description: 'Consistently featured in the Dean\'s Honor List for academic excellence and outstanding performance.',
      date: '2021-2024'
    },
    {
      icon: <FaTrophy />,
      title: 'Debate Championship',
      organization: 'Inter-University Debate Competition',
      description: 'Champions in the inter-university debate competition on Constitutional Rights and Freedoms.',
      date: 'October 2023'
    },
    {
      icon: <FaCertificate />,
      title: 'Human Rights Certification',
      organization: 'United Nations Human Rights Council',
      description: 'Completed advanced certification in International Human Rights Law and Advocacy.',
      date: 'June 2024'
    }
  ];

  return (
    <section className="achievements" id="achievements" ref={ref}>
      <div className="achievements-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Milestones & Recognition</span>
          <h2 className="section-title">Achievements & Awards</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <div className="achievement-icon-bg">
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
              </div>
              
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <div className="achievement-organization">{achievement.organization}</div>
                <p className="achievement-description">{achievement.description}</p>
                <div className="achievement-date">{achievement.date}</div>
              </div>

              <div className="achievement-ribbon"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
