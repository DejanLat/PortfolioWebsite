// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { ChevronRight, ChevronLeft, Github, ExternalLink, Award, Users, Clock, TrendingUp, Target, Zap, Activity, Layers, ArrowRight, Play, Pause, BarChart3, Settings, Cpu, Eye } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import mockData from '../data/mock';

// const Portfolio = () => {
//   const [activeTab, setActiveTab] = useState('performance');
//   const [scrollY, setScrollY] = useState(0);
//   const [currentHeroImage, setCurrentHeroImage] = useState(0);
//   const [currentEquipmentImage, setCurrentEquipmentImage] = useState(0);
//   const [currentProjectImage, setCurrentProjectImage] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Hero Image Carousel
//   const heroImages = [
//     {
//       url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Electron_microscope_bw.jpg/800px-Electron_microscope_bw.jpg",
//       title: "ABC Advanced Microscopy Systems",
//       description: "Precision engineering at nanometer scale"
//     },
//     {
//       url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/CNC_machine_working.jpg/800px-CNC_machine_working.jpg",
//       title: "CNC Manufacturing Excellence", 
//       description: "Aerospace-grade precision machining"
//     },
//     {
//       url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Atomic_force_microscope_block_diagram.svg/800px-Atomic_force_microscope_block_diagram.svg.png",
//       title: "Atomic Force Microscopy",
//       description: "Surface characterization expertise"
//     },
//     {
//       url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Lab_bench.jpg/800px-Lab_bench.jpg",
//       title: "Research Laboratory Setup",
//       description: "Advanced instrumentation facility"
//     }
//   ];

//   // Equipment Images
//   const equipmentImages = [
//     {
//       url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Scanning_electron_microscope_sample_stage.jpg/800px-Scanning_electron_microscope_sample_stage.jpg",
//       title: "SEM Sample Stage",
//       category: "Electron Microscopy"
//     },
//     {
//       url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/TGA_instrument.jpg/800px-TGA_instrument.jpg",
//       title: "Thermogravimetric Analyzer",
//       category: "Thermal Analysis"
//     },
//     {
//       url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/AFM_cantilever.jpg/800px-AFM_cantilever.jpg",
//       title: "AFM Cantilever System",
//       category: "Surface Analysis"
//     },
//     {
//       url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Universal_testing_machine.jpg/800px-Universal_testing_machine.jpg",
//       title: "Universal Testing Machine",
//       category: "Mechanical Testing"
//     },
//     {
//       url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/CNC_lathe.jpg/800px-CNC_lathe.jpg",
//       title: "CNC Precision Lathe",
//       category: "Manufacturing"
//     }
//   ];

//   // Project Images
//   const projectImages = [
//     {
//       url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Optical_microscope_components.jpg/800px-Optical_microscope_components.jpg",
//       title: "Optical System Components",
//       description: "PRISM microscope optical path design"
//     },
//     {
//       url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Precision_engineering_tools.jpg/800px-Precision_engineering_tools.jpg",
//       title: "Precision Engineering Tools",
//       description: "Manufacturing process optimization"
//     },
//     {
//       url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Data_visualization_dashboard.jpg/800px-Data_visualization_dashboard.jpg",
//       title: "Data Analytics Dashboard",
//       description: "Big Query processing visualization"
//     }
//   ];

//   // Auto-advance carousels
//   useEffect(() => {
//     if (!isPlaying) return;
    
//     const interval = setInterval(() => {
//       setCurrentHeroImage(prev => (prev + 1) % heroImages.length);
//       setCurrentEquipmentImage(prev => (prev + 1) % equipmentImages.length);
//       setCurrentProjectImage(prev => (prev + 1) % projectImages.length);
//     }, 4000);
    
//     return () => clearInterval(interval);
//   }, [isPlaying, heroImages.length, equipmentImages.length, projectImages.length]);

//   return (
//     <div className="engineering-portfolio">
//       {/* Enhanced Tesla Navigation */}
//       <nav className="tesla-white-nav">
//         <div className="tesla-nav-content">
//           <div className="tesla-white-logo">
//             <h3>ENGINEERING</h3>
//             <span>PORTFOLIO</span>
//           </div>
//           <div className="tesla-nav-links">
//             <a href="#specifications" className="tesla-white-link">Specifications</a>
//             <a href="#performance" className="tesla-white-link">Performance</a>
//             <a href="#experience" className="tesla-white-link">Experience</a>
//             <a href="#projects" className="tesla-white-link">Projects</a>
//             <Link to="/prism" className="tesla-white-cta">PRISM System</Link>
//           </div>
//           <div className="nav-carousel-controls">
//             <button 
//               className={`carousel-play-btn ${isPlaying ? 'playing' : 'paused'}`}
//               onClick={() => setIsPlaying(!isPlaying)}
//             >
//               {isPlaying ? <Pause size={16} /> : <Play size={16} />}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Enhanced Hero with Image Carousel */}
//       <section className="tesla-white-hero-enhanced">
//         <div className="hero-visual-container">
//           <div className="hero-image-carousel">
//             <div className="carousel-image-wrapper">
//               <img 
//                 src={heroImages[currentHeroImage].url}
//                 alt={heroImages[currentHeroImage].title}
//                 className="hero-carousel-image"
//               />
//               <div className="hero-image-overlay">
//                 <div className="image-info">
//                   <h4>{heroImages[currentHeroImage].title}</h4>
//                   <p>{heroImages[currentHeroImage].description}</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="carousel-navigation">
//               <button 
//                 className="carousel-nav-btn prev"
//                 onClick={() => setCurrentHeroImage(prev => (prev - 1 + heroImages.length) % heroImages.length)}
//               >
//                 <ChevronLeft size={20} />
//               </button>
//               <button 
//                 className="carousel-nav-btn next"
//                 onClick={() => setCurrentHeroImage(prev => (prev + 1) % heroImages.length)}
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>
            
//             <div className="carousel-indicators">
//               {heroImages.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`indicator ${index === currentHeroImage ? 'active' : ''}`}
//                   onClick={() => setCurrentHeroImage(index)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
        
//         <div className="hero-content-container">
//           <motion.div 
//             className="tesla-white-hero-content"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="engineering-badge">
//               <Target size={16} />
//               <span>PRECISION ENGINEERING • NANOSCALE SYSTEMS</span>
//             </div>
            
//             <h1 className="tesla-white-title">
//               Nanotechnology
//               <br />
//               <span className="engineering-gradient">Engineer</span>
//             </h1>
            
//             <p className="tesla-white-subtitle">
//               Delivering quantifiable results in precision manufacturing, advanced microscopy, 
//               and process optimization. Specialized in nanometer-scale engineering solutions.
//             </p>

//             {/* Enhanced Metrics with Visual Indicators */}
//             <div className="engineering-metrics-enhanced">
//               <div className="metric-card-enhanced featured">
//                 <div className="metric-icon">
//                   <TrendingUp size={24} />
//                 </div>
//                 <div className="metric-content">
//                   <div className="metric-number">20%</div>
//                   <div className="metric-label">CAPACITY INCREASE</div>
//                   <div className="metric-detail">Production optimization delivered</div>
//                   <div className="metric-progress">
//                     <div className="progress-bar">
//                       <div className="progress-fill" style={{width: '20%'}}></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="metric-card-enhanced">
//                 <div className="metric-icon">
//                   <Zap size={24} />
//                 </div>
//                 <div className="metric-content">
//                   <div className="metric-number">80%</div>
//                   <div className="metric-label">PROCESS EFFICIENCY</div>
//                   <div className="metric-detail">Industrial automation achieved</div>
//                   <div className="metric-progress">
//                     <div className="progress-bar">
//                       <div className="progress-fill" style={{width: '80%'}}></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="metric-card-enhanced">
//                 <div className="metric-icon">
//                   <Activity size={24} />
//                 </div>
//                 <div className="metric-content">
//                   <div className="metric-number">800+</div>
//                   <div className="metric-label">UNITS AUTOMATED</div>
//                   <div className="metric-detail">Shipping cards processed</div>
//                   <div className="metric-progress">
//                     <div className="progress-bar">
//                       <div className="progress-fill" style={{width: '95%'}}></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="metric-card-enhanced">
//                 <div className="metric-icon">
//                   <Target size={24} />
//                 </div>
//                 <div className="metric-content">
//                   <div className="metric-number">10nm</div>
//                   <div className="metric-label">PRECISION ACHIEVED</div>
//                   <div className="metric-detail">PRISM system resolution</div>
//                   <div className="metric-progress">
//                     <div className="progress-bar">
//                       <div className="progress-fill" style={{width: '100%'}}></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="tesla-white-actions">
//               <Link to="/prism" className="tesla-white-primary">
//                 <span>View PRISM System</span>
//                 <ArrowRight size={20} />
//               </Link>
//               <a href="#specifications" className="tesla-white-secondary">Technical Specifications</a>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Visual Statistics Overview */}
//       <section className="stats-overview">
//         <div className="tesla-container">
//           <div className="stats-grid">
//             <div className="stat-visual-card">
//               <div className="stat-icon-large">
//                 <Award size={48} />
//               </div>
//               <div className="stat-data">
//                 <div className="stat-number">5+</div>
//                 <div className="stat-label">Patents & Publications</div>
//                 <div className="stat-description">Breakthrough innovations in precision optics and microscopy systems</div>
//               </div>
//             </div>
            
//             <div className="stat-visual-card">
//               <div className="stat-icon-large">
//                 <Users size={48} />
//               </div>
//               <div className="stat-data">
//                 <div className="stat-number">3</div>
//                 <div className="stat-label">Major Co-op Terms</div>
//                 <div className="stat-description">Industrial experience in aerospace, manufacturing, and research</div>
//               </div>
//             </div>
            
//             <div className="stat-visual-card">
//               <div className="stat-icon-large">
//                 <BarChart3 size={48} />
//               </div>
//               <div className="stat-data">
//                 <div className="stat-number">15+</div>
//                 <div className="stat-label">Technical Skills</div>
//                 <div className="stat-description">Advanced proficiency in analysis equipment and software systems</div>
//               </div>
//             </div>
            
//             <div className="stat-visual-card">
//               <div className="stat-icon-large">
//                 <Eye size={48} />
//               </div>
//               <div className="stat-data">
//                 <div className="stat-number">2026</div>
//                 <div className="stat-label">Graduation Year</div>
//                 <div className="stat-description">Bachelor of Engineering, Nanotechnology, University of Waterloo</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Specifications with Equipment Carousel */}
//       <section id="specifications" className="tesla-white-specs-enhanced">
//         <div className="tesla-container">
//           <div className="specs-header-enhanced">
//             <h2>Engineering Specifications</h2>
//             <p>Comprehensive technical capabilities with advanced equipment proficiency</p>
            
//             <div className="tesla-white-tabs">
//               <button 
//                 className={`tesla-white-tab ${activeTab === 'performance' ? 'active' : ''}`}
//                 onClick={() => setActiveTab('performance')}
//               >
//                 <BarChart3 size={16} />
//                 <span>Performance Data</span>
//               </button>
//               <button 
//                 className={`tesla-white-tab ${activeTab === 'equipment' ? 'active' : ''}`}
//                 onClick={() => setActiveTab('equipment')}
//               >
//                 <Settings size={16} />
//                 <span>Equipment Mastery</span>
//               </button>
//               <button 
//                 className={`tesla-white-tab ${activeTab === 'software' ? 'active' : ''}`}
//                 onClick={() => setActiveTab('software')}
//               >
//                 <Cpu size={16} />
//                 <span>Software Proficiency</span>
//               </button>
//               <button 
//                 className={`tesla-white-tab ${activeTab === 'systems' ? 'active' : ''}`}
//                 onClick={() => setActiveTab('systems')}
//               >
//                 <Target size={16} />
//                 <span>System Design</span>
//               </button>
//             </div>
//           </div>

//           <div className="specs-visual-content">
//             {activeTab === 'equipment' && (
//               <div className="equipment-showcase">
//                 <div className="equipment-carousel-section">
//                   <div className="equipment-carousel">
//                     <div className="equipment-image-container">
//                       <img 
//                         src={equipmentImages[currentEquipmentImage].url}
//                         alt={equipmentImages[currentEquipmentImage].title}
//                         className="equipment-image"
//                       />
//                       <div className="equipment-image-info">
//                         <h4>{equipmentImages[currentEquipmentImage].title}</h4>
//                         <p>{equipmentImages[currentEquipmentImage].category}</p>
//                       </div>
//                     </div>
                    
//                     <div className="equipment-carousel-nav">
//                       <button 
//                         onClick={() => setCurrentEquipmentImage(prev => (prev - 1 + equipmentImages.length) % equipmentImages.length)}
//                         className="carousel-nav-btn"
//                       >
//                         <ChevronLeft size={20} />
//                       </button>
//                       <button 
//                         onClick={() => setCurrentEquipmentImage(prev => (prev + 1) % equipmentImages.length)}
//                         className="carousel-nav-btn"
//                       >
//                         <ChevronRight size={20} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="equipment-specs-detailed">
//                   <div className="equipment-category-enhanced">
//                     <div className="category-header-enhanced">
//                       <h3>Analysis & Characterization Equipment</h3>
//                       <div className="proficiency-indicator expert">Expert Level</div>
//                     </div>
//                     <div className="equipment-grid-visual">
//                       {mockData.skills.machines.map((machine, index) => (
//                         <div key={index} className="equipment-item-visual">
//                           <div className="equipment-icon-bg">
//                             <Settings size={20} />
//                           </div>
//                           <div className="equipment-details">
//                             <div className="equipment-name">{machine}</div>
//                             <div className="equipment-proficiency">
//                               <div className="proficiency-bar-container">
//                                 <div className="proficiency-bar-bg">
//                                   <div className="proficiency-bar-fill expert" style={{width: '95%'}}></div>
//                                 </div>
//                                 <span className="proficiency-text">Certified</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'performance' && (
//               <div className="performance-dashboard">
//                 <div className="performance-charts">
//                   <div className="chart-container">
//                     <h3>Academic Performance</h3>
//                     <div className="performance-metrics-visual">
//                       <div className="metric-visual-item">
//                         <div className="metric-visual-header">
//                           <span className="metric-label">Institution Ranking</span>
//                           <span className="metric-value">Top 50 Global</span>
//                         </div>
//                         <div className="metric-visual-bar">
//                           <div className="visual-bar-fill" style={{width: '95%'}}></div>
//                         </div>
//                       </div>
                      
//                       <div className="metric-visual-item">
//                         <div className="metric-visual-header">
//                           <span className="metric-label">Program Specialization</span>
//                           <span className="metric-value">Nanotechnology Engineering</span>
//                         </div>
//                         <div className="metric-visual-bar">
//                           <div className="visual-bar-fill" style={{width: '100%'}}></div>
//                         </div>
//                       </div>
                      
//                       <div className="metric-visual-item">
//                         <div className="metric-visual-header">
//                           <span className="metric-label">Co-op Program</span>
//                           <span className="metric-value">Advanced Track</span>
//                         </div>
//                         <div className="metric-visual-bar">
//                           <div className="visual-bar-fill" style={{width: '90%'}}></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="chart-container">
//                     <h3>Industrial Impact</h3>
//                     <div className="impact-visualization">
//                       <div className="impact-circle-chart">
//                         <div className="circle-chart" data-percentage="20">
//                           <div className="circle-chart-inner">
//                             <span className="circle-chart-value">20%</span>
//                             <span className="circle-chart-label">Capacity</span>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="impact-circle-chart">
//                         <div className="circle-chart" data-percentage="80">
//                           <div className="circle-chart-inner">
//                             <span className="circle-chart-value">80%</span>
//                             <span className="circle-chart-label">Efficiency</span>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="impact-circle-chart">
//                         <div className="circle-chart" data-percentage="100">
//                           <div className="circle-chart-inner">
//                             <span className="circle-chart-value">800+</span>
//                             <span className="circle-chart-label">Units</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'software' && (
//               <div className="software-mastery-visual">
//                 <div className="software-categories-grid">
//                   <div className="software-category-visual">
//                     <div className="category-header-visual">
//                       <Cpu size={32} />
//                       <h3>Engineering Software</h3>
//                       <div className="overall-score">95%</div>
//                     </div>
//                     <div className="software-items-visual">
//                       {mockData.skills.frameworks.map((framework, index) => (
//                         <div key={index} className="software-item-visual">
//                           <div className="software-name-visual">{framework}</div>
//                           <div className="software-mastery-indicator">
//                             <div className="mastery-dots">
//                               <div className="dot active"></div>
//                               <div className="dot active"></div>
//                               <div className="dot active"></div>
//                               <div className="dot active"></div>
//                               <div className="dot"></div>
//                             </div>
//                             <span className="mastery-level">Advanced</span>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
                  
//                   <div className="software-category-visual">
//                     <div className="category-header-visual">
//                       <Activity size={32} />
//                       <h3>Programming Languages</h3>
//                       <div className="overall-score">92%</div>
//                     </div>
//                     <div className="software-items-visual">
//                       {mockData.skills.languages.map((language, index) => (
//                         <div key={index} className="software-item-visual">
//                           <div className="software-name-visual">{language}</div>
//                           <div className="software-mastery-indicator">
//                             <div className="mastery-dots">
//                               <div className="dot active"></div>
//                               <div className="dot active"></div>
//                               <div className="dot active"></div>
//                               <div className="dot active"></div>
//                               <div className="dot active"></div>
//                             </div>
//                             <span className="mastery-level">Expert</span>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'systems' && (
//               <div className="systems-design-showcase">
//                 <div className="systems-capabilities-visual">
//                   <div className="capability-card-visual">
//                     <div className="capability-icon-container">
//                       <Target size={48} />
//                     </div>
//                     <h3>Precision Systems Design</h3>
//                     <div className="capability-metrics-visual">
//                       <div className="metric-visual-row">
//                         <span className="metric-name">Positioning Accuracy</span>
//                         <span className="metric-value-highlight">10-30 nanometers</span>
//                       </div>
//                       <div className="metric-visual-row">
//                         <span className="metric-name">System Stability</span>
//                         <span className="metric-value-highlight">&lt;0.1% drift</span>
//                       </div>
//                       <div className="metric-visual-row">
//                         <span className="metric-name">Operating Range</span>
//                         <span className="metric-value-highlight">4K to 300K</span>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="capability-card-visual">
//                     <div className="capability-icon-container">
//                       <Zap size={48} />
//                     </div>
//                     <h3>Process Automation</h3>
//                     <div className="capability-metrics-visual">
//                       <div className="metric-visual-row">
//                         <span className="metric-name">Efficiency Improvement</span>
//                         <span className="metric-value-highlight">80% optimization</span>
//                       </div>
//                       <div className="metric-visual-row">
//                         <span className="metric-name">Processing Speed</span>
//                         <span className="metric-value-highlight">69 seconds/unit</span>
//                       </div>
//                       <div className="metric-visual-row">
//                         <span className="metric-name">Volume Capability</span>
//                         <span className="metric-value-highlight">800+ units/day</span>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="capability-card-visual">
//                     <div className="capability-icon-container">
//                       <Activity size={48} />
//                     </div>
//                     <h3>Quality Assurance</h3>
//                     <div className="capability-metrics-visual">
//                       <div className="metric-visual-row">
//                         <span className="metric-name">Measurement Precision</span>
//                         <span className="metric-value-highlight">&lt;0.003mm flatness</span>
//                       </div>
//                       <div className="metric-visual-row">
//                         <span className="metric-name">System Reliability</span>
//                         <span className="metric-value-highlight">99.9% uptime</span>
//                       </div>
//                       <div className="metric-visual-row">
//                         <span className="metric-name">Validation Protocol</span>
//                         <span className="metric-value-highlight">ISO compliant</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Experience with Timeline Visuals */}
//       <section id="performance" className="tesla-white-experience-enhanced">
//         <div className="tesla-container">
//           <h2>Professional Performance </h2>
//           <p className="section-subtitle">Quantified impact and technical achievements across engineering roles</p>
          
//           <div className="experience-timeline-visual">
//             {mockData.experience.map((exp, index) => (
//               <motion.div 
//                 key={index}
//                 className="experience-card-visual"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="exp-visual-header">
//                   <div className="exp-image-container">
//                     <img 
//                       src={exp.image || `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Engineering_workplace.jpg/400px-Engineering_workplace.jpg`}
//                       alt={exp.company}
//                       className="exp-company-image"
//                     />
//                     <div className="exp-period-overlay">{exp.period}</div>
//                   </div>
                  
//                   <div className="exp-header-content">
//                     <h3>{exp.role}</h3>
//                     <h4>{exp.company}</h4>
//                     <div className="exp-category-tag">{exp.category}</div>
//                   </div>
                  
//                   <div className="exp-impact-visualization">
//                     <div className="impact-score-circle">
//                       <div className="impact-score-value">{exp.keyMetrics[0].value}</div>
//                       <div className="impact-score-label">Primary Impact</div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="exp-metrics-grid">
//                   {exp.keyMetrics.map((metric, mIndex) => (
//                     <div key={mIndex} className="metric-card-compact">
//                       <div className="metric-icon-compact">
//                         {metric.value.includes('%') && <TrendingUp size={16} />}
//                         {metric.value.includes('+') && <Activity size={16} />}
//                         {!metric.value.includes('%') && !metric.value.includes('+') && <Target size={16} />}
//                       </div>
//                       <div className="metric-content-compact">
//                         <div className="metric-value-compact">{metric.value}</div>
//                         <div className="metric-desc-compact">{metric.description}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
                
//                 <div className="exp-achievements-visual">
//                   {exp.achievements.slice(0, 3).map((achievement, achIndex) => (
//                     <div key={achIndex} className="achievement-item-visual">
//                       <div className="achievement-marker"></div>
//                       <span>{achievement}</span>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Projects with Image Carousel */}
//       <section id="projects" className="tesla-white-projects-enhanced">
//         <div className="tesla-container">
//           <h2>Engineering Projects</h2>
//           <p className="section-subtitle">Breakthrough innovations with visual documentation</p>
          
//           <div className="projects-showcase">
//             <div className="projects-carousel-section">
//               <div className="project-main-carousel">
//                 <div className="project-image-container">
//                   <img 
//                     src={projectImages[currentProjectImage].url}
//                     alt={projectImages[currentProjectImage].title}
//                     className="project-carousel-image"
//                   />
//                   <div className="project-image-overlay">
//                     <h4>{projectImages[currentProjectImage].title}</h4>
//                     <p>{projectImages[currentProjectImage].description}</p>
//                   </div>
//                 </div>
                
//                 <div className="project-carousel-controls">
//                   <button 
//                     onClick={() => setCurrentProjectImage(prev => (prev - 1 + projectImages.length) % projectImages.length)}
//                     className="carousel-control-btn"
//                   >
//                     <ChevronLeft size={24} />
//                   </button>
//                   <button 
//                     onClick={() => setCurrentProjectImage(prev => (prev + 1) % projectImages.length)}
//                     className="carousel-control-btn"
//                   >
//                     <ChevronRight size={24} />
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             <div className="projects-grid-enhanced">
//               {mockData.projects.map((project, index) => (
//                 <motion.div 
//                   key={index}
//                   className={`project-card-enhanced ${project.featured ? 'breakthrough' : ''}`}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   {project.featured && (
//                     <div className="breakthrough-badge-enhanced">
//                       <Award size={16} />
//                       <span>Breakthrough Innovation</span>
//                     </div>
//                   )}
                  
//                   <div className="project-visual-header">
//                     <div className="project-icon-container">
//                       {project.featured ? <Target size={32} /> : <Settings size={32} />}
//                     </div>
//                     <div className="project-category-visual">{project.category}</div>
//                   </div>
                  
//                   <div className="project-content-enhanced">
//                     <h3>{project.title}</h3>
//                     <p>{project.description}</p>
                    
//                     <div className="project-specs-visual">
//                       <h4>Technical Specifications</h4>
//                       <div className="specs-checklist">
//                         {project.specifications.slice(0, 4).map((spec, specIndex) => (
//                           <div key={specIndex} className="spec-check-item">
//                             <div className="spec-check-mark">✓</div>
//                             <span>{spec}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
                    
//                     <div className="project-tech-visual">
//                       {project.technologies.slice(0, 5).map((tech, techIndex) => (
//                         <span key={techIndex} className="tech-badge-visual">{tech}</span>
//                       ))}
//                     </div>
                    
//                     {project.featured && (
//                       <Link to="/prism" className="project-cta-enhanced">
//                         <span>View Complete System Documentation</span>
//                         <ArrowRight size={16} />
//                       </Link>
//                     )}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Footer with Visual Elements */}
//       <footer className="tesla-white-footer-enhanced">
//         <div className="tesla-container">
//           <div className="footer-content-enhanced">
//             <div className="footer-branding-section">
//               <h3>ENGINEERING PORTFOLIO</h3>
//               <p>Nanotechnology Engineering Student</p>
//               <div className="footer-credentials-visual">
//                 <div className="credential-item">
//                   <div className="credential-icon">
//                     <Award size={16} />
//                   </div>
//                   <span>University of Waterloo</span>
//                 </div>
//                 <div className="credential-item">
//                   <div className="credential-icon">
//                     <Users size={16} />
//                   </div>
//                   <span>Co-operative Education</span>
//                 </div>
//                 <div className="credential-item">
//                   <div className="credential-icon">
//                     <Target size={16} />
//                   </div>
//                   <span>Expected 2026</span>
//                 </div>
//               </div>
              
//               <div className="availability-status-enhanced">
//                 <div className="status-indicator-enhanced available">
//                   <div className="status-pulse"></div>
//                 </div>
//                 <div className="status-text">
//                   <span className="status-main">Available for Final Co-op Term</span>
//                   <span className="status-detail">Seeking advanced engineering opportunities</span>
//                 </div>
//               </div>
//             </div>
            
//             <div className="footer-competencies-visual">
//               <h4>Core Engineering Competencies</h4>
//               <div className="competencies-grid">
//                 <div className="competency-item">
//                   <div className="competency-icon">
//                     <Target size={20} />
//                   </div>
//                   <div className="competency-details">
//                     <span className="competency-name">Precision Engineering</span>
//                     <span className="competency-level">Nanometer-scale expertise</span>
//                   </div>
//                 </div>
                
//                 <div className="competency-item">
//                   <div className="competency-icon">
//                     <Zap size={20} />
//                   </div>
//                   <div className="competency-details">
//                     <span className="competency-name">Process Optimization</span>
//                     <span className="competency-level">80% improvement achieved</span>
//                   </div>
//                 </div>
                
//                 <div className="competency-item">
//                   <div className="competency-icon">
//                     <Settings size={20} />
//                   </div>
//                   <div className="competency-details">
//                     <span className="competency-name">Advanced Microscopy</span>
//                     <span className="competency-level">PRISM system development</span>
//                   </div>
//                 </div>
                
//                 <div className="competency-item">
//                   <div className="competency-icon">
//                     <Activity size={20} />
//                   </div>
//                   <div className="competency-details">
//                     <span className="competency-name">Industrial Automation</span>
//                     <span className="competency-level">Manufacturing optimization</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Portfolio;


import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, Award, Users, BarChart3, Target, Zap, Activity, Settings, ArrowRight, Play, Pause, Cpu, Eye, BellDot, ShieldBan, ShieldMinusIcon, AtomIcon, LucideAsterisk, RocketIcon, MicroscopeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import mockData from "../data/mock";

export default function PortfolioWhite() {
  const [activeTab, setActiveTab] = useState("performance");
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [currentEquipmentImage, setCurrentEquipmentImage] = useState(0);
  const [currentProjectImage, setCurrentProjectImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const shrekUrl = process.env.PUBLIC_URL + "/AxivionPrismBanner.png";
  const longPhotoUrl = process.env.PUBLIC_URL + "/longphoto.png";
  const imageUrl = process.env.PUBLIC_URL + "/image.jpg";


  const heroImages = useMemo(() => [
  { url: longPhotoUrl, title: "Advanced Microscopy", description: "Precision at the nanometer scale" },
  { url: imageUrl, title: "CNC Manufacturing", description: "Aerospace‑grade tolerances" },
  { url: shrekUrl, title: "Instrumentation Lab", description: "Research‑grade setups" }
  ], [shrekUrl]);
  
  const equipmentImages = useMemo(() => [
  { url: shrekUrl, title: "SEM Stage", category: "Electron Microscopy" },
  { url: shrekUrl, title: "TGA", category: "Thermal Analysis" },
  { url: shrekUrl, title: "AFM Cantilever", category: "Surface Analysis" },
  { url: shrekUrl, title: "UTM", category: "Mechanical Testing" },
  { url: shrekUrl, title: "CNC Lathe", category: "Manufacturing" }
  ], []);
  
  const projectImages = useMemo(() => [
  // use your tall portrait here
  { url: longPhotoUrl, title: "Optical Components", description: "PRISM optical path design" },
  { url: imageUrl,     title: "Precision Tools",   description: "Process optimization" },
  { url: shrekUrl,     title: "Data Systems",      description: "Analytics and dashboards" }
], [longPhotoUrl, shrekUrl]);
  

  useEffect(() => {
    if (!isPlaying) return;
    const t = setInterval(() => {
      setCurrentHeroImage((p) => (p + 1) % heroImages.length);
      setCurrentEquipmentImage((p) => (p + 1) % equipmentImages.length);
      setCurrentProjectImage((p) => (p + 1) % projectImages.length);
    }, 4500);
    return () => clearInterval(t);
  }, [isPlaying, heroImages.length, equipmentImages.length, projectImages.length]);

  return (
    <div className="min-h-screen w-full bg-white text-black">
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b border-black/10">
        <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="font-semibold tracking-widest">DEJAN</div>
            <div className="text-black/50">LATKOVIC</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="https://www.linkedin.com" className="text-black/70 hover:text-black">LinkedIn</a>
            <Link to="/prism" className="rounded-full bg-black text-white px-4 py-2 font-medium hover:bg-black/90">PRISM</Link>
            {/* <button onClick={() => setIsPlaying((s) => !s)} className="rounded-full border border-black/20 px-3 py-2 hover:border-black/40 inline-flex items-center gap-2 text-sm">
              {isPlaying ? <Pause size={14} /> : <Play size={14} />} {isPlaying ? "Pause" : "Play"}
            </button> */}
          </nav>
        </div>
      </header>
{/* 🚧 In-progress announcement bar */}
<div className="sticky top-16 z-40 bg-amber-50/95 backdrop-blur border-y border-amber-200">
  <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between gap-3">
    <div className="flex items-center gap-2 text-sm text-amber-900">
      <span aria-hidden>🚧</span>
      <span>
        This site is a live work-in-progress. Some sections are placeholders.
        <span className="ml-2 font-medium">
          Last update: {new Date().toLocaleString('en-CA', { dateStyle: 'medium', timeStyle: 'short' })}
        </span>
      </span>
    </div>
  </div>
</div>

      <section className="relative h-[88vh] overflow-hidden pt-14">
        <div className="absolute inset-0 z-10">
          <img src={heroImages[currentHeroImage].url} alt={heroImages[currentHeroImage].title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/60 via-white/50 to-white" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-between">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="px-6 pt-20 pb-10">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1 text-xs uppercase tracking-widest text-black/70">
                <MicroscopeIcon size={14} /> Nano Photonics • Nano-Fluidics Engineering
              </div>
              <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-balance">
                Nanotechnology
                <span className="block text-black/60">Engineer</span>
              </h1>
              <p className="mt-5 max-w-2xl text-black/70">Please Ignore Anything you see here for now. Currently Working on it 3:39 AM 9/16/2025</p>
              <div className="mt-8 flex items-center gap-3">
                <Link to="/prism" className="rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-black/90 inline-flex items-center gap-2">View PRISM <ArrowRight size={18} /></Link>
                <a href="#specifications" className="rounded-full border border-black/20 px-6 py-3 text-sm font-medium hover:border-black/40">Technical Specs</a>
              </div>
            </div>
          </motion.div>
          
        </div>
        <div className="absolute inset-y-0 right-0 z-20 flex items-center pr-4">
          <button onClick={() => setCurrentHeroImage((p) => (p - 1 + heroImages.length) % heroImages.length)} className="rounded-full border border-black/10 bg-white/80 backdrop-blur p-2 hover:bg-white"><ChevronRight size={18} /></button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          <button onClick={() => setCurrentHeroImage((p) => (p + 1) % heroImages.length)} className="rounded-full border border-black/10 bg-white/80 backdrop-blur p-2 hover:bg-white"><ChevronLeft size={18} /></button>
        </div>
      </section>
{/* HIGHLIGHTS (glass cards that don’t clip text) */}
<section aria-labelledby="highlights" className="relative -mt-8 z-20">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { icon: Users,   title: "IQC (University of Waterloo)", label: "Research Experience" },
        { icon: Target,  title: "PRISM (Axivion Instruments)",  label: "Core Project" },
        { icon: Settings,title: "Optics • Mechanical • Software", label: "Technical Breadth" },
        { icon: Award,   title: "Photonics North 2025",         label: "Recognition" },
      ].map((h) => (
        <div
          key={h.title}
          title={h.title}
          className="group flex items-center gap-3 rounded-xl border border-black/10
                     bg-white/60 backdrop-blur-md px-5 py-3 shadow-sm hover:shadow-md transition"
        >
          <div className="h-9 w-9 rounded-full border border-black/10 grid place-items-center bg-white/80">
            {React.createElement(h.icon, { size: 18 })}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-medium leading-tight break-words whitespace-normal">
              {h.title}
            </div>
            <div className="text-[11px] text-black/60">{h.label}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section id="specifications" className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-4xl font-semibold tracking-tight">Engineering Specifications</h2>
            <div className="flex items-center gap-2">
              {(["performance","equipment","software","systems"]).map((t) => (
                <button key={t} onClick={() => setActiveTab(t)} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${activeTab===t?"bg-black text-white":"border border-black/20 text-black/80 hover:text-black"}`}>
                  {t==="performance"&&<BarChart3 size={16}/>} {t==="equipment"&&<Settings size={16}/>} {t==="software"&&<Cpu size={16}/>} {t==="systems"&&<Target size={16}/>} {t.charAt(0).toUpperCase()+t.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "equipment" && (
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="relative rounded-3xl overflow-hidden border border-black/10 bg-white">
                <div className="relative w-full h-[700px]">
                  <img
                    src={equipmentImages[currentEquipmentImage].url}
                    alt={equipmentImages[currentEquipmentImage].title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-white via-white/70 to-transparent">
                  <div className="text-lg font-semibold">{equipmentImages[currentEquipmentImage].title}</div>
                  <div className="text-sm text-black/60">{equipmentImages[currentEquipmentImage].category}</div>
                </div>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <button onClick={() => setCurrentEquipmentImage((p) => (p - 1 + equipmentImages.length) % equipmentImages.length)} className="rounded-full border border-black/10 bg-white/90 p-2"><ChevronLeft size={18} /></button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button onClick={() => setCurrentEquipmentImage((p) => (p + 1) % equipmentImages.length)} className="rounded-full border border-black/10 bg-white/90 p-2"><ChevronRight size={18} /></button>
                </div>
              </div>
              <div className="rounded-3xl border border-black/10 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Analysis & Characterization</h3>
                  <div className="rounded-full bg-black text-white text-xs px-3 py-1">Expert</div>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {mockData.skills.machines.map((m, i) => (
                    <div key={i} className="rounded-2xl border border-black/10 p-4 flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full border border-black/10 grid place-items-center"><Settings size={18} /></div>
                      <div className="flex-1">
                        <div className="font-medium">{m}</div>
                        <div className="mt-2 h-1.5 w-full rounded bg-black/10">
                          <div className="h-1.5 rounded bg-black" style={{ width: "95%" }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "performance" && (
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="rounded-3xl border border-black/10 p-6">
                <h3 className="text-xl font-semibold">Academic Performance</h3>
                <div className="mt-6 space-y-4">
                  {[{l:"Institution Ranking",v:"Top 50 Global",p:95},{l:"Program Specialization",v:"Nanotechnology Engineering",p:100},{l:"Co‑op Program",v:"Advanced Track",p:90}].map((r) => (
                    <div key={r.l}>
                      <div className="flex items-center justify-between text-sm"><span className="text-black/60">{r.l}</span><span className="font-medium">{r.v}</span></div>
                      <div className="mt-2 h-1.5 w-full rounded bg-black/10"><div className="h-1.5 rounded bg-black" style={{ width: `${r.p}%` }} /></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-black/10 p-6">
                <h3 className="text-xl font-semibold">Industrial Impact</h3>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {[{v:"20%",l:"Capacity"},{v:"80%",l:"Efficiency"},{v:"800+",l:"Units"}].map((c) => (
                    <div key={c.l} className="aspect-square rounded-2xl border border-black/10 grid place-items-center">
                      <div className="text-center">
                        <div className="text-2xl font-semibold">{c.v}</div>
                        <div className="text-xs text-black/60">{c.l}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "software" && (
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="rounded-3xl border border-black/10 p-6">
                <div className="flex items-center justify-between"><div className="flex items-center gap-2"><Cpu size={18} /><h3 className="text-xl font-semibold">Engineering Software</h3></div><div className="text-sm">95%</div></div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {mockData.skills.frameworks.map((f,i)=> (
                    <div key={i} className="rounded-2xl border border-black/10 p-4 flex items-center justify-between">
                      <div>{f}</div>
                      <div className="flex items-center gap-1">
                        <div className="size-2 rounded-full bg-black"></div>
                        <div className="size-2 rounded-full bg-black"></div>
                        <div className="size-2 rounded-full bg-black"></div>
                        <div className="size-2 rounded-full bg-black"></div>
                        <div className="size-2 rounded-full bg-black/20"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-black/10 p-6">
                <div className="flex items-center justify-between"><div className="flex items-center gap-2"><Activity size={18} /><h3 className="text-xl font-semibold">Programming Languages</h3></div><div className="text-sm">92%</div></div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {mockData.skills.languages.map((l,i)=> (
                    <div key={i} className="rounded-2xl border border-black/10 p-4 flex items-center justify-between">
                      <div>{l}</div>
                      <div className="flex items-center gap-1">
                        <div className="size-2 rounded-full bg-black"></div>
                        <div className="size-2 rounded-full bg-black"></div>
                        <div className="size-2 rounded-full bg-black"></div>
                        <div className="size-2 rounded-full bg-black"></div>
                        <div className="size-2 rounded-full bg-black"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "systems" && (
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[{i:Target,t:"Precision Systems",rows:[["Positioning Accuracy","10–30 nm"],["Stability","<0.1% drift"],["Operating Range","4 K – 300 K"]]},{i:Zap,t:"Process Automation",rows:[["Efficiency","80%"],["Speed","69 s/unit"],["Volume","800+ /day"]]},{i:Activity,t:"Quality Assurance",rows:[["Flatness","< 3 µm components"],["Reliability","99.9% uptime"],["Protocol","ISO aligned"]]}].map((c) => (
                <div key={c.t} className="rounded-3xl border border-black/10 p-6">
                  <div className="h-10 w-10 rounded-xl border border-black/10 grid place-items-center mb-3">{React.createElement(c.i, { size:20 })}</div>
                  <h3 className="text-xl font-semibold">{c.t}</h3>
                  <div className="mt-4 space-y-3">
                    {c.rows.map(([l,v]) => (
                      <div key={l} className="flex items-center justify-between text-sm"><span className="text-black/60">{l}</span><span className="font-medium">{v}</span></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="performance" className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <h2 className="text-4xl font-semibold tracking-tight">Professional Performance</h2>
          <p className="text-black/60 mt-2">Quantified impact and technical achievements across roles</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockData.experience.map((exp, i) => (
              <motion.div key={i} initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.06 }} className="rounded-3xl border border-black/10 p-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-24 w-32 overflow-hidden rounded-xl border border-black/10">
                    <img     src={process.env.PUBLIC_URL + "/image.jpg"}

 alt={exp.company} className="h-full w-full object-cover" />
                    <div className="absolute bottom-1 right-1 rounded-full bg-white/90 text-[10px] px-2 py-0.5 border border-black/10">{exp.period}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-black/60">{exp.category}</div>
                    <div className="text-xl font-semibold">{exp.role}</div>
                    <div className="text-sm">{exp.company}</div>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {exp.keyMetrics.slice(0,3).map((m, j) => (
                        <div key={j} className="rounded-xl border border-black/10 p-3">
                          <div className="text-lg font-semibold leading-none">{m.value}</div>
                          <div className="text-[11px] text-black/60 mt-1">{m.description}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 space-y-2">
                      {exp.achievements.slice(0,3).map((a,k)=>(
                        <div key={k} className="flex items-start gap-2 text-sm"><div className="mt-1 size-1.5 rounded-full bg-black"/><span>{a}</span></div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative bg-gradient-to-b from-white to-black/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <h2 className="text-4xl font-semibold tracking-tight">Engineering Projects</h2>
          <p className="text-black/60 mt-2">Breakthroughs with visual documentation</p>

          {/* FULL-WIDTH CAROUSEL */}
          <div className="mt-10 relative rounded-3xl overflow-hidden border border-black/10 bg-white">
            <div className="relative w-full h-[560px] md:h-[640px]">
              <img
                src={projectImages[currentProjectImage].url}
                alt={projectImages[currentProjectImage].title}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            {/* caption overlay */}
            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <div className="text-white text-lg font-semibold">{projectImages[currentProjectImage].title}</div>
              <div className="text-white/80 text-sm">{projectImages[currentProjectImage].description}</div>
            </div>

            {/* arrows */}
            <button
              onClick={() => setCurrentProjectImage((p) => (p - 1 + projectImages.length) % projectImages.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-black/10 bg-white/95 p-2 shadow"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setCurrentProjectImage((p) => (p + 1) % projectImages.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-black/10 bg-white/95 p-2 shadow"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* BARS / CARDS BELOW */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {mockData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className={`rounded-3xl border border-black/10 p-6 ${project.featured ? "bg-black text-white" : "bg-white"}`}
              >
                {project.featured && (
                  <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-3">
                    <Award size={14} /> Breakthrough
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-black/60 data-[featured=true]:text-white/70" data-featured={project.featured}>Category</div>
                  <div className="text-sm font-medium">{project.category}</div>
                </div>
                <div className="mt-2 text-xl font-semibold">{project.title}</div>
                <p className={`mt-2 text-sm ${project.featured ? "text-white/80" : "text-black/70"}`}>{project.description}</p>
                <div className="mt-4">
                  <div className="text-sm font-medium">Technical Specifications</div>
                  <div className="mt-2 space-y-2">
                    {project.specifications.slice(0, 4).map((s, si) => (
                      <div key={si} className="flex items-center gap-2 text-sm">
                        <div className={`size-4 rounded-full grid place-items-center ${project.featured ? "bg-white text-black" : "bg-black text-white"}`}>✓</div>
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((t, ti) => (
                    <span
                      key={ti}
                      className={`rounded-full border px-3 py-1 text-xs ${project.featured ? "border-white/30 text-white/90" : "border-black/20 text-black/80"}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.featured && (
                  <Link to="/prism" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90">
                    View System <ArrowRight size={16} />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <footer className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="text-sm tracking-widest text-black/60">ENGINEERING PORTFOLIO</div>
            <div className="mt-1 text-2xl font-semibold">Dejan Latkovic</div>
            <div className="mt-2 flex flex-wrap gap-3 text-sm text-black/70">
              <div className="inline-flex items-center gap-2"><Award size={14}/> University of Waterloo</div>
              <div className="inline-flex items-center gap-2"><Users size={14}/> Co‑operative Education</div>
              <div className="inline-flex items-center gap-2"><Eye size={14}/> Graduation 2026</div>
            </div>
            <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-black/20 px-4 py-2 text-sm">
              <div className="relative size-2 rounded-full bg-emerald-500"><span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60"/></div>
              Available for final co‑op • Seeking advanced engineering roles
            </div>
          </div>
          <div>
            <div className="text-sm font-medium">Core Competencies</div>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[{i:Target,n:"Precision Engineering",d:"Nanometer‑scale expertise"},{i:Zap,n:"Process Optimization",d:"80% improvement achieved"},{i:Settings,n:"Advanced Microscopy",d:"PRISM development"},{i:Activity,n:"Industrial Automation",d:"Manufacturing optimization"}].map((c)=> (
                <div key={c.n} className="rounded-2xl border border-black/10 p-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full border border-black/10 grid place-items-center">{React.createElement(c.i,{size:18})}</div>
                  <div><div className="font-medium">{c.n}</div><div className="text-sm text-black/60">{c.d}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-black/60 flex items-center justify-between">
            <div>© {new Date().getFullYear()} Dejan Latkovic</div>
            <div className="flex items-center gap-3">
              {/* <a href="#specifications" className="hover:text-black">Specs</a>
              <a href="#performance" className="hover:text-black">Performance</a>
              <a href="#projects" className="hover:text-black">Projects</a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
