import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Github, ExternalLink, Award, Users, Clock, TrendingUp, Target, Zap, Activity, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import mockData from '../data/mock';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Image carousel functionality
  const carouselImages = mockData.portfolioImages;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="nanotech-portfolio">
      {/* Tesla-style Navigation */}
      <nav className="tesla-nav">
        <div className="tesla-nav-content">
          <div className="tesla-logo">
            <h3>NANOTECH</h3>
            <span>ENGINEER</span>
          </div>
          <div className="tesla-nav-links">
            <a href="#specs" className="tesla-link">Technical Specs</a>
            <a href="#experience" className="tesla-link">Experience</a>
            <a href="#projects" className="tesla-link">Projects</a>
            <Link to="/prism" className="tesla-cta">PRISM System</Link>
          </div>
        </div>
      </nav>

      {/* Tesla Model X Style Hero */}
      <section className="tesla-hero">
        <div className="tesla-hero-bg">
          <div className="nanotech-particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
          <div className="optical-grid"></div>
        </div>
        
        <motion.div 
          className="tesla-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="tesla-badge">
            <Target size={16} />
            <span>PRECISION ENGINEERING • NANOSCALE</span>
          </div>
          
          <h1 className="tesla-title">
            Revolutionary
            <br />
            <span className="nanotech-gradient">Nanotechnology</span>
          </h1>
          
          <p className="tesla-subtitle">
            Advanced microscopy systems. Quantum sensing technologies. 
            Precision engineering at the atomic level.
          </p>

          {/* Tesla-style Specs Grid */}
          <div className="tesla-specs-grid">
            <div className="tesla-spec">
              <div className="spec-value">49x</div>
              <div className="spec-label">Magnification</div>
              <div className="spec-detail">Stable Optical System</div>
            </div>
            <div className="tesla-spec">
              <div className="spec-value">10nm</div>
              <div className="spec-label">Precision</div>
              <div className="spec-detail">Piezo Resolution</div>
            </div>
            <div className="tesla-spec">
              <div className="spec-value">±12.5mm</div>
              <div className="spec-label">Range</div>
              <div className="spec-detail">3-Axis Travel</div>
            </div>
            <div className="tesla-spec">
              <div className="spec-value">4K</div>
              <div className="spec-label">Cryogenic</div>
              <div className="spec-detail">Operating Temp</div>
            </div>
          </div>

          <div className="tesla-actions">
            <Link to="/prism" className="tesla-primary-btn">
              <span>View PRISM System</span>
              <ChevronRight size={20} />
            </Link>
            <button className="tesla-secondary-btn">Technical Specs</button>
          </div>
        </motion.div>
      </section>

      {/* Performance Metrics - Tesla Style */}
      <section className="tesla-performance">
        <div className="tesla-container">
          <div className="performance-header">
            <h2>Performance</h2>
            <p>Quantified impact across engineering projects</p>
          </div>
          
          <div className="performance-grid">
            <div className="performance-card primary">
              <div className="performance-icon">
                <TrendingUp size={32} />
              </div>
              <div className="performance-data">
                <div className="performance-value">20%</div>
                <div className="performance-label">Capacity Increase</div>
                <div className="performance-desc">Production optimization at Pirlitor Machine & Tool</div>
              </div>
            </div>
            
            <div className="performance-card">
              <div className="performance-icon">
                <Zap size={32} />
              </div>
              <div className="performance-data">
                <div className="performance-value">80%</div>
                <div className="performance-label">Process Efficiency</div>
                <div className="performance-desc">Industrial automation using custom macros</div>
              </div>
            </div>
            
            <div className="performance-card">
              <div className="performance-icon">
                <Clock size={32} />
              </div>
              <div className="performance-data">
                <div className="performance-value">800+</div>
                <div className="performance-label">Automated Cards</div>
                <div className="performance-desc">Shipping process automation in 3 days</div>
              </div>
            </div>
            
            <div className="performance-card">
              <div className="performance-icon">
                <Activity size={32} />
              </div>
              <div className="performance-data">
                <div className="performance-value">5+</div>
                <div className="performance-label">Patents Pending</div>
                <div className="performance-desc">Breakthrough innovations in precision optics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications - Clean Tesla Style */}
      <section id="specs" className="tesla-specs">
        <div className="tesla-container">
          <div className="specs-header">
            <h2>Technical Specifications</h2>
            <div className="tesla-spec-tabs">
              <button 
                className={`tesla-tab ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`tesla-tab ${activeTab === 'equipment' ? 'active' : ''}`}
                onClick={() => setActiveTab('equipment')}
              >
                Equipment
              </button>
              <button 
                className={`tesla-tab ${activeTab === 'software' ? 'active' : ''}`}
                onClick={() => setActiveTab('software')}
              >
                Software
              </button>
              <button 
                className={`tesla-tab ${activeTab === 'nanotech' ? 'active' : ''}`}
                onClick={() => setActiveTab('nanotech')}
              >
                Nanotech Focus
              </button>
            </div>
          </div>

          <div className="tesla-specs-content">
            {activeTab === 'overview' && (
              <div className="tesla-specs-grid">
                <div className="tesla-spec-section">
                  <div className="spec-section-header">
                    <h3>Academic Profile</h3>
                    <div className="nanotech-badge">Active</div>
                  </div>
                  <div className="spec-items">
                    <div className="tesla-spec-item">
                      <span className="spec-key">Institution</span>
                      <span className="spec-value">University of Waterloo</span>
                    </div>
                    <div className="tesla-spec-item">
                      <span className="spec-key">Program</span>
                      <span className="spec-value">Nanotechnology Engineering</span>
                    </div>
                    <div className="tesla-spec-item">
                      <span className="spec-key">Specialization</span>
                      <span className="spec-value">Precision Optics & Quantum Systems</span>
                    </div>
                    <div className="tesla-spec-item">
                      <span className="spec-key">Expected Graduation</span>
                      <span className="spec-value">2026</span>
                    </div>
                  </div>
                </div>

                <div className="tesla-spec-section">
                  <div className="spec-section-header">
                    <h3>Core Competencies</h3>
                    <div className="nanotech-badge expert">Expert</div>
                  </div>
                  <div className="spec-items">
                    <div className="tesla-spec-item">
                      <span className="spec-key">Precision Engineering</span>
                      <span className="spec-value">10-30nm Resolution</span>
                    </div>
                    <div className="tesla-spec-item">
                      <span className="spec-key">Optical Systems</span>
                      <span className="spec-value">49x Stable Magnification</span>
                    </div>
                    <div className="tesla-spec-item">
                      <span className="spec-key">Process Optimization</span>
                      <span className="spec-value">80% Efficiency Gains</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'equipment' && (
              <div className="tesla-equipment-grid">
                <div className="equipment-category">
                  <h3>Analysis Equipment</h3>
                  <div className="equipment-list">
                    {mockData.skills.machines.map((machine, index) => (
                      <div key={index} className="tesla-equipment-item">
                        <div className="equipment-name">{machine}</div>
                        <div className="equipment-status">Certified</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="equipment-category">
                  <h3>Fabrication Systems</h3>
                  <div className="equipment-list">
                    <div className="tesla-equipment-item">
                      <div className="equipment-name">CNC Machining Centers</div>
                      <div className="equipment-status">Advanced</div>
                    </div>
                    <div className="tesla-equipment-item">
                      <div className="equipment-name">Precision Assembly</div>
                      <div className="equipment-status">Expert</div>
                    </div>
                    <div className="tesla-equipment-item">
                      <div className="equipment-name">Optical Alignment</div>
                      <div className="equipment-status">Specialized</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'software' && (
              <div className="tesla-software-grid">
                <div className="software-category">
                  <h3>Engineering Software</h3>
                  <div className="software-list">
                    {mockData.skills.frameworks.map((framework, index) => (
                      <div key={index} className="tesla-software-item">
                        <div className="software-name">{framework}</div>
                        <div className="software-level">Advanced</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="software-category">
                  <h3>Programming Languages</h3>
                  <div className="software-list">
                    {mockData.skills.languages.map((language, index) => (
                      <div key={index} className="tesla-software-item">
                        <div className="software-name">{language}</div>
                        <div className="software-level">Expert</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'nanotech' && (
              <div className="nanotech-focus-grid">
                <div className="nanotech-category">
                  <div className="nanotech-header">
                    <Layers size={32} />
                    <h3>Quantum Sensing</h3>
                  </div>
                  <div className="nanotech-specs">
                    <div className="nano-spec">
                      <span className="nano-label">NV Center Detection</span>
                      <span className="nano-value">Single-spin sensitivity</span>
                    </div>
                    <div className="nano-spec">
                      <span className="nano-label">Magnetic Field Resolution</span>
                      <span className="nano-value">nT-level precision</span>
                    </div>
                    <div className="nano-spec">
                      <span className="nano-label">Spatial Resolution</span>
                      <span className="nano-value">Sub-micron mapping</span>
                    </div>
                  </div>
                </div>

                <div className="nanotech-category">
                  <div className="nanotech-header">
                    <Target size={32} />
                    <h3>Precision Optics</h3>
                  </div>
                  <div className="nanotech-specs">
                    <div className="nano-spec">
                      <span className="nano-label">Beam Orthogonality</span>
                      <span className="nano-value">Perfect preservation</span>
                    </div>
                    <div className="nano-spec">
                      <span className="nano-label">Magnification Stability</span>
                      <span className="nano-value">49x consistent</span>
                    </div>
                    <div className="nano-spec">
                      <span className="nano-label">Focus Range</span>
                      <span className="nano-value">Nanometer precision</span>
                    </div>
                  </div>
                </div>

                <div className="nanotech-category">
                  <div className="nanotech-header">
                    <Zap size={32} />
                    <h3>Cryogenic Systems</h3>
                  </div>
                  <div className="nanotech-specs">
                    <div className="nano-spec">
                      <span className="nano-label">Operating Temperature</span>
                      <span className="nano-value">4K to 300K</span>
                    </div>
                    <div className="nano-spec">
                      <span className="nano-label">Thermal Stability</span>
                      <span className="nano-value">&lt;0.1% drift</span>
                    </div>
                    <div className="nano-spec">
                      <span className="nano-label">Vacuum Compatibility</span>
                      <span className="nano-value">UHV ready</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Experience Section - Tesla Clean Style */}
      <section id="experience" className="tesla-experience">
        <div className="tesla-container">
          <h2>Experience</h2>
          <div className="experience-timeline">
            {mockData.experience.map((exp, index) => (
              <motion.div 
                key={index}
                className="tesla-experience-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="exp-left">
                  <div className="exp-period">{exp.period}</div>
                  <div className="exp-category">{exp.category}</div>
                </div>
                <div className="exp-right">
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <div className="exp-metrics">
                    {exp.keyMetrics.map((metric, mIndex) => (
                      <div key={mIndex} className="exp-metric">
                        <span className="metric-value">{metric.value}</span>
                        <span className="metric-desc">{metric.description}</span>
                      </div>
                    ))}
                  </div>
                  <div className="exp-achievements">
                    {exp.achievements.slice(0, 2).map((achievement, achIndex) => (
                      <div key={achIndex} className="achievement-bullet">
                        • {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects - Tesla Grid Style */}
      <section id="projects" className="tesla-projects">
        <div className="tesla-container">
          <h2>Projects</h2>
          <div className="projects-tesla-grid">
            {mockData.projects.map((project, index) => (
              <motion.div 
                key={index}
                className={`tesla-project-card ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {project.featured && (
                  <div className="featured-label">
                    <Award size={16} />
                    <span>Breakthrough</span>
                  </div>
                )}
                <div className="project-visual">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-category">{project.category}</div>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-specs">
                    {project.specifications.slice(0, 3).map((spec, specIndex) => (
                      <div key={specIndex} className="project-spec">
                        • {spec}
                      </div>
                    ))}
                  </div>
                  <div className="project-tech">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                  {project.featured && (
                    <Link to="/prism" className="project-cta">
                      <span>View System</span>
                      <ChevronRight size={16} />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tesla-style Footer */}
      <footer className="tesla-footer">
        <div className="tesla-container">
          <div className="footer-content">
            <div className="footer-left">
              <h3>NANOTECH ENGINEER</h3>
              <p>Precision engineering at the nanoscale</p>
              <div className="footer-status">
                <div className="status-dot"></div>
                <span>Available for Co-op • Final Term</span>
              </div>
            </div>
            <div className="footer-right">
              <div className="footer-specs">
                <div className="footer-spec">
                  <span className="spec-value">University of Waterloo</span>
                  <span className="spec-label">Institution</span>
                </div>
                <div className="footer-spec">
                  <span className="spec-value">Nanotechnology Engineering</span>
                  <span className="spec-label">Program</span>
                </div>
                <div className="footer-spec">
                  <span className="spec-value">2026</span>
                  <span className="spec-label">Graduation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;