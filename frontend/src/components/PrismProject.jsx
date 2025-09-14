import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown, ChevronUp, ExternalLink, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import mockData from '../data/mock';

const PrismProject = () => {
  const [expandedSection, setExpandedSection] = useState('overview');

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
            <h3>PRISM Project</h3>
          </div>
          <div className="nav-actions">
            <button className="nav-button">
              <Download size={16} />
              <span>Technical Report</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="prism-hero">
        <motion.div 
          className="prism-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="prism-badge">
            <span>Breakthrough Innovation</span>
          </div>
          <h1 className="prism-title">
            PRISM
            <span className="prism-subtitle">Periscopic Relay Imaging Scanning Microscope</span>
          </h1>
          <p className="prism-description">
            A revolutionary high-performance, cost-effective alternative to traditional 3-axis translation stages, 
            designed for quantum sensing, cryogenic imaging, and precision optical applications.
          </p>
          
          <div className="prism-specs-overview">
            <div className="spec-highlight">
              <span className="spec-value">49x</span>
              <span className="spec-label">Magnification</span>
            </div>
            <div className="spec-highlight">
              <span className="spec-value">±12.5mm</span>
              <span className="spec-label">Travel Range</span>
            </div>
            <div className="spec-highlight">
              <span className="spec-value">10-30nm</span>
              <span className="spec-label">Step Resolution</span>
            </div>
            <div className="spec-highlight">
              <span className="spec-value">0.003mm</span>
              <span className="spec-label">Flatness Precision</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Technical Specifications */}
      <section className="prism-specifications">
        <div className="prism-container-inner">
          <h2>Technical Specifications</h2>
          
          <div className="spec-sections">
            {mockData.prismSpecs.map((section, index) => (
              <div key={index} className="spec-section">
                <button 
                  className={`spec-section-header ${expandedSection === section.id ? 'expanded' : ''}`}
                  onClick={() => toggleSection(section.id)}
                >
                  <h3>{section.title}</h3>
                  {expandedSection === section.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                
                {expandedSection === section.id && (
                  <motion.div 
                    className="spec-section-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="spec-grid-detailed">
                      {section.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="spec-item-detailed">
                          <span className="spec-label-detailed">{spec.label}</span>
                          <span className="spec-value-detailed">{spec.value}</span>
                          {spec.description && (
                            <span className="spec-description">{spec.description}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="prism-applications">
        <div className="prism-container-inner">
          <h2>Applications & Use Cases</h2>
          <div className="applications-grid">
            {mockData.prismApplications.map((app, index) => (
              <motion.div 
                key={index}
                className="application-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="app-header">
                  <h3>{app.title}</h3>
                  <div className="app-category">{app.category}</div>
                </div>
                <p className="app-description">{app.description}</p>
                <div className="app-benefits">
                  {app.benefits.map((benefit, bIndex) => (
                    <div key={bIndex} className="benefit-item">
                      <span className="benefit-bullet">•</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Highlights */}
      <section className="prism-innovation">
        <div className="prism-container-inner">
          <h2>Innovation Highlights</h2>
          <div className="innovation-grid">
            <div className="innovation-item">
              <div className="innovation-number">01</div>
              <h3>Hanging Z-Axis Design</h3>
              <p>Revolutionary architecture that reduces moving mass and optimizes piezo actuator performance, ensuring precise step motion and better repeatability.</p>
            </div>
            <div className="innovation-item">
              <div className="innovation-number">02</div>
              <h3>Beam Orthogonality</h3>
              <p>Fixed mirror mounts along kinematic constraints ensure stable, orthogonal beam alignment throughout the entire scanning range.</p>
            </div>
            <div className="innovation-item">
              <div className="innovation-number">03</div>
              <h3>CORE Control System</h3>
              <p>Centralized Operator for Relay Execution with Raspberry Pi control, internet connectivity, and built-in calibration functions.</p>
            </div>
            <div className="innovation-item">
              <div className="innovation-number">04</div>
              <h3>Modular Architecture</h3>
              <p>Retrofittable design that mounts externally to optical tables, breadboards, or cryostat windows with minimal reconfiguration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="prism-timeline">
        <div className="prism-container-inner">
          <h2>Development History</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Concept Development</h3>
                <span className="timeline-date">Early 2023</span>
                <p>Initial concept inspired by crane and periscope mechanics to address limitations of traditional 3-axis translation stages.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Version 4.5 Prototype</h3>
                <span className="timeline-date">Mid 2023</span>
                <p>First fully functional prototype hand-crafted in UWaterloo student workshop. Achieved stable 49x magnification imaging.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Version 5 Development</h3>
                <span className="timeline-date">Late 2023</span>
                <p>Transition to CNC-machined components with FEA optimization in Fusion 360. Improved design incorporating second moment of inertia principles.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>PRISM Rebranding</h3>
                <span className="timeline-date">2024</span>
                <p>Name change to reflect optical theme and broader applications in quantum sensing and cryogenic research.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker active"></div>
              <div className="timeline-content">
                <h3>Current Applications</h3>
                <span className="timeline-date">2025</span>
                <p>Platform for research in cryogenic quantum sensing, Rydberg atom arrays, ion traps, and high-vacuum photonic experiments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>PRISM Project</h3>
            <p>Developed at University of Waterloo</p>
            <p>Nanotechnology Engineering Program</p>
          </div>
          <div className="footer-contact">
            <p>For technical inquiries or collaboration opportunities</p>
            <button className="contact-button">
              <ExternalLink size={16} />
              <span>Contact Developer</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrismProject;