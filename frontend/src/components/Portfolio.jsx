import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Github, ExternalLink, Award, Users, Clock, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import mockData from '../data/mock';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="nav-header">
        <div className="nav-content">
          <div className="nav-logo">
            <h3>{mockData.personalInfo.name}</h3>
          </div>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <Link to="/prism" className="nav-link-primary">PRISM Project</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            <span>Nanotechnology Engineering Student</span>
          </div>
          <h1 className="hero-title">
            Engineering at the 
            <span className="hero-accent"> Nanoscale</span>
          </h1>
          <p className="hero-description">
            Specialized in precision optics, quantum sensing, and advanced microscopy systems. 
            Currently developing breakthrough technologies in cryogenic imaging and nanoscale characterization.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">5+</span>
              <span className="stat-label">Patents & Research</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">20%</span>
              <span className="stat-label">Process Improvement</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="molecular-diagram">
            <div className="atom-structure">
              <div className="nucleus"></div>
              <div className="electron-orbit orbit-1"></div>
              <div className="electron-orbit orbit-2"></div>
              <div className="electron-orbit orbit-3"></div>
              <div className="electron electron-1"></div>
              <div className="electron electron-2"></div>
              <div className="electron electron-3"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Specifications Section */}
      <section id="about" className="specs-section">
        <div className="specs-container">
          <div className="specs-header">
            <h2>Technical Specifications</h2>
            <div className="spec-tabs">
              <button 
                className={`spec-tab ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`spec-tab ${activeTab === 'equipment' ? 'active' : ''}`}
                onClick={() => setActiveTab('equipment')}
              >
                Equipment
              </button>
              <button 
                className={`spec-tab ${activeTab === 'software' ? 'active' : ''}`}
                onClick={() => setActiveTab('software')}
              >
                Software
              </button>
            </div>
          </div>

          <div className="specs-content">
            {activeTab === 'overview' && (
              <div className="spec-grid">
                <div className="spec-category">
                  <h3>Education</h3>
                  <div className="spec-items">
                    <div className="spec-item">
                      <span className="spec-label">Degree</span>
                      <span className="spec-value">BE Nanotechnology Engineering</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Institution</span>
                      <span className="spec-value">University of Waterloo</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Program</span>
                      <span className="spec-value">Co-operative Education</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Expected Graduation</span>
                      <span className="spec-value">2026</span>
                    </div>
                  </div>
                </div>

                <div className="spec-category">
                  <h3>Specializations</h3>
                  <div className="spec-items">
                    <div className="spec-item">
                      <span className="spec-label">Primary Focus</span>
                      <span className="spec-value">Precision Optics & Microscopy</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Research Area</span>
                      <span className="spec-value">Quantum Sensing Systems</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Applications</span>
                      <span className="spec-value">Cryogenic Imaging</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Industry</span>
                      <span className="spec-value">Aerospace & Defense</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'equipment' && (
              <div className="spec-grid">
                <div className="spec-category">
                  <h3>Analysis Equipment</h3>
                  <div className="spec-items">
                    {mockData.skills.machines.map((machine, index) => (
                      <div key={index} className="spec-item">
                        <span className="spec-label">{machine}</span>
                        <span className="spec-status">Certified</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="spec-category">
                  <h3>Fabrication</h3>
                  <div className="spec-items">
                    <div className="spec-item">
                      <span className="spec-label">CNC Machining</span>
                      <span className="spec-status">Advanced</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Precision Assembly</span>
                      <span className="spec-status">Expert</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Optical Alignment</span>
                      <span className="spec-status">Specialized</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'software' && (
              <div className="spec-grid">
                <div className="spec-category">
                  <h3>Engineering Software</h3>
                  <div className="spec-items">
                    {mockData.skills.frameworks.map((framework, index) => (
                      <div key={index} className="spec-item">
                        <span className="spec-label">{framework}</span>
                        <span className="spec-status">Proficient</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="spec-category">
                  <h3>Programming</h3>
                  <div className="spec-items">
                    {mockData.skills.languages.map((language, index) => (
                      <div key={index} className="spec-item">
                        <span className="spec-label">{language}</span>
                        <span className="spec-status">Advanced</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="experience-container">
          <h2>Professional Experience</h2>
          <div className="experience-timeline">
            {mockData.experience.map((exp, index) => (
              <motion.div 
                key={index}
                className="experience-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="exp-header">
                  <div className="exp-title-group">
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                  <div className="exp-period">{exp.period}</div>
                </div>
                <div className="exp-achievements">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="achievement-item">
                      <div className="achievement-icon">
                        {achievement.includes('20%') && <TrendingUp size={16} />}
                        {achievement.includes('800') && <Clock size={16} />}
                        {achievement.includes('80%') && <Award size={16} />}
                        {achievement.includes('framework') && <Users size={16} />}
                      </div>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {mockData.projects.map((project, index) => (
              <motion.div 
                key={index}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {project.featured && (
                  <div className="featured-badge">
                    <Award size={16} />
                    <span>Breakthrough Innovation</span>
                  </div>
                )}
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    {project.github && <Github size={18} />}
                    {project.demo && <ExternalLink size={18} />}
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {project.featured && (
                  <Link to="/prism" className="project-detail-link">
                    View Detailed Analysis
                    <ChevronRight size={16} />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <h2>Core Competencies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Engineering Skills</h3>
              <div className="skill-items">
                {mockData.skills.engineering.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <div className="skill-items">
                {mockData.skills.soft.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>{mockData.personalInfo.name}</h3>
            <p>Nanotechnology Engineering Student</p>
            <p>University of Waterloo</p>
          </div>
          <div className="footer-contact">
            <p>Available for Co-op Opportunities</p>
            <p>Specializing in Precision Optics & Quantum Systems</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;