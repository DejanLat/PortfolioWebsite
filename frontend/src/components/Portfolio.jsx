import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Github, ExternalLink, Award, Users, Clock, TrendingUp, Target, Zap, Activity, Layers, ArrowRight, Play, Pause, BarChart3, Settings, Cpu, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import mockData from '../data/mock';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('performance');
  const [scrollY, setScrollY] = useState(0);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [currentEquipmentImage, setCurrentEquipmentImage] = useState(0);
  const [currentProjectImage, setCurrentProjectImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero Image Carousel
  const heroImages = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Electron_microscope_bw.jpg/800px-Electron_microscope_bw.jpg",
      title: "Advanced Microscopy Systems",
      description: "Precision engineering at nanometer scale"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/CNC_machine_working.jpg/800px-CNC_machine_working.jpg",
      title: "CNC Manufacturing Excellence", 
      description: "Aerospace-grade precision machining"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Atomic_force_microscope_block_diagram.svg/800px-Atomic_force_microscope_block_diagram.svg.png",
      title: "Atomic Force Microscopy",
      description: "Surface characterization expertise"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Lab_bench.jpg/800px-Lab_bench.jpg",
      title: "Research Laboratory Setup",
      description: "Advanced instrumentation facility"
    }
  ];

  // Equipment Images
  const equipmentImages = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Scanning_electron_microscope_sample_stage.jpg/800px-Scanning_electron_microscope_sample_stage.jpg",
      title: "SEM Sample Stage",
      category: "Electron Microscopy"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/TGA_instrument.jpg/800px-TGA_instrument.jpg",
      title: "Thermogravimetric Analyzer",
      category: "Thermal Analysis"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/AFM_cantilever.jpg/800px-AFM_cantilever.jpg",
      title: "AFM Cantilever System",
      category: "Surface Analysis"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Universal_testing_machine.jpg/800px-Universal_testing_machine.jpg",
      title: "Universal Testing Machine",
      category: "Mechanical Testing"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/CNC_lathe.jpg/800px-CNC_lathe.jpg",
      title: "CNC Precision Lathe",
      category: "Manufacturing"
    }
  ];

  // Project Images
  const projectImages = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Optical_microscope_components.jpg/800px-Optical_microscope_components.jpg",
      title: "Optical System Components",
      description: "PRISM microscope optical path design"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Precision_engineering_tools.jpg/800px-Precision_engineering_tools.jpg",
      title: "Precision Engineering Tools",
      description: "Manufacturing process optimization"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Data_visualization_dashboard.jpg/800px-Data_visualization_dashboard.jpg",
      title: "Data Analytics Dashboard",
      description: "Big Query processing visualization"
    }
  ];

  // Auto-advance carousels
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentHeroImage(prev => (prev + 1) % heroImages.length);
      setCurrentEquipmentImage(prev => (prev + 1) % equipmentImages.length);
      setCurrentProjectImage(prev => (prev + 1) % projectImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPlaying, heroImages.length, equipmentImages.length, projectImages.length]);

  return (
    <div className="engineering-portfolio">
      {/* Enhanced Tesla Navigation */}
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
          <div className="nav-carousel-controls">
            <button 
              className={`carousel-play-btn ${isPlaying ? 'playing' : 'paused'}`}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero with Image Carousel */}
      <section className="tesla-white-hero-enhanced">
        <div className="hero-visual-container">
          <div className="hero-image-carousel">
            <div className="carousel-image-wrapper">
              <img 
                src={heroImages[currentHeroImage].url}
                alt={heroImages[currentHeroImage].title}
                className="hero-carousel-image"
              />
              <div className="hero-image-overlay">
                <div className="image-info">
                  <h4>{heroImages[currentHeroImage].title}</h4>
                  <p>{heroImages[currentHeroImage].description}</p>
                </div>
              </div>
            </div>
            
            <div className="carousel-navigation">
              <button 
                className="carousel-nav-btn prev"
                onClick={() => setCurrentHeroImage(prev => (prev - 1 + heroImages.length) % heroImages.length)}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                className="carousel-nav-btn next"
                onClick={() => setCurrentHeroImage(prev => (prev + 1) % heroImages.length)}
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="carousel-indicators">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentHeroImage ? 'active' : ''}`}
                  onClick={() => setCurrentHeroImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="hero-content-container">
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

            {/* Enhanced Metrics with Visual Indicators */}
            <div className="engineering-metrics-enhanced">
              <div className="metric-card-enhanced featured">
                <div className="metric-icon">
                  <TrendingUp size={24} />
                </div>
                <div className="metric-content">
                  <div className="metric-number">20%</div>
                  <div className="metric-label">CAPACITY INCREASE</div>
                  <div className="metric-detail">Production optimization delivered</div>
                  <div className="metric-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '20%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="metric-card-enhanced">
                <div className="metric-icon">
                  <Zap size={24} />
                </div>
                <div className="metric-content">
                  <div className="metric-number">80%</div>
                  <div className="metric-label">PROCESS EFFICIENCY</div>
                  <div className="metric-detail">Industrial automation achieved</div>
                  <div className="metric-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="metric-card-enhanced">
                <div className="metric-icon">
                  <Activity size={24} />
                </div>
                <div className="metric-content">
                  <div className="metric-number">800+</div>
                  <div className="metric-label">UNITS AUTOMATED</div>
                  <div className="metric-detail">Shipping cards processed</div>
                  <div className="metric-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="metric-card-enhanced">
                <div className="metric-icon">
                  <Target size={24} />
                </div>
                <div className="metric-content">
                  <div className="metric-number">10nm</div>
                  <div className="metric-label">PRECISION ACHIEVED</div>
                  <div className="metric-detail">PRISM system resolution</div>
                  <div className="metric-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
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
        </div>
      </section>

      {/* Visual Statistics Overview */}
      <section className="stats-overview">
        <div className="tesla-container">
          <div className="stats-grid">
            <div className="stat-visual-card">
              <div className="stat-icon-large">
                <Award size={48} />
              </div>
              <div className="stat-data">
                <div className="stat-number">5+</div>
                <div className="stat-label">Patents & Publications</div>
                <div className="stat-description">Breakthrough innovations in precision optics and microscopy systems</div>
              </div>
            </div>
            
            <div className="stat-visual-card">
              <div className="stat-icon-large">
                <Users size={48} />
              </div>
              <div className="stat-data">
                <div className="stat-number">3</div>
                <div className="stat-label">Major Co-op Terms</div>
                <div className="stat-description">Industrial experience in aerospace, manufacturing, and research</div>
              </div>
            </div>
            
            <div className="stat-visual-card">
              <div className="stat-icon-large">
                <BarChart3 size={48} />
              </div>
              <div className="stat-data">
                <div className="stat-number">15+</div>
                <div className="stat-label">Technical Skills</div>
                <div className="stat-description">Advanced proficiency in analysis equipment and software systems</div>
              </div>
            </div>
            
            <div className="stat-visual-card">
              <div className="stat-icon-large">
                <Eye size={48} />
              </div>
              <div className="stat-data">
                <div className="stat-number">2026</div>
                <div className="stat-label">Graduation Year</div>
                <div className="stat-description">Bachelor of Engineering, Nanotechnology, University of Waterloo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Specifications with Equipment Carousel */}
      <section id="specifications" className="tesla-white-specs-enhanced">
        <div className="tesla-container">
          <div className="specs-header-enhanced">
            <h2>Engineering Specifications</h2>
            <p>Comprehensive technical capabilities with advanced equipment proficiency</p>
            
            <div className="tesla-white-tabs">
              <button 
                className={`tesla-white-tab ${activeTab === 'performance' ? 'active' : ''}`}
                onClick={() => setActiveTab('performance')}
              >
                <BarChart3 size={16} />
                <span>Performance Data</span>
              </button>
              <button 
                className={`tesla-white-tab ${activeTab === 'equipment' ? 'active' : ''}`}
                onClick={() => setActiveTab('equipment')}
              >
                <Settings size={16} />
                <span>Equipment Mastery</span>
              </button>
              <button 
                className={`tesla-white-tab ${activeTab === 'software' ? 'active' : ''}`}
                onClick={() => setActiveTab('software')}
              >
                <Cpu size={16} />
                <span>Software Proficiency</span>
              </button>
              <button 
                className={`tesla-white-tab ${activeTab === 'systems' ? 'active' : ''}`}
                onClick={() => setActiveTab('systems')}
              >
                <Target size={16} />
                <span>System Design</span>
              </button>
            </div>
          </div>

          <div className="specs-visual-content">
            {activeTab === 'equipment' && (
              <div className="equipment-showcase">
                <div className="equipment-carousel-section">
                  <div className="equipment-carousel">
                    <div className="equipment-image-container">
                      <img 
                        src={equipmentImages[currentEquipmentImage].url}
                        alt={equipmentImages[currentEquipmentImage].title}
                        className="equipment-image"
                      />
                      <div className="equipment-image-info">
                        <h4>{equipmentImages[currentEquipmentImage].title}</h4>
                        <p>{equipmentImages[currentEquipmentImage].category}</p>
                      </div>
                    </div>
                    
                    <div className="equipment-carousel-nav">
                      <button 
                        onClick={() => setCurrentEquipmentImage(prev => (prev - 1 + equipmentImages.length) % equipmentImages.length)}
                        className="carousel-nav-btn"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button 
                        onClick={() => setCurrentEquipmentImage(prev => (prev + 1) % equipmentImages.length)}
                        className="carousel-nav-btn"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="equipment-specs-detailed">
                  <div className="equipment-category-enhanced">
                    <div className="category-header-enhanced">
                      <h3>Analysis & Characterization Equipment</h3>
                      <div className="proficiency-indicator expert">Expert Level</div>
                    </div>
                    <div className="equipment-grid-visual">
                      {mockData.skills.machines.map((machine, index) => (
                        <div key={index} className="equipment-item-visual">
                          <div className="equipment-icon-bg">
                            <Settings size={20} />
                          </div>
                          <div className="equipment-details">
                            <div className="equipment-name">{machine}</div>
                            <div className="equipment-proficiency">
                              <div className="proficiency-bar-container">
                                <div className="proficiency-bar-bg">
                                  <div className="proficiency-bar-fill expert" style={{width: '95%'}}></div>
                                </div>
                                <span className="proficiency-text">Certified</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'performance' && (
              <div className="performance-dashboard">
                <div className="performance-charts">
                  <div className="chart-container">
                    <h3>Academic Performance</h3>
                    <div className="performance-metrics-visual">
                      <div className="metric-visual-item">
                        <div className="metric-visual-header">
                          <span className="metric-label">Institution Ranking</span>
                          <span className="metric-value">Top 50 Global</span>
                        </div>
                        <div className="metric-visual-bar">
                          <div className="visual-bar-fill" style={{width: '95%'}}></div>
                        </div>
                      </div>
                      
                      <div className="metric-visual-item">
                        <div className="metric-visual-header">
                          <span className="metric-label">Program Specialization</span>
                          <span className="metric-value">Nanotechnology Engineering</span>
                        </div>
                        <div className="metric-visual-bar">
                          <div className="visual-bar-fill" style={{width: '100%'}}></div>
                        </div>
                      </div>
                      
                      <div className="metric-visual-item">
                        <div className="metric-visual-header">
                          <span className="metric-label">Co-op Program</span>
                          <span className="metric-value">Advanced Track</span>
                        </div>
                        <div className="metric-visual-bar">
                          <div className="visual-bar-fill" style={{width: '90%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="chart-container">
                    <h3>Industrial Impact</h3>
                    <div className="impact-visualization">
                      <div className="impact-circle-chart">
                        <div className="circle-chart" data-percentage="20">
                          <div className="circle-chart-inner">
                            <span className="circle-chart-value">20%</span>
                            <span className="circle-chart-label">Capacity</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="impact-circle-chart">
                        <div className="circle-chart" data-percentage="80">
                          <div className="circle-chart-inner">
                            <span className="circle-chart-value">80%</span>
                            <span className="circle-chart-label">Efficiency</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="impact-circle-chart">
                        <div className="circle-chart" data-percentage="100">
                          <div className="circle-chart-inner">
                            <span className="circle-chart-value">800+</span>
                            <span className="circle-chart-label">Units</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'software' && (
              <div className="software-mastery-visual">
                <div className="software-categories-grid">
                  <div className="software-category-visual">
                    <div className="category-header-visual">
                      <Cpu size={32} />
                      <h3>Engineering Software</h3>
                      <div className="overall-score">95%</div>
                    </div>
                    <div className="software-items-visual">
                      {mockData.skills.frameworks.map((framework, index) => (
                        <div key={index} className="software-item-visual">
                          <div className="software-name-visual">{framework}</div>
                          <div className="software-mastery-indicator">
                            <div className="mastery-dots">
                              <div className="dot active"></div>
                              <div className="dot active"></div>
                              <div className="dot active"></div>
                              <div className="dot active"></div>
                              <div className="dot"></div>
                            </div>
                            <span className="mastery-level">Advanced</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="software-category-visual">
                    <div className="category-header-visual">
                      <Activity size={32} />
                      <h3>Programming Languages</h3>
                      <div className="overall-score">92%</div>
                    </div>
                    <div className="software-items-visual">
                      {mockData.skills.languages.map((language, index) => (
                        <div key={index} className="software-item-visual">
                          <div className="software-name-visual">{language}</div>
                          <div className="software-mastery-indicator">
                            <div className="mastery-dots">
                              <div className="dot active"></div>
                              <div className="dot active"></div>
                              <div className="dot active"></div>
                              <div className="dot active"></div>
                              <div className="dot active"></div>
                            </div>
                            <span className="mastery-level">Expert</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'systems' && (
              <div className="systems-design-showcase">
                <div className="systems-capabilities-visual">
                  <div className="capability-card-visual">
                    <div className="capability-icon-container">
                      <Target size={48} />
                    </div>
                    <h3>Precision Systems Design</h3>
                    <div className="capability-metrics-visual">
                      <div className="metric-visual-row">
                        <span className="metric-name">Positioning Accuracy</span>
                        <span className="metric-value-highlight">10-30 nanometers</span>
                      </div>
                      <div className="metric-visual-row">
                        <span className="metric-name">System Stability</span>
                        <span className="metric-value-highlight">&lt;0.1% drift</span>
                      </div>
                      <div className="metric-visual-row">
                        <span className="metric-name">Operating Range</span>
                        <span className="metric-value-highlight">4K to 300K</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="capability-card-visual">
                    <div className="capability-icon-container">
                      <Zap size={48} />
                    </div>
                    <h3>Process Automation</h3>
                    <div className="capability-metrics-visual">
                      <div className="metric-visual-row">
                        <span className="metric-name">Efficiency Improvement</span>
                        <span className="metric-value-highlight">80% optimization</span>
                      </div>
                      <div className="metric-visual-row">
                        <span className="metric-name">Processing Speed</span>
                        <span className="metric-value-highlight">69 seconds/unit</span>
                      </div>
                      <div className="metric-visual-row">
                        <span className="metric-name">Volume Capability</span>
                        <span className="metric-value-highlight">800+ units/day</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="capability-card-visual">
                    <div className="capability-icon-container">
                      <Activity size={48} />
                    </div>
                    <h3>Quality Assurance</h3>
                    <div className="capability-metrics-visual">
                      <div className="metric-visual-row">
                        <span className="metric-name">Measurement Precision</span>
                        <span className="metric-value-highlight">&lt;0.003mm flatness</span>
                      </div>
                      <div className="metric-visual-row">
                        <span className="metric-name">System Reliability</span>
                        <span className="metric-value-highlight">99.9% uptime</span>
                      </div>
                      <div className="metric-visual-row">
                        <span className="metric-name">Validation Protocol</span>
                        <span className="metric-value-highlight">ISO compliant</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Enhanced Experience with Timeline Visuals */}
      <section id="performance" className="tesla-white-experience-enhanced">
        <div className="tesla-container">
          <h2>Professional Performance</h2>
          <p className="section-subtitle">Quantified impact and technical achievements across engineering roles</p>
          
          <div className="experience-timeline-visual">
            {mockData.experience.map((exp, index) => (
              <motion.div 
                key={index}
                className="experience-card-visual"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="exp-visual-header">
                  <div className="exp-image-container">
                    <img 
                      src={exp.image || `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Engineering_workplace.jpg/400px-Engineering_workplace.jpg`}
                      alt={exp.company}
                      className="exp-company-image"
                    />
                    <div className="exp-period-overlay">{exp.period}</div>
                  </div>
                  
                  <div className="exp-header-content">
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}</h4>
                    <div className="exp-category-tag">{exp.category}</div>
                  </div>
                  
                  <div className="exp-impact-visualization">
                    <div className="impact-score-circle">
                      <div className="impact-score-value">{exp.keyMetrics[0].value}</div>
                      <div className="impact-score-label">Primary Impact</div>
                    </div>
                  </div>
                </div>
                
                <div className="exp-metrics-grid">
                  {exp.keyMetrics.map((metric, mIndex) => (
                    <div key={mIndex} className="metric-card-compact">
                      <div className="metric-icon-compact">
                        {metric.value.includes('%') && <TrendingUp size={16} />}
                        {metric.value.includes('+') && <Activity size={16} />}
                        {!metric.value.includes('%') && !metric.value.includes('+') && <Target size={16} />}
                      </div>
                      <div className="metric-content-compact">
                        <div className="metric-value-compact">{metric.value}</div>
                        <div className="metric-desc-compact">{metric.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="exp-achievements-visual">
                  {exp.achievements.slice(0, 3).map((achievement, achIndex) => (
                    <div key={achIndex} className="achievement-item-visual">
                      <div className="achievement-marker"></div>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects with Image Carousel */}
      <section id="projects" className="tesla-white-projects-enhanced">
        <div className="tesla-container">
          <h2>Engineering Projects</h2>
          <p className="section-subtitle">Breakthrough innovations with visual documentation</p>
          
          <div className="projects-showcase">
            <div className="projects-carousel-section">
              <div className="project-main-carousel">
                <div className="project-image-container">
                  <img 
                    src={projectImages[currentProjectImage].url}
                    alt={projectImages[currentProjectImage].title}
                    className="project-carousel-image"
                  />
                  <div className="project-image-overlay">
                    <h4>{projectImages[currentProjectImage].title}</h4>
                    <p>{projectImages[currentProjectImage].description}</p>
                  </div>
                </div>
                
                <div className="project-carousel-controls">
                  <button 
                    onClick={() => setCurrentProjectImage(prev => (prev - 1 + projectImages.length) % projectImages.length)}
                    className="carousel-control-btn"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={() => setCurrentProjectImage(prev => (prev + 1) % projectImages.length)}
                    className="carousel-control-btn"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="projects-grid-enhanced">
              {mockData.projects.map((project, index) => (
                <motion.div 
                  key={index}
                  className={`project-card-enhanced ${project.featured ? 'breakthrough' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {project.featured && (
                    <div className="breakthrough-badge-enhanced">
                      <Award size={16} />
                      <span>Breakthrough Innovation</span>
                    </div>
                  )}
                  
                  <div className="project-visual-header">
                    <div className="project-icon-container">
                      {project.featured ? <Target size={32} /> : <Settings size={32} />}
                    </div>
                    <div className="project-category-visual">{project.category}</div>
                  </div>
                  
                  <div className="project-content-enhanced">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    
                    <div className="project-specs-visual">
                      <h4>Technical Specifications</h4>
                      <div className="specs-checklist">
                        {project.specifications.slice(0, 4).map((spec, specIndex) => (
                          <div key={specIndex} className="spec-check-item">
                            <div className="spec-check-mark">✓</div>
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="project-tech-visual">
                      {project.technologies.slice(0, 5).map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge-visual">{tech}</span>
                      ))}
                    </div>
                    
                    {project.featured && (
                      <Link to="/prism" className="project-cta-enhanced">
                        <span>View Complete System Documentation</span>
                        <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer with Visual Elements */}
      <footer className="tesla-white-footer-enhanced">
        <div className="tesla-container">
          <div className="footer-content-enhanced">
            <div className="footer-branding-section">
              <h3>ENGINEERING PORTFOLIO</h3>
              <p>Nanotechnology Engineering Student</p>
              <div className="footer-credentials-visual">
                <div className="credential-item">
                  <div className="credential-icon">
                    <Award size={16} />
                  </div>
                  <span>University of Waterloo</span>
                </div>
                <div className="credential-item">
                  <div className="credential-icon">
                    <Users size={16} />
                  </div>
                  <span>Co-operative Education</span>
                </div>
                <div className="credential-item">
                  <div className="credential-icon">
                    <Target size={16} />
                  </div>
                  <span>Expected 2026</span>
                </div>
              </div>
              
              <div className="availability-status-enhanced">
                <div className="status-indicator-enhanced available">
                  <div className="status-pulse"></div>
                </div>
                <div className="status-text">
                  <span className="status-main">Available for Final Co-op Term</span>
                  <span className="status-detail">Seeking advanced engineering opportunities</span>
                </div>
              </div>
            </div>
            
            <div className="footer-competencies-visual">
              <h4>Core Engineering Competencies</h4>
              <div className="competencies-grid">
                <div className="competency-item">
                  <div className="competency-icon">
                    <Target size={20} />
                  </div>
                  <div className="competency-details">
                    <span className="competency-name">Precision Engineering</span>
                    <span className="competency-level">Nanometer-scale expertise</span>
                  </div>
                </div>
                
                <div className="competency-item">
                  <div className="competency-icon">
                    <Zap size={20} />
                  </div>
                  <div className="competency-details">
                    <span className="competency-name">Process Optimization</span>
                    <span className="competency-level">80% improvement achieved</span>
                  </div>
                </div>
                
                <div className="competency-item">
                  <div className="competency-icon">
                    <Settings size={20} />
                  </div>
                  <div className="competency-details">
                    <span className="competency-name">Advanced Microscopy</span>
                    <span className="competency-level">PRISM system development</span>
                  </div>
                </div>
                
                <div className="competency-item">
                  <div className="competency-icon">
                    <Activity size={20} />
                  </div>
                  <div className="competency-details">
                    <span className="competency-name">Industrial Automation</span>
                    <span className="competency-level">Manufacturing optimization</span>
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