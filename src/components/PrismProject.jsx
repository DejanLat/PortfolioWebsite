import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown, ChevronUp, ExternalLink, Download, Zap, Target, Settings, BarChart3, Microscope, Cpu, Activity, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import mockData from '../data/mock';

const PrismProject = () => {
  const [expandedSection, setExpandedSection] = useState('overview');
  const [activeSpecTab, setActiveSpecTab] = useState('architecture');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? '' : section);
  };

  return (
    <div className="prism-tesla">
      {/* Tesla Navigation */}
      <nav className="tesla-nav">
        <div className="tesla-nav-content">
          <Link to="/" className="tesla-back">
            <ArrowLeft size={20} />
            <span>Back</span>
          </Link>
          <div className="tesla-logo">
            <h3>PRISM</h3>
            <span>SYSTEM</span>
          </div>
          <div className="tesla-nav-actions">
            <button className="tesla-nav-btn">
              <Download size={16} />
              <span>Specs</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Tesla Model X Hero Style */}
      <section className="prism-tesla-hero">
        <div className="prism-hero-bg">
          <div className="nanotech-visualization">
            <div className="atom-grid">
              <div className="atom-node"></div>
              <div className="atom-node"></div>
              <div className="atom-node"></div>
              <div className="atom-node"></div>
              <div className="atom-node"></div>
            </div>
            <div className="laser-beam"></div>
            <div className="optical-lens"></div>
          </div>
        </div>
        
        <motion.div 
          className="prism-tesla-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="prism-tesla-header">
            <div className="prism-badge">
              <Microscope size={16} />
              <span>BREAKTHROUGH INNOVATION</span>
            </div>
            
            <h1 className="prism-tesla-title">
              <span className="prism-acronym">PRISM</span>
              <span className="prism-subtitle">Periscopic Relay Imaging Scanning Microscope</span>
            </h1>
            
            <p className="prism-tesla-desc">
              Revolutionary precision optical instrument. Cost-effective alternative to traditional 3-axis translation stages. 
              Engineered for quantum sensing and cryogenic imaging applications.
            </p>
          </div>

          {/* Tesla Performance Numbers */}
          <div className="prism-performance-grid">
            <div className="prism-perf-card primary">
              <div className="perf-value">49x</div>
              <div className="perf-label">Magnification</div>
              <div className="perf-desc">Stable optical system</div>
            </div>
            <div className="prism-perf-card">
              <div className="perf-value">10nm</div>
              <div className="perf-label">Resolution</div>
              <div className="perf-desc">Piezo precision</div>
            </div>
            <div className="prism-perf-card">
              <div className="perf-value">±12.5mm</div>
              <div className="perf-label">Travel Range</div>
              <div className="perf-desc">3-axis capability</div>
            </div>
            <div className="prism-perf-card">
              <div className="perf-value">&lt;0.003mm</div>
              <div className="perf-label">Flatness</div>
              <div className="perf-desc">Bearing precision</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* System Architecture - Tesla Clean */}
      <section className="prism-architecture-tesla">
        <div className="tesla-container">
          <div className="arch-header">
            <h2>System Architecture</h2>
            <p>Three-axis nested framework with beam orthogonality preservation</p>
          </div>
          
          <div className="architecture-tesla-grid">
            <div className="arch-visual">
              <div className="system-diagram">
                <div className="axis-layer z-layer">
                  <div className="axis-info">
                    <span className="axis-name">Z-Axis</span>
                    <span className="axis-desc">Vertical Focus</span>
                  </div>
                </div>
                <div className="axis-layer y-layer">
                  <div className="axis-info">
                    <span className="axis-name">Y-Axis</span>
                    <span className="axis-desc">Mirror Translation</span>
                  </div>
                </div>
                <div className="axis-layer x-layer">
                  <div className="axis-info">
                    <span className="axis-name">X-Axis</span>
                    <span className="axis-desc">Independent Control</span>
                  </div>
                </div>
                <div className="optical-path-viz">
                  <div className="beam-line incident"></div>
                  <div className="mirror-point"></div>
                  <div className="beam-line reflected"></div>
                  <div className="objective-point"></div>
                </div>
              </div>
            </div>
            
            <div className="arch-specs">
              <div className="arch-spec-group">
                <h3>Key Innovations</h3>
                <div className="arch-spec">
                  <span className="spec-point">Hanging Z-axis configuration</span>
                  <span className="spec-detail">Reduces moving mass</span>
                </div>
                <div className="arch-spec">
                  <span className="spec-point">Beam orthogonality preservation</span>
                  <span className="spec-detail">Fixed beam path</span>
                </div>
                <div className="arch-spec">
                  <span className="spec-point">Modular retrofittable design</span>
                  <span className="spec-detail">Universal compatibility</span>
                </div>
              </div>
              
              <div className="arch-spec-group">
                <h3>Performance Characteristics</h3>
                <div className="arch-spec">
                  <span className="spec-point">Positioning accuracy</span>
                  <span className="spec-detail">10-30nm resolution</span>
                </div>
                <div className="arch-spec">
                  <span className="spec-point">Travel range</span>
                  <span className="spec-detail">±12.5mm per axis</span>
                </div>
                <div className="arch-spec">
                  <span className="spec-point">Temperature range</span>
                  <span className="spec-detail">4K to 300K operation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications - Tesla Style */}
      <section className="prism-specs-tesla">
        <div className="tesla-container">
          <div className="specs-tesla-header">
            <h2>Technical Specifications</h2>
            <div className="tesla-spec-nav">
              <button 
                className={`tesla-spec-tab ${activeSpecTab === 'architecture' ? 'active' : ''}`}
                onClick={() => setActiveSpecTab('architecture')}
              >
                <Cpu size={16} />
                <span>Architecture</span>
              </button>
              <button 
                className={`tesla-spec-tab ${activeSpecTab === 'optical' ? 'active' : ''}`}
                onClick={() => setActiveSpecTab('optical')}
              >
                <Target size={16} />
                <span>Optical</span>
              </button>
              <button 
                className={`tesla-spec-tab ${activeSpecTab === 'mechanical' ? 'active' : ''}`}
                onClick={() => setActiveSpecTab('mechanical')}
              >
                <Settings size={16} />
                <span>Mechanical</span>
              </button>
              <button 
                className={`tesla-spec-tab ${activeSpecTab === 'control' ? 'active' : ''}`}
                onClick={() => setActiveSpecTab('control')}
              >
                <Zap size={16} />
                <span>Control</span>
              </button>
            </div>
          </div>

          <div className="tesla-specs-content">
            {mockData.prismSpecs.map((section, index) => (
              activeSpecTab === section.id && (
                <motion.div 
                  key={section.id}
                  className="tesla-spec-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="tesla-spec-grid">
                    {section.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="tesla-spec-card">
                        <div className="spec-card-header">
                          <div className="spec-label">{spec.label}</div>
                          <div className="spec-status">Verified</div>
                        </div>
                        <div className="spec-value">{spec.value}</div>
                        <div className="spec-description">{spec.description}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Applications - Tesla Grid */}
      <section className="prism-applications-tesla">
        <div className="tesla-container">
          <div className="apps-header">
            <h2>Applications</h2>
            <p>Advanced capabilities for next-generation research</p>
          </div>
          
          <div className="apps-tesla-grid">
            {mockData.prismApplications.map((app, index) => (
              <motion.div 
                key={index}
                className="tesla-app-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="app-header">
                  <div className="app-icon">
                    {app.title.includes('Quantum') && <Target size={24} />}
                    {app.title.includes('Cryogenic') && <Zap size={24} />}
                    {app.title.includes('Rydberg') && <Cpu size={24} />}
                    {app.title.includes('Cold') && <Settings size={24} />}
                    {app.title.includes('Photonic') && <Activity size={24} />}
                    {app.title.includes('Surface') && <Layers size={24} />}
                  </div>
                  <div className="app-category">{app.category}</div>
                </div>
                
                <div className="app-content">
                  <h3>{app.title}</h3>
                  <p>{app.description}</p>
                  
                  <div className="app-capabilities">
                    {app.benefits.slice(0, 3).map((benefit, bIndex) => (
                      <div key={bIndex} className="capability-item">
                        • {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Benchmarks - Tesla Numbers */}
      <section className="prism-benchmarks-tesla">
        <div className="tesla-container">
          <div className="benchmarks-header">
            <h2>Performance Benchmarks</h2>
            <p>Quantified superiority over traditional systems</p>
          </div>
          
          <div className="benchmarks-tesla-grid">
            <div className="benchmark-tesla-card">
              <div className="benchmark-header">
                <h3>Positioning Accuracy</h3>
                <div className="benchmark-improvement">3x Better</div>
              </div>
              <div className="benchmark-comparison">
                <div className="current-performance">
                  <div className="performance-bar prism" style={{ width: '95%' }}>
                    <span>10-30nm</span>
                  </div>
                  <div className="performance-label">PRISM System</div>
                </div>
                <div className="baseline-performance">
                  <div className="performance-bar baseline" style={{ width: '30%' }}>
                    <span>50-100nm</span>
                  </div>
                  <div className="performance-label">Traditional Stages</div>
                </div>
              </div>
            </div>
            
            <div className="benchmark-tesla-card">
              <div className="benchmark-header">
                <h3>Travel Range</h3>
                <div className="benchmark-improvement">25% More</div>
              </div>
              <div className="benchmark-comparison">
                <div className="current-performance">
                  <div className="performance-bar prism" style={{ width: '100%' }}>
                    <span>±12.5mm</span>
                  </div>
                  <div className="performance-label">PRISM System</div>
                </div>
                <div className="baseline-performance">
                  <div className="performance-bar baseline" style={{ width: '80%' }}>
                    <span>±10mm</span>
                  </div>
                  <div className="performance-label">Standard Systems</div>
                </div>
              </div>
            </div>
            
            <div className="benchmark-tesla-card">
              <div className="benchmark-header">
                <h3>Beam Stability</h3>
                <div className="benchmark-improvement">Perfect</div>
              </div>
              <div className="benchmark-comparison">
                <div className="current-performance">
                  <div className="performance-bar prism" style={{ width: '100%' }}>
                    <span>100%</span>
                  </div>
                  <div className="performance-label">PRISM Orthogonality</div>
                </div>
                <div className="baseline-performance">
                  <div className="performance-bar baseline" style={{ width: '95%' }}>
                    <span>95-98%</span>
                  </div>
                  <div className="performance-label">Conventional Systems</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tesla Footer */}
      <footer className="prism-tesla-footer">
        <div className="tesla-container">
          <div className="prism-footer-content">
            <div className="footer-left">
              <h3>PRISM System</h3>
              <p>Periscopic Relay Imaging Scanning Microscope</p>
              <div className="footer-status">
                <div className="status-dot active"></div>
                <span>Active Development • Patent Pending</span>
              </div>
            </div>
            
            <div className="footer-right">
              <div className="footer-tesla-specs">
                <div className="footer-tesla-spec">
                  <span className="spec-value">Version 5.0</span>
                  <span className="spec-label">Current Release</span>
                </div>
                <div className="footer-tesla-spec">
                  <span className="spec-value">49x</span>
                  <span className="spec-label">Magnification</span>
                </div>
                <div className="footer-tesla-spec">
                  <span className="spec-value">10nm</span>
                  <span className="spec-label">Resolution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrismProject;