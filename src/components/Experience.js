import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Legal Research Intern',
      organization: 'Supreme Court of India',
      location: 'New Delhi',
      period: 'Jun 2024 - Aug 2024',
      description: 'Assisted senior advocates in constitutional law cases, conducted extensive legal research, and prepared case briefs and memorandums.',
      responsibilities: [
        'Researched constitutional provisions and landmark judgments',
        'Drafted legal briefs and case summaries',
        'Attended court proceedings and documented observations',
        'Analyzed legislative amendments and their implications'
      ]
    },
    {
      title: 'Legal Aid Volunteer',
      organization: 'Human Rights Law Network',
      location: 'Mumbai',
      period: 'Jan 2024 - May 2024',
      description: 'Provided pro bono legal assistance to underprivileged communities, focusing on human rights violations and access to justice.',
      responsibilities: [
        'Conducted legal awareness workshops in rural areas',
        'Assisted in filing PILs for social justice causes',
        'Counseled clients on their legal rights',
        'Documented human rights violations'
      ]
    },
    {
      title: 'Research Assistant',
      organization: 'Centre for Constitutional Studies',
      location: 'Bangalore',
      period: 'Aug 2023 - Dec 2023',
      description: 'Supported research projects on constitutional amendments and judicial review, contributing to academic publications.',
      responsibilities: [
        'Conducted comparative constitutional law research',
        'Analyzed Supreme Court judgments',
        'Prepared research papers for academic journals',
        'Organized seminars on constitutional issues'
      ]
    }
  ];

  return (
    <section className="experience" id="experience" ref={ref}>
      <div className="experience-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Professional Journey</span>
          <h2 className="section-title">Experience</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="experience-icon-wrapper">
                <div className="experience-icon">
                  <FaBriefcase />
                </div>
              </div>
              
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-organization">
                      {exp.organization}
                    </div>
                  </div>
                  <div className="experience-meta">
                    <div className="experience-location">
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>
                    <div className="experience-period">
                      <FaCalendarAlt />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="experience-responsibilities">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
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

export default Experience;
