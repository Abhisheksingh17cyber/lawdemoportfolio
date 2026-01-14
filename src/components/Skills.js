import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      category: 'Legal Expertise',
      skills: [
        { name: 'Constitutional Law', level: 95 },
        { name: 'Criminal Law', level: 90 },
        { name: 'Civil Procedure', level: 88 },
        { name: 'Contract Law', level: 85 },
        { name: 'International Law', level: 82 },
      ]
    },
    {
      category: 'Research & Analysis',
      skills: [
        { name: 'Legal Research', level: 95 },
        { name: 'Case Analysis', level: 92 },
        { name: 'Statutory Interpretation', level: 90 },
        { name: 'Comparative Law', level: 85 },
        { name: 'Legal Writing', level: 93 },
      ]
    },
    {
      category: 'Professional Skills',
      skills: [
        { name: 'Client Counseling', level: 87 },
        { name: 'Negotiation', level: 85 },
        { name: 'Public Speaking', level: 90 },
        { name: 'Legal Drafting', level: 88 },
        { name: 'Advocacy', level: 86 },
      ]
    }
  ];

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="skills-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">What I Bring</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: catIndex * 0.2 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
