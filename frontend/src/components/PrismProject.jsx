import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown, ChevronUp, ExternalLink, Download, Zap, Target, Settings, BarChart3, Microscope, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import mockData from '../data/mock';

const PrismProject = () => {
  const [expandedSection, setExpandedSection] = useState('overview');
  const [activeSpecTab, setActiveSpecTab] = useState('architecture');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? '' : section);
  };

  return (
    <div className="prism-container">
      {/* Navigation */}
      <nav className="nav-header">
        <div className="nav-content">
          <Link to="/" className="nav-back">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
          <div className="nav-logo">
            <h3>PRISM</h3>
            <span className="nav-title">Technical Documentation</span>
          </div>
          <div className="nav-actions">
            <button className="nav-button">
              <Download size={16} />
              <span>Download Specs</span>
            </button>
            <button className="nav-button">
              <ExternalLink size={16} />
              <span>Research Paper</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Technical Overview */}
      <section className="prism-hero-enhanced">
        <div className="prism-hero-backdrop">
          <img 
            src="https://images.unsplash.com/photo-1579684256060-d5a308109e21"
            alt="PRISM Microscopy System"
            className="prism-hero-bg"
          />
          <div className="prism-hero-overlay"></div>
        </div>
        
        <motion.div 
          className="prism-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="prism-header">
            <div className="prism-badge-enhanced">
              <Microscope size={16} />
              <span>Breakthrough Innovation • Patent Pending</span>
            </div>
            <h1 className="prism-title-enhanced">
              <span className="prism-acronym">PRISM</span>
              <span className="prism-full-name">Periscopic Relay Imaging Scanning Microscope</span>
            </h1>
            <p className="prism-tagline">
              Revolutionary precision optical instrument designed as a cost-effective alternative to traditional 3-axis translation stages. 
              Engineered for quantum sensing, cryogenic imaging, and advanced microscopy applications.
            </p>
          </div>
          
          {/* Key Performance Indicators */}
          <div className="prism-kpi-grid">
            <div className="kpi-card primary">
              <div className="kpi-icon">
                <Target size={24} />
              </div>
              <div className="kpi-content">
                <span className="kpi-value">49x</span>
                <span className="kpi-label">Stable Magnification</span>
                <span className="kpi-description">Consistent across full scanning range</span>
              </div>
            </div>
            
            <div className="kpi-card">
              <div className="kpi-icon">
                <Zap size={24} />
              </div>
              <div className="kpi-content">
                <span className="kpi-value">10-30nm</span>
                <span className="kpi-label">Step Resolution</span>
                <span className="kpi-description">Piezo actuator precision</span>
              </div>
            </div>
            
            <div className="kpi-card">
              <div className="kpi-icon">
                <BarChart3 size={24} />
              </div>
              <div className="kpi-content">
                <span className="kpi-value">±12.5mm</span>
                <span className="kpi-label">Travel Range</span>
                <span className="kpi-description">Three-axis scanning capability</span>
              </div>
            </div>
            
            <div className="kpi-card">
              <div className="kpi-icon">
                <Settings size={24} />
              </div>
              <div className="kpi-content">
                <span className="kpi-value">&lt;0.003mm</span>
                <span className="kpi-label">Flatness Precision</span>
                <span className="kpi-description">Crossed-roller bearing accuracy</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* System Architecture Visualization */}
      <section className="prism-architecture">
        <div className="prism-container-inner">
          <div className="architecture-header">
            <h2>System Architecture</h2>
            <p>Advanced three-axis nested framework with beam orthogonality preservation</p>
          </div>
          
          <div className="architecture-diagram">
            <div className="diagram-container">
              <div className="axis-visualization">
                {/* Z-Axis */}
                <div className="axis-component z-axis">
                  <div className="axis-label">Z-Axis</div>
                  <div className="axis-description">Vertical Focus Control</div>
                  <div className="component-details">
                    <span>Hanging Configuration</span>
                    <span>Objective Mount Only</span>
                    <span>Reduced Moving Mass</span>
                  </div>
                </div>
                
                {/* Y-Axis */}
                <div className="axis-component y-axis">
                  <div className="axis-label">Y-Axis</div>
                  <div className="axis-description">Mirror & Objective Translation</div>
                  <div className="component-details">
                    <span>Slaved to X-Axis</span>
                    <span>Independent Z Movement</span>
                    <span>Beam Reflection Geometry</span>
                  </div>
                </div>
                
                {/* X-Axis */}
                <div className="axis-component x-axis">
                  <div className="axis-label">X-Axis</div>
                  <div className="axis-description">Independent Translation</div>
                  <div className="component-details">
                    <span>Fully Independent</span>
                    <span>Y-Stage Assembly</span>
                    <span>Upper Mirror Control</span>
                  </div>
                </div>
              </div>
              
              <div className="optical-path">
                <div className="beam-path">
                  <div className="beam-line incident"></div>
                  <div className="beam-line reflected"></div>
                  <div className="mirror-element">
                    <span>Dielectric Mirror</span>
                    <span>MRA25 (Thorlabs)</span>
                  </div>
                  <div className="objective-element">
                    <span>Objective Lens</span>
                    <span>49x Magnification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Technical Specifications */}
      <section className="prism-specs-comprehensive">
        <div className="prism-container-inner">
          <div className="specs-comprehensive-header">
            <h2>Technical Specifications</h2>
            <p>Detailed engineering specifications and performance characteristics</p>
            
            <div className="spec-tabs-enhanced">
              <button 
                className={`spec-tab-enhanced ${activeSpecTab === 'architecture' ? 'active' : ''}`}
                onClick={() => setActiveSpecTab('architecture')}
              >
                <Cpu size={16} />
                <span>System Architecture</span>
              </button>
              <button 
                className={`spec-tab-enhanced ${activeSpecTab === 'optical' ? 'active' : ''}`}
                onClick={() => setActiveSpecTab('optical')}
              >
                <Target size={16} />
                <span>Optical Performance</span>
              </button>
              <button 
                className={`spec-tab-enhanced ${activeSpecTab === 'mechanical' ? 'active' : ''}`}
                onClick={() => setActiveSpecTab('mechanical')}
              >
                <Settings size={16} />
                <span>Mechanical Systems</span>
              </button>
              <button 
                className={`spec-tab-enhanced ${activeSpecTab === 'control' ? 'active' : ''}`}
                onClick={() => setActiveSpecTab('control')}
              >
                <Zap size={16} />
                <span>Control Electronics</span>
              </button>
              <button 
                className={`spec-tab-enhanced ${activeSpecTab === 'performance' ? 'active' : ''}`}
                onClick={() => setActiveSpecTab('performance')}
              >
                <BarChart3 size={16} />
                <span>Performance Metrics</span>
              </button>
            </div>
          </div>

          <div className="specs-comprehensive-content">
            {mockData.prismSpecs.map((section, index) => (
              activeSpecTab === section.id && (
                <motion.div 
                  key={section.id}
                  className="spec-section-enhanced"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="spec-section-visual">
                    <img 
                      src={section.id === 'overview' ? "https://images.unsplash.com/photo-1579684256060-d5a308109e21" :
                           section.id === 'optical' ? "https://images.unsplash.com/photo-1614308460927-5024ba2e1dcb" :
                           section.id === 'mechanical' ? "https://images.unsplash.com/photo-1747999918007-e3442cabb23a" :
                           section.id === 'control' ? "https://images.unsplash.com/photo-1631375937044-6dd5beac01d2" :
                           "https://images.unsplash.com/photo-1748261759887-faa2a9d76471"}
                      alt={section.title}
                      className="spec-section-image"
                    />
                    <div className="spec-section-overlay">
                      <h3>{section.title}</h3>
                    </div>
                  </div>
                  
                  <div className="spec-grid-comprehensive">
                    {section.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="spec-card-comprehensive">
                        <div className="spec-card-header-comp">
                          <span className="spec-label-comp">{spec.label}</span>
                          <span className="spec-status-comp">Verified</span>
                        </div>
                        <div className="spec-value-comp">{spec.value}</div>
                        <div className="spec-description-comp">{spec.description}</div>
                        <div className="spec-indicator">
                          <div className="indicator-bar">
                            <div className="indicator-fill"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Applications Showcase */}
      <section className="prism-applications-showcase">
        <div className="prism-container-inner">
          <div className="applications-header">
            <h2>Advanced Applications</h2>
            <p>Breakthrough capabilities enabling next-generation research and industrial applications</p>
          </div>
          
          <div className="applications-grid-enhanced">
            {mockData.prismApplications.map((app, index) => (
              <motion.div 
                key={index}
                className="application-card-enhanced"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="app-visual-header">
                  <div className="app-category-enhanced">{app.category}</div>
                  <div className="app-icon">
                    {app.title.includes('Quantum') && <Target size={24} />}
                    {app.title.includes('Cryogenic') && <Zap size={24} />}
                    {app.title.includes('Rydberg') && <Cpu size={24} />}
                    {app.title.includes('Cold') && <Settings size={24} />}
                    {app.title.includes('Photonic') && <BarChart3 size={24} />}
                    {app.title.includes('Surface') && <Microscope size={24} />}
                  </div>
                </div>
                
                <div className="app-content-enhanced">
                  <h3>{app.title}</h3>
                  <p className="app-description-enhanced">{app.description}</p>
                  
                  <div className="app-benefits-enhanced">
                    <h4>Key Capabilities</h4>
                    <ul>
                      {app.benefits.map((benefit, bIndex) => (
                        <li key={bIndex}>
                          <span className="benefit-check">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="app-metrics">
                    <div className="metric-badge">
                      <span className="metric-label">Precision</span>
                      <span className="metric-value">nm-level</span>
                    </div>
                    <div className="metric-badge">
                      <span className="metric-label">Stability</span>
                      <span className="metric-value">&gt;99%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Timeline Enhanced */}
      <section className="prism-development-timeline">
        <div className="prism-container-inner">
          <div className="timeline-header">
            <h2>Development History & Innovation</h2>
            <p>From concept to breakthrough: The evolution of PRISM technology</p>
          </div>
          
          <div className="timeline-enhanced">
            <div className="timeline-track"></div>
            
            <div className="timeline-milestone">
              <div className="milestone-marker concept"></div>
              <div className="milestone-content">
                <div className="milestone-date">Early 2023</div>
                <h3>Concept Development</h3>
                <p>Initial concept inspired by crane and periscope mechanics to address limitations of traditional 3-axis translation stages. Focus on beam orthogonality preservation.</p>
                <div className="milestone-achievements">
                  <span>Theoretical framework established</span>
                  <span>Initial CAD designs completed</span>
                  <span>Feasibility analysis conducted</span>
                </div>
              </div>
              <div className="milestone-visual">
                <img src="https://images.unsplash.com/photo-1727522974735-44251dfe61b3" alt="Concept Development" />
              </div>
            </div>
            
            <div className="timeline-milestone reverse">
              <div className="milestone-marker prototype"></div>
              <div className="milestone-content">
                <div className="milestone-date">Mid 2023</div>
                <h3>Version 4.5 Prototype</h3>
                <p>First fully functional prototype hand-crafted in UWaterloo student workshop. Achieved stable 49x magnification imaging and validated core design principles.</p>
                <div className="milestone-achievements">
                  <span>49x magnification achieved</span>
                  <span>Raster scanning functionality</span>
                  <span>Manual fabrication process</span>
                </div>
              </div>
              <div className="milestone-visual">
                <img src="https://images.unsplash.com/photo-1614308460927-5024ba2e1dcb" alt="Prototype Development" />
              </div>
            </div>
            
            <div className="timeline-milestone">
              <div className="milestone-marker development"></div>
              <div className="milestone-content">
                <div className="milestone-date">Late 2023</div>
                <h3>Version 5.0 Development</h3>
                <p>Major redesign incorporating CNC-machined components with FEA optimization in Fusion 360. Implementation of second moment of inertia principles for enhanced stability.</p>
                <div className="milestone-achievements">
                  <span>CNC machining transition</span>
                  <span>FEA structural optimization</span>
                  <span>Universal machining techniques</span>
                </div>
              </div>
              <div className="milestone-visual">
                <img src="https://images.unsplash.com/photo-1747999918007-e3442cabb23a" alt="CNC Development" />
              </div>
            </div>
            
            <div className="timeline-milestone reverse">
              <div className="milestone-marker branding"></div>
              <div className="milestone-content">
                <div className="milestone-date">2024</div>
                <h3>PRISM Rebranding</h3>
                <p>Strategic rebranding from PrecisionArc Microscope (PAM) to PRISM, reflecting optical theme and broader applications in quantum sensing and cryogenic research.</p>
                <div className="milestone-achievements">
                  <span>Market positioning refined</span>
                  <span>Application scope expanded</span>
                  <span>Patent applications filed</span>
                </div>
              </div>
              <div className="milestone-visual">
                <img src="https://images.unsplash.com/photo-1579684256060-d5a308109e21" alt="PRISM Branding" />
              </div>
            </div>
            
            <div className="timeline-milestone current">
              <div className="milestone-marker current-active"></div>
              <div className="milestone-content">
                <div className="milestone-date">2025 - Present</div>
                <h3>Research Platform Integration</h3>
                <p>PRISM established as central platform for quantum sensing, Rydberg atom arrays, ion traps, and high-vacuum photonic experiments. Ongoing optimization and applications development.</p>
                <div className="milestone-achievements">
                  <span>Multi-application deployment</span>
                  <span>Research collaborations active</span>
                  <span>Continuous optimization</span>
                </div>
              </div>
              <div className="milestone-visual">
                <img src="https://images.unsplash.com/photo-1745237497721-5e6c13a171ac" alt="Research Platform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Benchmarks */}
      <section className="prism-benchmarks">
        <div className="prism-container-inner">
          <div className="benchmarks-header">
            <h2>Performance Benchmarks</h2>
            <p>Quantified performance metrics demonstrating PRISM's superior capabilities</p>
          </div>
          
          <div className="benchmarks-grid">
            <div className="benchmark-card">
              <div className="benchmark-header">
                <h3>Positioning Accuracy</h3>
                <div className="benchmark-status excellent">Excellent</div>
              </div>
              <div className="benchmark-chart">
                <div className="chart-bar" style={{ height: '95%' }}>
                  <span className="chart-value">10-30nm</span>
                </div>
                <div className="chart-label">Step Resolution</div>
              </div>
              <div className="benchmark-comparison">
                <span>Traditional stages: 50-100nm</span>
                <span className="improvement">3x improvement</span>
              </div>
            </div>
            
            <div className="benchmark-card">
              <div className="benchmark-header">
                <h3>Travel Range</h3>
                <div className="benchmark-status excellent">Excellent</div>
              </div>
              <div className="benchmark-chart">
                <div className="chart-bar" style={{ height: '88%' }}>
                  <span className="chart-value">±12.5mm</span>
                </div>
                <div className="chart-label">3-Axis Range</div>
              </div>
              <div className="benchmark-comparison">
                <span>Standard: ±10mm</span>
                <span className="improvement">25% increase</span>
              </div>
            </div>
            
            <div className="benchmark-card">
              <div className="benchmark-header">
                <h3>Beam Stability</h3>
                <div className="benchmark-status outstanding">Outstanding</div>
              </div>
              <div className="benchmark-chart">
                <div className="chart-bar" style={{ height: '98%' }}>
                  <span className="chart-value">100%</span>
                </div>
                <div className="chart-label">Orthogonality</div>
              </div>
              <div className="benchmark-comparison">
                <span>Conventional: 95-98%</span>
                <span className="improvement">Perfect alignment</span>
              </div>
            </div>
            
            <div className="benchmark-card">
              <div className="benchmark-header">
                <h3>Temperature Range</h3>
                <div className="benchmark-status excellent">Excellent</div>
              </div>
              <div className="benchmark-chart">
                <div className="chart-bar" style={{ height: '92%' }}>
                  <span className="chart-value">4K-300K</span>
                </div>
                <div className="chart-label">Operating Range</div>
              </div>
              <div benchmark-comparison">
                <span>Standard: 77K-300K</span>
                <span className="improvement">Extended range</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="prism-footer">
        <div className="prism-footer-content">
          <div className="footer-main-prism">
            <div className="footer-project-info">
              <h3>PRISM Project</h3>
              <p>Periscopic Relay Imaging Scanning Microscope</p>
              <div className="project-status">
                <div className="status-dot active"></div>
                <span>Active Development • Patent Pending</span>
              </div>
              <div className="project-metrics">
                <div className="footer-metric">
                  <span className="metric-value">Version 5.0</span>
                  <span className="metric-label">Current Release</span>
                </div>
                <div className="footer-metric">
                  <span className="metric-value">2023-2025</span>
                  <span className="metric-label">Development Period</span>
                </div>
              </div>
            </div>
            
            <div className="footer-technical-info">
              <h4>Technical Specifications</h4>
              <div className="tech-specs-summary">
                <div className="spec-item">
                  <span className="spec-label">Magnification:</span>
                  <span className="spec-value">49x Stable</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Resolution:</span>
                  <span className="spec-value">10-30nm</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Range:</span>
                  <span className="spec-value">±12.5mm</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Control:</span>
                  <span className="spec-value">CORE System</span>
                </div>
              </div>
            </div>
            
            <div className="footer-contact-prism">
              <h4>Research Collaboration</h4>
              <p>For technical inquiries, collaboration opportunities, or licensing discussions</p>
              <div className="contact-actions">
                <button className="contact-btn primary">
                  <span>Technical Discussion</span>
                </button>
                <button className="contact-btn secondary">
                  <span>Download Full Specifications</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom-prism">
            <div className="footer-credits">
              <span>Developed at University of Waterloo • Nanotechnology Engineering Program</span>
            </div>
            <div className="footer-links-prism">
              <Link to="/">Portfolio</Link>
              <span>•</span>
              <a href="#architecture">System Architecture</a>
              <span>•</span>
              <a href="#specifications">Technical Specs</a>
              <span>•</span>
              <a href="#applications">Applications</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrismProject;