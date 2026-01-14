import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaUniversity, FaCalendarAlt } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Bachelor of Laws (LL.B.)',
      institution: 'National Law University',
      location: 'New Delhi, India',
      period: '2020 - 2025',
      description: 'Specialized in Constitutional Law, Criminal Law, and International Human Rights Law. Maintained a CGPA of 8.5/10.',
      achievements: [
        'Dean\'s List for Academic Excellence',
        'Best Research Paper Award',
        'Member of Law Review Committee'
      ]
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'St. Xavier\'s School',
      location: 'Mumbai, India',
      period: '2018 - 2020',
      description: 'Completed with distinction, focusing on Humanities and Social Sciences. Active participant in debate competitions.',
      achievements: [
        'School Topper in Humanities',
        'Inter-School Debate Champion',
        'Student Council President'
      ]
    }
  ];

  return (
    <section className="education" id="education" ref={ref}>
      <div className="education-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Academic Journey</span>
          <h2 className="section-title">Education</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="education-timeline">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="education-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-content">
                <div className="education-header">
                  <div>
                    <h3 className="education-degree">{item.degree}</h3>
                    <div className="education-institution">
                      <FaUniversity />
                      <span>{item.institution}</span>
                    </div>
                    <div className="education-location">{item.location}</div>
                  </div>
                  <div className="education-period">
                    <FaCalendarAlt />
                    <span>{item.period}</span>
                  </div>
                </div>
                <p className="education-description">{item.description}</p>
                <div className="education-achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
