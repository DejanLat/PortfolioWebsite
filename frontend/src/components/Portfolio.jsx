import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Github, ExternalLink, Award, Users, Clock, TrendingUp, Play, Pause, ChevronLeft } from 'lucide-react';
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
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="nav-header">
        <div className="nav-content">
          <div className="nav-logo">
            <h3>{mockData.personalInfo.name}</h3>
            <span className="nav-title">Nanotechnology Engineer</span>
          </div>
          <div className="nav-links">
            <a href="#about" className="nav-link">Technical Profile</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#research" className="nav-link">Research</a>
            <Link to="/prism" className="nav-link-primary">PRISM Microscope</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Technical Showcase */}
      <section className="hero-section">
        <div className="hero-backdrop">
          <img 
            src="https://images.unsplash.com/photo-1576141546153-3e04370b5ff7"
            alt="Nanotechnology Engineering"
            className="hero-background"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-main">
            <div className="hero-badge">
              <span>Breakthrough Innovation</span>
              <div className="badge-pulse"></div>
            </div>
            <h1 className="hero-title">
              Precision Engineering at the
              <span className="hero-accent"> Nanoscale</span>
            </h1>
            <p className="hero-description">
              Developing revolutionary microscopy systems and quantum sensing technologies. 
              Specialized in cryogenic imaging, piezo motor control, and high-precision optical systems 
              for next-generation research applications.
            </p>
            
            {/* Achievement Metrics */}
            <div className="hero-metrics">
              <div className="metric-card">
                <div className="metric-value">5+</div>
                <div className="metric-label">Patents & Research Publications</div>
                <div className="metric-description">Breakthrough innovations in precision optics</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">20%</div>
                <div className="metric-label">Process Optimization</div>
                <div className="metric-description">Increased production capacity at Pirlitor</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">80%</div>
                <div className="metric-label">Efficiency Improvement</div>
                <div className="metric-description">Industrial process automation</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">49x</div>
                <div className="metric-label">PRISM Magnification</div>
                <div className="metric-description">Stable microscopy system</div>
              </div>
            </div>

            <div className="hero-cta">
              <Link to="/prism" className="cta-primary">
                <span>Explore PRISM Technology</span>
                <ChevronRight size={20} />
              </Link>
              <a href="#technical-portfolio" className="cta-secondary">
                <span>View Technical Portfolio</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Technical Portfolio Carousel */}
      <section id="technical-portfolio" className="portfolio-carousel-section">
        <div className="carousel-container">
          <div className="carousel-header">
            <h2>Technical Portfolio</h2>
            <p>Advanced engineering projects showcasing precision optics, quantum systems, and nanotechnology applications</p>
          </div>
          
          <div className="carousel-wrapper">
            <button className="carousel-btn prev" onClick={prevImage}>
              <ChevronLeft size={24} />
            </button>
            
            <div className="carousel-content">
              <div className="carousel-image-container">
                <img 
                  src={carouselImages[currentImageIndex].url}
                  alt={carouselImages[currentImageIndex].title}
                  className="carousel-image"
                />
                <div className="image-overlay">
                  <div className="image-info">
                    <h3>{carouselImages[currentImageIndex].title}</h3>
                    <p>{carouselImages[currentImageIndex].description}</p>
                    <div className="tech-badges">
                      {carouselImages[currentImageIndex].technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="carousel-details">
                <div className="detail-header">
                  <h3>{carouselImages[currentImageIndex].title}</h3>
                  <div className="detail-category">{carouselImages[currentImageIndex].category}</div>
                </div>
                <p className="detail-description">{carouselImages[currentImageIndex].description}</p>
                
                <div className="detail-specs">
                  <h4>Key Specifications</h4>
                  <ul>
                    {carouselImages[currentImageIndex].specifications.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>

                <div className="detail-impact">
                  <h4>Impact & Results</h4>
                  <div className="impact-metrics">
                    {carouselImages[currentImageIndex].impact.map((item, index) => (
                      <div key={index} className="impact-item">
                        <span className="impact-value">{item.value}</span>
                        <span className="impact-label">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <button className="carousel-btn next" onClick={nextImage}>
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="carousel-indicators">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications Dashboard */}
      <section id="about" className="specs-dashboard">
        <div className="specs-container">
          <div className="specs-header">
            <h2>Technical Specifications</h2>
            <p>Comprehensive overview of equipment proficiency, software expertise, and engineering capabilities</p>
            <div className="spec-tabs">
              <button 
                className={`spec-tab ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                System Overview
              </button>
              <button 
                className={`spec-tab ${activeTab === 'equipment' ? 'active' : ''}`}
                onClick={() => setActiveTab('equipment')}
              >
                Equipment Mastery
              </button>
              <button 
                className={`spec-tab ${activeTab === 'software' ? 'active' : ''}`}
                onClick={() => setActiveTab('software')}
              >
                Software Proficiency
              </button>
              <button 
                className={`spec-tab ${activeTab === 'research' ? 'active' : ''}`}
                onClick={() => setActiveTab('research')}
              >
                Research Focus
              </button>
            </div>
          </div>

          <div className="specs-content">
            {activeTab === 'overview' && (
              <div className="spec-grid-enhanced">
                <div className="spec-section-card">
                  <div className="spec-card-header">
                    <h3>Academic Profile</h3>
                    <div className="spec-status-badge">Active</div>
                  </div>
                  <div className="spec-items-enhanced">
                    <div className="spec-item-enhanced">
                      <span className="spec-label-enhanced">Institution</span>
                      <span className="spec-value-enhanced">University of Waterloo</span>
                      <span className="spec-detail">Co-operative Education Program</span>
                    </div>
                    <div className="spec-item-enhanced">
                      <span className="spec-label-enhanced">Specialization</span>
                      <span className="spec-value-enhanced">Nanotechnology Engineering</span>
                      <span className="spec-detail">Focus: Precision Optics & Quantum Systems</span>
                    </div>
                    <div className="spec-item-enhanced">
                      <span className="spec-label-enhanced">Research Areas</span>
                      <span className="spec-value-enhanced">Cryogenic Imaging</span>
                      <span className="spec-detail">Quantum Sensing, Microscopy Systems</span>
                    </div>
                  </div>
                </div>

                <div className="spec-section-card">
                  <div className="spec-card-header">
                    <h3>Core Competencies</h3>
                    <div className="spec-status-badge expert">Expert</div>
                  </div>
                  <div className="spec-items-enhanced">
                    <div className="spec-item-enhanced">
                      <span className="spec-label-enhanced">Precision Engineering</span>
                      <span className="spec-value-enhanced">Nanometer Accuracy</span>
                      <span className="spec-detail">10-30nm step resolution achieved</span>
                    </div>
                    <div className="spec-item-enhanced">
                      <span className="spec-label-enhanced">Optical Systems</span>
                      <span className="spec-value-enhanced">49x Magnification</span>
                      <span className="spec-detail">Beam orthogonality preservation</span>
                    </div>
                    <div className="spec-item-enhanced">
                      <span className="spec-label-enhanced">Process Optimization</span>
                      <span className="spec-value-enhanced">80% Efficiency Gain</span>
                      <span className="spec-detail">Industrial automation expertise</span>
                    </div>
                  </div>
                </div>

                <div className="spec-section-card full-width">
                  <div className="spec-card-header">
                    <h3>Innovation Timeline</h3>
                    <div className="spec-status-badge">Ongoing</div>
                  </div>
                  <div className="innovation-timeline">
                    <div className="timeline-item">
                      <div className="timeline-marker active"></div>
                      <div className="timeline-content">
                        <span className="timeline-date">2023</span>
                        <h4>PRISM Development</h4>
                        <p>Revolutionary scanning microscope design</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-marker active"></div>
                      <div className="timeline-content">
                        <span className="timeline-date">2023</span>
                        <h4>Industrial Co-op</h4>
                        <p>20% capacity increase at Pirlitor</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <span className="timeline-date">2025</span>
                        <h4>Final Co-op</h4>
                        <p>Seeking advanced engineering role</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'equipment' && (
              <div className="equipment-grid">
                <div className="equipment-category">
                  <div className="category-header">
                    <h3>Analysis & Characterization</h3>
                    <img src="https://images.unsplash.com/photo-1614308460927-5024ba2e1dcb" alt="Precision Equipment" className="category-image" />
                  </div>
                  <div className="equipment-items">
                    {mockData.skills.machines.map((machine, index) => (
                      <div key={index} className="equipment-item">
                        <div className="equipment-icon"></div>
                        <div className="equipment-details">
                          <span className="equipment-name">{machine}</span>
                          <span className="equipment-status">Certified</span>
                        </div>
                        <div className="proficiency-bar">
                          <div className="proficiency-fill expert"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="equipment-category">
                  <div className="category-header">
                    <h3>Fabrication & Manufacturing</h3>
                    <img src="https://images.unsplash.com/photo-1747999918007-e3442cabb23a" alt="Manufacturing Equipment" className="category-image" />
                  </div>
                  <div className="equipment-items">
                    <div className="equipment-item">
                      <div className="equipment-icon"></div>
                      <div className="equipment-details">
                        <span className="equipment-name">CNC Machining</span>
                        <span className="equipment-status">Advanced</span>
                      </div>
                      <div className="proficiency-bar">
                        <div className="proficiency-fill expert"></div>
                      </div>
                    </div>
                    <div className="equipment-item">
                      <div className="equipment-icon"></div>
                      <div className="equipment-details">
                        <span className="equipment-name">Precision Assembly</span>
                        <span className="equipment-status">Expert</span>
                      </div>
                      <div className="proficiency-bar">
                        <div className="proficiency-fill expert"></div>
                      </div>
                    </div>
                    <div className="equipment-item">
                      <div className="equipment-icon"></div>
                      <div className="equipment-details">
                        <span className="equipment-name">Optical Alignment</span>
                        <span className="equipment-status">Specialized</span>
                      </div>
                      <div className="proficiency-bar">
                        <div className="proficiency-fill expert"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'software' && (
              <div className="software-grid">
                <div className="software-category">
                  <div className="category-header">
                    <h3>Engineering & Design</h3>
                    <img src="https://images.unsplash.com/photo-1748261759887-faa2a9d76471" alt="CAD Design" className="category-image" />
                  </div>
                  <div className="software-stack">
                    {mockData.skills.frameworks.map((framework, index) => (
                      <div key={index} className="software-item">
                        <div className="software-info">
                          <span className="software-name">{framework}</span>
                          <span className="version-info">Latest</span>
                        </div>
                        <div className="usage-indicator">
                          <div className="usage-fill high"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="software-category">
                  <div className="category-header">
                    <h3>Programming & Analysis</h3>
                    <img src="https://images.unsplash.com/photo-1631375937044-6dd5beac01d2" alt="Programming" className="category-image" />
                  </div>
                  <div className="software-stack">
                    {mockData.skills.languages.map((language, index) => (
                      <div key={index} className="software-item">
                        <div className="software-info">
                          <span className="software-name">{language}</span>
                          <span className="version-info">Production</span>
                        </div>
                        <div className="usage-indicator">
                          <div className="usage-fill high"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'research' && (
              <div className="research-grid">
                <div className="research-focus">
                  <div className="research-header">
                    <h3>Current Research Focus</h3>
                    <img src="https://images.unsplash.com/photo-1579684256060-d5a308109e21" alt="Quantum Research" className="research-image" />
                  </div>
                  <div className="research-areas">
                    <div className="research-area">
                      <h4>Quantum Sensing Systems</h4>
                      <p>Development of nitrogen-vacancy center microscopy for magnetic field detection</p>
                      <div className="research-metrics">
                        <span>Sensitivity: nT-level</span>
                        <span>Resolution: Sub-micron</span>
                      </div>
                    </div>
                    <div className="research-area">
                      <h4>Cryogenic Imaging</h4>
                      <p>Ultra-low temperature optical systems for quantum material characterization</p>
                      <div className="research-metrics">
                        <span>Temperature: 4K-300K</span>
                        <span>Stability: &lt;0.1% drift</span>
                      </div>
                    </div>
                    <div className="research-area">
                      <h4>Precision Microscopy</h4>
                      <p>Advanced scanning probe techniques for nanoscale surface analysis</p>
                      <div className="research-metrics">
                        <span>Resolution: 10-30nm</span>
                        <span>Range: ±12.5mm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Experience Section with Enhanced Visuals */}
      <section id="experience" className="experience-section-enhanced">
        <div className="experience-container">
          <h2>Professional Experience</h2>
          <p className="section-subtitle">Track record of delivering quantifiable results in advanced engineering environments</p>
          
          <div className="experience-timeline-enhanced">
            {mockData.experience.map((exp, index) => (
              <motion.div 
                key={index}
                className="experience-card-enhanced"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="exp-visual">
                  <img 
                    src={exp.image} 
                    alt={exp.company}
                    className="exp-image"
                  />
                  <div className="exp-overlay">
                    <span className="exp-category">{exp.category}</span>
                  </div>
                </div>
                
                <div className="exp-content">
                  <div className="exp-header-enhanced">
                    <div className="exp-title-group">
                      <h3>{exp.role}</h3>
                      <h4>{exp.company}</h4>
                    </div>
                    <div className="exp-period-enhanced">{exp.period}</div>
                  </div>
                  
                  <div className="exp-impact-summary">
                    <div className="impact-highlights">
                      {exp.keyMetrics.map((metric, mIndex) => (
                        <div key={mIndex} className="impact-metric">
                          <span className="metric-value">{metric.value}</span>
                          <span className="metric-description">{metric.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="exp-achievements-enhanced">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="achievement-item-enhanced">
                        <div className="achievement-icon-enhanced">
                          {achievement.includes('20%') && <TrendingUp size={16} />}
                          {achievement.includes('800') && <Clock size={16} />}
                          {achievement.includes('80%') && <Award size={16} />}
                          {achievement.includes('framework') && <Users size={16} />}
                        </div>
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

      {/* Featured Projects with Technical Depth */}
      <section id="projects" className="projects-section-enhanced">
        <div className="projects-container">
          <h2>Featured Engineering Projects</h2>
          <p className="section-subtitle">Breakthrough innovations in precision engineering and nanotechnology applications</p>
          
          <div className="projects-grid-enhanced">
            {mockData.projects.map((project, index) => (
              <motion.div 
                key={index}
                className={`project-card-enhanced ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="project-image-container">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  {project.featured && (
                    <div className="featured-badge-overlay">
                      <Award size={16} />
                      <span>Breakthrough Innovation</span>
                    </div>
                  )}
                  <div className="project-overlay">
                    <div className="project-category-badge">{project.category}</div>
                  </div>
                </div>
                
                <div className="project-content-enhanced">
                  <div className="project-header-enhanced">
                    <h3>{project.title}</h3>
                    <div className="project-links-enhanced">
                      {project.github && <Github size={18} />}
                      {project.demo && <ExternalLink size={18} />}
                    </div>
                  </div>
                  
                  <p className="project-description-enhanced">{project.description}</p>
                  
                  <div className="project-specifications">
                    <h4>Key Specifications</h4>
                    <ul>
                      {project.specifications.map((spec, specIndex) => (
                        <li key={specIndex}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="project-tech-enhanced">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag-enhanced">{tech}</span>
                    ))}
                  </div>
                  
                  {project.featured && (
                    <Link to="/prism" className="project-detail-link-enhanced">
                      <span>Comprehensive Technical Analysis</span>
                      <ChevronRight size={16} />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Professional Contact */}
      <footer className="footer-enhanced">
        <div className="footer-content-enhanced">
          <div className="footer-main">
            <div className="footer-info">
              <h3>{mockData.personalInfo.name}</h3>
              <p>Nanotechnology Engineering Student</p>
              <p>University of Waterloo • Co-operative Education</p>
              <div className="footer-specialization">
                <span>Specializing in Precision Optics • Quantum Systems • Advanced Microscopy</span>
              </div>
            </div>
            
            <div className="footer-availability">
              <div className="availability-status">
                <div className="status-indicator active"></div>
                <span>Available for Co-op Opportunities</span>
              </div>
              <p>Seeking final co-op placement in advanced engineering, nanotechnology, or precision instrumentation</p>
              <div className="contact-preferences">
                <span>Open to: Full-time positions • Research collaborations • Technical consulting</span>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-credentials">
              <span>Google Data Analytics Certified • Microsoft Power BI Certified • University of Waterloo</span>
            </div>
            <div className="footer-links">
              <Link to="/prism">PRISM Technical Documentation</Link>
              <span>•</span>
              <a href="#technical-portfolio">Portfolio</a>
              <span>•</span>
              <a href="#experience">Experience</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;