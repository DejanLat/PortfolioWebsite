import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Github, ExternalLink, Award, Users, Clock, TrendingUp, Target, Zap, Activity, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import mockData from '../data/mock';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('performance');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="engineering-portfolio">
      {/* Tesla White Navigation */}
      <nav className="tesla-white-nav">
        <div className="tesla-nav-content">
          <div className="tesla-white-logo">
            <h3>ENGINEERING</h3>
            <span>PORTFOLIO</span>
          </div>
          <div className="tesla-nav-links">
            <a href="#specifications" className="tesla-white-link">Specifications</a>
            <a href="#performance" className="tesla-white-link">Performance</a>
            <a href="#experience" className="tesla-white-link">Experience</a>
            <a href="#projects" className="tesla-white-link">Projects</a>
            <Link to="/prism" className="tesla-white-cta">PRISM System</Link>
          </div>
        </div>
      </nav>

      {/* Tesla White Hero - Engineering Focus */}
      <section className="tesla-white-hero">
        <div className="mechanical-bg">
          <div className="precision-grid"></div>
          <div className="engineering-particles">
            <div className="gear-particle"></div>
            <div className="gear-particle"></div>
            <div className="gear-particle"></div>
          </div>
        </div>
        
        <motion.div 
          className="tesla-white-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="engineering-badge">
            <Target size={16} />
            <span>PRECISION ENGINEERING • NANOSCALE SYSTEMS</span>
          </div>
          
          <h1 className="tesla-white-title">
            Nanotechnology
            <br />
            <span className="engineering-gradient">Engineer</span>
          </h1>
          
          <p className="tesla-white-subtitle">
            Delivering quantifiable results in precision manufacturing, advanced microscopy, 
            and process optimization. Specialized in nanometer-scale engineering solutions.
          </p>

          {/* Tesla-style Engineering Metrics */}
          <div className="engineering-metrics-grid">
            <div className="metric-card featured">
              <div className="metric-number">20%</div>
              <div className="metric-label">CAPACITY INCREASE</div>
              <div className="metric-detail">Production optimization delivered</div>
            </div>
            <div className="metric-card">
              <div className="metric-number">80%</div>
              <div className="metric-label">PROCESS EFFICIENCY</div>
              <div className="metric-detail">Industrial automation achieved</div>
            </div>
            <div className="metric-card">
              <div className="metric-number">800+</div>
              <div className="metric-label">UNITS AUTOMATED</div>
              <div className="metric-detail">Shipping cards processed</div>
            </div>
            <div className="metric-card">
              <div className="metric-number">10nm</div>
              <div className="metric-label">PRECISION ACHIEVED</div>
              <div className="metric-detail">PRISM system resolution</div>
            </div>
          </div>

          <div className="tesla-white-actions">
            <Link to="/prism" className="tesla-white-primary">
              <span>View PRISM System</span>
              <ArrowRight size={20} />
            </Link>
            <a href="#specifications" className="tesla-white-secondary">Technical Specifications</a>
          </div>
        </motion.div>
      </section>

      {/* Engineering Specifications - Tesla Style */}
      <section id="specifications" className="tesla-white-specs">
        <div className="tesla-container">
          <div className="specs-white-header">
            <h2>Engineering Specifications</h2>
            <p>Comprehensive technical capabilities and proven performance metrics</p>
            
            <div className="tesla-white-tabs">
              <button 
                className={`tesla-white-tab ${activeTab === 'performance' ? 'active' : ''}`}
                onClick={() => setActiveTab('performance')}
              >
                Performance Data
              </button>
              <button 
                className={`tesla-white-tab ${activeTab === 'equipment' ? 'active' : ''}`}
                onClick={() => setActiveTab('equipment')}
              >
                Equipment Mastery
              </button>
              <button 
                className={`tesla-white-tab ${activeTab === 'software' ? 'active' : ''}`}
                onClick={() => setActiveTab('software')}
              >
                Software Proficiency
              </button>
              <button 
                className={`tesla-white-tab ${activeTab === 'systems' ? 'active' : ''}`}
                onClick={() => setActiveTab('systems')}
              >
                System Design
              </button>
            </div>
          </div>

          <div className="tesla-white-specs-content">
            {activeTab === 'performance' && (
              <div className="performance-data-grid">
                {/* Academic Performance */}
                <div className="performance-section">
                  <div className="section-header">
                    <h3>Academic Performance</h3>
                    <div className="status-badge active">Current</div>
                  </div>
                  <div className="performance-metrics">
                    <div className="perf-metric">
                      <span className="metric-label">Institution</span>
                      <span className="metric-value">University of Waterloo</span>
                      <span className="metric-unit">Top 50 Global Engineering</span>
                    </div>
                    <div className="perf-metric">
                      <span className="metric-label">Program</span>
                      <span className="metric-value">Nanotechnology Engineering</span>
                      <span className="metric-unit">Co-operative Education</span>
                    </div>
                    <div className="perf-metric">
                      <span className="metric-label">Specialization</span>
                      <span className="metric-value">Precision Optics</span>
                      <span className="metric-unit">Quantum Systems Focus</span>
                    </div>
                    <div className="perf-metric">
                      <span className="metric-label">Expected Graduation</span>
                      <span className="metric-value">2026</span>
                      <span className="metric-unit">Bachelor of Engineering</span>
                    </div>
                  </div>
                </div>

                {/* Industrial Performance */}
                <div className="performance-section">
                  <div className="section-header">
                    <h3>Industrial Impact</h3>
                    <div className="status-badge proven">Proven</div>
                  </div>
                  <div className="performance-metrics">
                    <div className="perf-metric highlighted">
                      <span className="metric-label">Capacity Optimization</span>
                      <span className="metric-value">+20%</span>
                      <span className="metric-unit">Order Intake Increase</span>
                    </div>
                    <div className="perf-metric highlighted">
                      <span className="metric-label">Process Efficiency</span>
                      <span className="metric-value">+80%</span>
                      <span className="metric-unit">Automation Implementation</span>
                    </div>
                    <div className="perf-metric">
                      <span className="metric-label">Time Optimization</span>
                      <span className="metric-value">69s/card</span>
                      <span className="metric-unit">Processing Speed</span>
                    </div>
                    <div className="perf-metric">
                      <span className="metric-label">Volume Processed</span>
                      <span className="metric-value">800+</span>
                      <span className="metric-unit">Units in 3 Days</span>
                    </div>
                  </div>
                </div>

                {/* Technical Achievements */}
                <div className="performance-section">
                  <div className="section-header">
                    <h3>Technical Achievements</h3>
                    <div className="status-badge breakthrough">Breakthrough</div>
                  </div>
                  <div className="performance-metrics">
                    <div className="perf-metric highlighted">
                      <span className="metric-label">PRISM Resolution</span>
                      <span className="metric-value">10-30nm</span>
                      <span className="metric-unit">Positioning Accuracy</span>
                    </div>
                    <div className="perf-metric highlighted">
                      <span className="metric-label">Magnification</span>
                      <span className="metric-value">49x</span>
                      <span className="metric-unit">Stable Optical System</span>
                    </div>
                    <div className="perf-metric">
                      <span className="metric-label">Travel Range</span>
                      <span className="metric-value">±12.5mm</span>
                      <span className="metric-unit">3-Axis Capability</span>
                    </div>
                    <div className="perf-metric">
                      <span className="metric-label">Operating Range</span>
                      <span className="metric-value">4K-300K</span>
                      <span className="metric-unit">Temperature Stability</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'equipment' && (
              <div className="equipment-mastery-grid">
                <div className="equipment-category">
                  <div className="category-header">
                    <h3>Analysis & Characterization</h3>
                    <div className="proficiency-indicator expert">Expert Level</div>
                  </div>
                  <div className="equipment-specs">
                    {mockData.skills.machines.map((machine, index) => (
                      <div key={index} className="equipment-spec">
                        <div className="spec-name">{machine}</div>
                        <div className="spec-status">
                          <div className="status-bar">
                            <div className="status-fill expert"></div>
                          </div>
                          <span>Certified</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="equipment-category">
                  <div className="category-header">
                    <h3>Manufacturing & Fabrication</h3>
                    <div className="proficiency-indicator advanced">Advanced</div>
                  </div>
                  <div className="equipment-specs">
                    <div className="equipment-spec">
                      <div className="spec-name">CNC Machining Centers</div>
                      <div className="spec-status">
                        <div className="status-bar">
                          <div className="status-fill expert"></div>
                        </div>
                        <span>Advanced</span>
                      </div>
                    </div>
                    <div className="equipment-spec">
                      <div className="spec-name">Precision Assembly Systems</div>
                      <div className="spec-status">
                        <div className="status-bar">
                          <div className="status-fill expert"></div>
                        </div>
                        <span>Expert</span>
                      </div>
                    </div>
                    <div className="equipment-spec">
                      <div className="spec-name">Optical Alignment Equipment</div>
                      <div className="spec-status">
                        <div className="status-bar">
                          <div className="status-fill expert"></div>
                        </div>
                        <span>Specialized</span>
                      </div>
                    </div>
                    <div className="equipment-spec">
                      <div className="spec-name">Quality Control Systems</div>
                      <div className="spec-status">
                        <div className="status-bar">
                          <div className="status-fill expert"></div>
                        </div>
                        <span>Certified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'software' && (
              <div className="software-proficiency-grid">
                <div className="software-category">
                  <div className="category-header">
                    <h3>Engineering & Design Software</h3>
                    <div className="proficiency-score">95%</div>
                  </div>
                  <div className="software-specs">
                    {mockData.skills.frameworks.map((framework, index) => (
                      <div key={index} className="software-spec">
                        <div className="software-info">
                          <span className="software-name">{framework}</span>
                          <span className="version-tag">Latest</span>
                        </div>
                        <div className="proficiency-meter">
                          <div className="meter-fill advanced"></div>
                          <span className="proficiency-label">Advanced</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="software-category">
                  <div className="category-header">
                    <h3>Programming & Analysis</h3>
                    <div className="proficiency-score">92%</div>
                  </div>
                  <div className="software-specs">
                    {mockData.skills.languages.map((language, index) => (
                      <div key={index} className="software-spec">
                        <div className="software-info">
                          <span className="software-name">{language}</span>
                          <span className="version-tag">Production</span>
                        </div>
                        <div className="proficiency-meter">
                          <div className="meter-fill expert"></div>
                          <span className="proficiency-label">Expert</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'systems' && (
              <div className="systems-design-grid">
                <div className="system-capability">
                  <div className="capability-header">
                    <Target size={32} />
                    <h3>Precision Systems Design</h3>
                  </div>
                  <div className="capability-specs">
                    <div className="capability-metric">
                      <span className="cap-label">Positioning Accuracy</span>
                      <span className="cap-value">10-30 nanometers</span>
                    </div>
                    <div className="capability-metric">
                      <span className="cap-label">System Stability</span>
                      <span className="cap-value">&lt;0.1% drift</span>
                    </div>
                    <div className="capability-metric">
                      <span className="cap-label">Operating Environment</span>
                      <span className="cap-value">4K to 300K</span>
                    </div>
                  </div>
                </div>

                <div className="system-capability">
                  <div className="capability-header">
                    <Zap size={32} />
                    <h3>Process Automation</h3>
                  </div>
                  <div className="capability-specs">
                    <div className="capability-metric">
                      <span className="cap-label">Efficiency Improvement</span>
                      <span className="cap-value">80% optimization</span>
                    </div>
                    <div className="capability-metric">
                      <span className="cap-label">Processing Speed</span>
                      <span className="cap-value">69 seconds/unit</span>
                    </div>
                    <div className="capability-metric">
                      <span className="cap-label">Volume Capability</span>
                      <span className="cap-value">800+ units/day</span>
                    </div>
                  </div>
                </div>

                <div className="system-capability">
                  <div className="capability-header">
                    <Activity size={32} />
                    <h3>Quality Assurance</h3>
                  </div>
                  <div className="capability-specs">
                    <div className="capability-metric">
                      <span className="cap-label">Measurement Precision</span>
                      <span className="cap-value">&lt;0.003mm flatness</span>
                    </div>
                    <div className="capability-metric">
                      <span className="cap-label">System Reliability</span>
                      <span className="cap-value">99.9% uptime</span>
                    </div>
                    <div className="capability-metric">
                      <span className="cap-label">Validation Protocol</span>
                      <span className="cap-value">ISO compliant</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Professional Experience - Tesla Data Style */}
      <section id="performance" className="tesla-white-experience">
        <div className="tesla-container">
          <h2>Professional Performance</h2>
          <p className="section-subtitle">Quantified impact and technical achievements across engineering roles</p>
          
          <div className="experience-data-grid">
            {mockData.experience.map((exp, index) => (
              <motion.div 
                key={index}
                className="tesla-white-exp-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="exp-data-header">
                  <div className="exp-timeline">
                    <div className="exp-period">{exp.period}</div>
                    <div className="exp-category">{exp.category}</div>
                  </div>
                  <div className="exp-impact-score">
                    <div className="impact-number">{exp.keyMetrics[0].value}</div>
                    <div className="impact-label">Impact</div>
                  </div>
                </div>
                
                <div className="exp-data-content">
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  
                  <div className="exp-key-metrics">
                    {exp.keyMetrics.map((metric, mIndex) => (
                      <div key={mIndex} className="key-metric">
                        <div className="metric-value-large">{metric.value}</div>
                        <div className="metric-description">{metric.description}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="exp-achievements-list">
                    {exp.achievements.slice(0, 3).map((achievement, achIndex) => (
                      <div key={achIndex} className="achievement-point">
                        <div className="achievement-bullet">•</div>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Engineering Focus */}
      <section id="projects" className="tesla-white-projects">
        <div className="tesla-container">
          <h2>Engineering Projects</h2>
          <p className="section-subtitle">Breakthrough innovations and technical implementations</p>
          
          <div className="projects-engineering-grid">
            {mockData.projects.map((project, index) => (
              <motion.div 
                key={index}
                className={`engineering-project-card ${project.featured ? 'breakthrough' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {project.featured && (
                  <div className="breakthrough-badge">
                    <Award size={16} />
                    <span>Breakthrough Innovation</span>
                  </div>
                )}
                
                <div className="project-engineering-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <div className="project-category-tag">{project.category}</div>
                  </div>
                  
                  <p className="project-engineering-desc">{project.description}</p>
                  
                  <div className="project-specifications-grid">
                    <h4>Technical Specifications</h4>
                    {project.specifications.slice(0, 4).map((spec, specIndex) => (
                      <div key={specIndex} className="project-spec-item">
                        <span className="spec-bullet">▸</span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="project-tech-stack">
                    {project.technologies.slice(0, 5).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag-white">{tech}</span>
                    ))}
                  </div>
                  
                  {project.featured && (
                    <Link to="/prism" className="project-engineering-cta">
                      <span>View Technical Documentation</span>
                      <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tesla White Footer */}
      <footer className="tesla-white-footer">
        <div className="tesla-container">
          <div className="footer-white-content">
            <div className="footer-engineering-info">
              <h3>ENGINEERING PORTFOLIO</h3>
              <p>Nanotechnology Engineering Student</p>
              <div className="footer-credentials">
                <span>University of Waterloo</span>
                <span>•</span>
                <span>Co-operative Education Program</span>
                <span>•</span>
                <span>Expected 2026</span>
              </div>
              <div className="availability-status">
                <div className="status-indicator available"></div>
                <span>Available for Final Co-op Term</span>
              </div>
            </div>
            
            <div className="footer-engineering-specs">
              <div className="footer-spec-group">
                <h4>Core Competencies</h4>
                <div className="footer-specs-list">
                  <div className="footer-spec">
                    <span className="spec-name">Precision Engineering</span>
                    <span className="spec-capability">Nanometer-scale</span>
                  </div>
                  <div className="footer-spec">
                    <span className="spec-name">Process Optimization</span>
                    <span className="spec-capability">80% improvement</span>
                  </div>
                  <div className="footer-spec">
                    <span className="spec-name">System Design</span>
                    <span className="spec-capability">Advanced microscopy</span>
                  </div>
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