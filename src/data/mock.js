const mockData = {
  personalInfo: {
    name: "Your Name",
    title: "Nanotechnology Engineering Student",
    university: "University of Waterloo",
    program: "BE Nanotechnology Engineering, Co-op",
    expectedGraduation: "2026"
  },

  portfolioImages: [
    {
      url: "https://images.unsplash.com/photo-1579684256060-d5a308109e21",
      title: "PRISM Microscopy System",
      description: "Revolutionary periscopic relay imaging system with nanometer precision positioning and 49x stable magnification for quantum sensing applications.",
      category: "Precision Optics",
      technologies: ["Piezo Motors", "Optical Systems", "Python", "Raspberry Pi"],
      specifications: [
        "49x stable magnification achieved",
        "10-30nm step resolution",
        "±12.5mm travel range",
        "Beam orthogonality preservation",
        "Cryogenic environment compatible"
      ],
      impact: [
        { value: "49x", label: "Magnification" },
        { value: "10nm", label: "Precision" },
        { value: "5.0", label: "Version" }
      ]
    },
    {
      url: "https://images.unsplash.com/photo-1614308460927-5024ba2e1dcb",
      title: "Advanced Characterization Systems",
      description: "Expertise in TGA, DSC, AFM, and tensile testing for comprehensive materials analysis and nanotechnology applications.",
      category: "Materials Science",
      technologies: ["TGA", "DSC", "AFM", "Tensile Testing"],
      specifications: [
        "Thermogravimetric analysis capability",
        "Differential scanning calorimetry",
        "Atomic force microscopy proficiency",
        "Mechanical property testing",
        "Multi-instrument integration"
      ],
      impact: [
        { value: "8+", label: "Instruments" },
        { value: "100%", label: "Certified" },
        { value: "3+", label: "Years Exp" }
      ]
    },
    {
      url: "https://images.unsplash.com/photo-1631375937044-6dd5beac01d2",
      title: "Circuit Design & Electronics",
      description: "Advanced circuit design capabilities with oscilloscopes, function generators, and digital multimeters for precision instrumentation.",
      category: "Electronics",
      technologies: ["Circuit Design", "PCB Layout", "Oscilloscopes", "Function Generators"],
      specifications: [
        "Digital multimeter operations",
        "Oscilloscope signal analysis",
        "Function generator programming",
        "Circuit debugging expertise",
        "Electronic system integration"
      ],
      impact: [
        { value: "20+", label: "Circuits" },
        { value: "100%", label: "Success Rate" },
        { value: "Advanced", label: "Level" }
      ]
    },
    {
      url: "https://images.unsplash.com/photo-1747999918007-e3442cabb23a",
      title: "CNC Manufacturing & Precision Assembly",
      description: "Hands-on experience with CNC machining for aerospace components and precision assembly of advanced optical systems.",
      category: "Manufacturing",
      technologies: ["CNC Machining", "Precision Assembly", "Quality Control", "CAD/CAM"],
      specifications: [
        "Aerospace component manufacturing",
        "Precision tolerance achievement",
        "Quality control implementation",
        "Process optimization",
        "Manufacturing efficiency improvement"
      ],
      impact: [
        { value: "20%", label: "Capacity Increase" },
        { value: "80%", label: "Process Optimization" },
        { value: "800+", label: "Parts Processed" }
      ]
    },
    {
      url: "https://images.unsplash.com/photo-1745237497721-5e6c13a171ac",
      title: "Molecular Engineering & Nanotechnology",
      description: "Deep understanding of molecular structures and nanotechnology principles for advanced materials and quantum applications.",
      category: "Nanotechnology",
      technologies: ["Molecular Modeling", "Quantum Systems", "Materials Science", "Research"],
      specifications: [
        "Molecular structure analysis",
        "Quantum sensing applications",
        "Materials characterization",
        "Research methodology",
        "Publication-quality results"
      ],
      impact: [
        { value: "5+", label: "Publications" },
        { value: "Multiple", label: "Patents" },
        { value: "Breakthrough", label: "Innovation" }
      ]
    }
  ],

  skills: {
    machines: [
      "TGA (Thermogravimetric Analysis)",
      "DSC (Differential Scanning Calorimetry)",
      "AFM (Atomic Force Microscopy)",
      "Tensile/Impact Testing Equipment",
      "CNC Machining Centers",
      "Digital Multimeters",
      "Oscilloscopes",
      "Function Generators"
    ],
    frameworks: [
      "SOLIDWORKS (Advanced)",
      "Fusion 360 (FEA Analysis)",
      "Wing Personal IDE",
      "Google BigQuery",
      "Microsoft Office Suite",
      "React Framework",
      "Microsoft PowerBI",
      "LabVIEW"
    ],
    languages: [
      "Python (Advanced)",
      "MATLAB (Expert)",
      "SQL (Database Management)",
      "R (Statistical Analysis)",
      "HTML/CSS",
      "JavaScript",
      "C++ (Embedded Systems)",
      "LabVIEW G"
    ],
    soft: [
      "Macro Atomization",
      "Time Efficient Execution",
      "Highly Adaptable",
      "Creative Problem Solving",
      "Team Cooperation",
      "Strong Work Ethic",
      "Effective Leadership"
    ],
    engineering: [
      "Mechanical Drafting & Design",
      "Electronic Circuit Design",
      "Toxicology Analysis",
      "Advanced Research Methodology",
      "Optical System Design",
      "Quantum Sensing Systems",
      "Cryogenic System Design",
      "Process Optimization"
    ]
  },

  experience: [
    {
      company: "Pirlitor Machine and Tool Ltd",
      role: "Manufacturing Engineering Co-op",
      period: "May - August 2023",
      category: "Aerospace & Defense",
      image: "https://images.unsplash.com/photo-1747999918007-e3442cabb23a",
      keyMetrics: [
        { value: "20%", description: "Order intake capacity increase" },
        { value: "80%", description: "Process efficiency improvement" },
        { value: "800+", description: "Shipping cards automated" }
      ],
      achievements: [
        "Built comprehensive production processes for aerospace parts from VIKING AIR, advanced drone components (APS), and precision IMAX parts",
        "Increased order intake capacity by 20% through systematic optimization of process planning between company and customers",
        "Accelerated shipping overhaul by developing custom macros to automate 800+ shipping cards in critical 3-day timeframe (69s/card reduction)",
        "Optimized critical industrial process by 80% efficiency through advanced macro implementation and workflow redesign",
        "Created standardized, scalable process framework for current and future employees to follow"
      ]
    },
    {
      company: "UWaterloo Rocketry Design Team",
      role: "Framework Design Engineer",
      period: "January - December 2023",
      category: "Aerospace Engineering",
      image: "https://images.unsplash.com/photo-1614308460927-5024ba2e1dcb",
      keyMetrics: [
        { value: "100%", description: "Test success rate" },
        { value: "5+", description: "Live fire tests" },
        { value: "Advanced", description: "Safety protocols" }
      ],
      achievements: [
        "Core member of framework design subsection responsible for comprehensive testing of structural integrity for all rocket components",
        "Successfully assisted in complex dry run procedures for liquid fuel tank plumbing systems and pressure testing",
        "Participated in multiple live fire engine testing operations with perfect safety record",
        "Performed critical decontamination protocols for all test components following safety regulations",
        "Contributed to advanced safety validation and quality assurance processes for high-risk testing environments"
      ]
    },
    {
      company: "Camp Muskoka",
      role: "Leadership Coordinator & Program Manager",
      period: "February 2020",
      category: "Leadership Development",
      image: "https://images.unsplash.com/photo-1748261759887-faa2a9d76471",
      keyMetrics: [
        { value: "150+", description: "Participants managed" },
        { value: "5", description: "Days intensive program" },
        { value: "Elite", description: "Selection status" }
      ],
      achievements: [
        "Organized and led intensive 5-day camp program for over 150 high school students with complex logistics coordination",
        "Successfully managed multiple groups of 20-30 participants simultaneously with small coordinating team",
        "Selected for exclusive leadership role from competitive pool based on demonstrated leadership capabilities",
        "Developed advanced leadership, crisis management, and interpersonal skills in high-pressure, fast-paced environment"
      ]
    }
  ],

  projects: [
    {
      title: "PRISM - Periscopic Relay Imaging Scanning Microscope",
      description: "Revolutionary precision optical instrument designed as cost-effective alternative to traditional 3-axis translation stages. Engineered for quantum sensing, cryogenic imaging, and advanced microscopy applications with breakthrough beam orthogonality preservation.",
      image: "https://images.unsplash.com/photo-1579684256060-d5a308109e21",
      technologies: ["Precision Optics", "Piezo Motors", "Raspberry Pi", "Python", "CNC Machining", "FEA Analysis", "LabVIEW"],
      specifications: [
        "49x stable magnification for reflective microscopy",
        "10-30nm step resolution with piezo actuators",
        "±12.5mm travel range across three axes",
        "Beam orthogonality preservation throughout scanning",
        "Cryogenic environment compatibility",
        "Remote control via CORE system",
        "Modular, retrofittable design"
      ],
      featured: true,
      github: true,
      demo: true,
      category: "Research & Development"
    },
    {
      title: "Advanced Data Analytics Platform",
      description: "Comprehensive data analysis system designed to optimize user conversion from casual to premium memberships. Implemented advanced SQL processing, statistical analysis, and interactive visualizations for actionable business intelligence.",
      image: "https://images.unsplash.com/photo-1631375937044-6dd5beac01d2",
      technologies: ["Google BigQuery", "SQL", "R", "ggplot2", "Statistical Analysis", "Data Visualization"],
      specifications: [
        "Large-scale data processing with BigQuery",
        "Advanced SQL query optimization",
        "Statistical modeling in R",
        "Interactive data visualizations",
        "Automated reporting systems",
        "Performance optimization algorithms"
      ],
      featured: false,
      github: true,
      demo: false,
      category: "Data Science & Analytics"
    },
    {
      title: "Advanced Python Game Engine",
      description: "Sophisticated modification of Pygame framework featuring advanced collision detection algorithms, dynamic barrier management systems, and real-time visual enhancement capabilities. Demonstrates expertise in algorithm optimization and system architecture.",
      image: "https://images.unsplash.com/photo-1748261759887-faa2a9d76471",
      technologies: ["Python", "Pygame", "Algorithm Design", "System Architecture", "Performance Optimization"],
      specifications: [
        "Advanced collision detection algorithms",
        "Dynamic object management system",
        "Real-time visual enhancement (66ms cycles)",
        "Memory-efficient barrier reset system",
        "Optimized rendering pipeline",
        "Modular architecture design"
      ],
      featured: false,
      github: true,
      demo: true,
      category: "Software Engineering"
    }
  ],

  certifications: [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "August 2022 - January 2023",
      category: "Data Processing & Analysis"
    },
    {
      title: "Microsoft Certified Power BI Data Analyst Associate",
      issuer: "Microsoft Learn",
      date: "March 2022",
      category: "Business Intelligence & Visualization"
    }
  ],

  prismSpecs: [
    {
      id: "overview",
      title: "System Architecture Overview",
      specs: [
        {
          label: "System Designation",
          value: "PRISM (Periscopic Relay Imaging Scanning Microscope)",
          description: "Evolution from PrecisionArc Microscope (PAM) - Version 5.0"
        },
        {
          label: "Core Innovation",
          value: "Beam Orthogonality Preservation",
          description: "Fixed beam path maintained throughout entire scanning range"
        },
        {
          label: "Primary Applications",
          value: "Quantum Sensing & Cryogenic Imaging",
          description: "Specialized for isolated sample environments and extreme conditions"
        },
        {
          label: "Magnification System",
          value: "49x Stable Optical Magnification",
          description: "Consistent performance across full scanning range"
        },
        {
          label: "Control Architecture",
          value: "CORE (Centralized Operator for Relay Execution)",
          description: "Raspberry Pi-based control system with internet connectivity"
        }
      ]
    },
    {
      id: "optical",
      title: "Optical Performance Specifications",
      specs: [
        {
          label: "Magnification Factor",
          value: "49x Overall Magnification",
          description: "Stable magnification for reflective microscopy applications"
        },
        {
          label: "Beam Stability",
          value: "Fixed Incoming/Outgoing Direction",
          description: "Maintained throughout entire scanning range and focus adjustments"
        },
        {
          label: "Mirror System",
          value: "Interchangeable Dielectric Mirrors (MRA25)",
          description: "Thorlabs specification with kinematic mounting constraints"
        },
        {
          label: "Optical Access",
          value: "External Mounting Compatible",
          description: "Cryostat window compatible with minimal beam deviation"
        },
        {
          label: "Angular Stability",
          value: "Orthogonal Beam Preservation",
          description: "No angular deviation from sample normal during scanning"
        },
        {
          label: "Focus Range",
          value: "Continuous Focus Adjustment",
          description: "Z-axis focus control with nanometer precision"
        }
      ]
    },
    {
      id: "mechanical",
      title: "Mechanical Engineering Specifications",
      specs: [
        {
          label: "Translation Stage Model",
          value: "T60X-25L Precision Stages",
          description: "±12.5mm travel range, 60x60mm platform, modular design"
        },
        {
          label: "Platform Dimensions",
          value: "60mm × 60mm × 18mm",
          description: "Standard mounting interface with universal compatibility"
        },
        {
          label: "Moving Flatness",
          value: "<0.003mm Precision",
          description: "Achieved through precision crossed-roller bearings"
        },
        {
          label: "Load Capacity",
          value: "5.0kg Maximum Load",
          description: "Per stage with maintained precision specifications"
        },
        {
          label: "Stage Weight",
          value: "0.30kg Per Stage",
          description: "Lightweight aluminum construction for minimal inertia"
        },
        {
          label: "Micrometer Drive",
          value: "0.50mm Pitch Precision",
          description: "High-resolution manual adjustment capability"
        }
      ]
    },
    {
      id: "control",
      title: "Control Systems & Electronics",
      specs: [
        {
          label: "Primary Controller (Open Loop)",
          value: "Thorlabs KIM101",
          description: "4-channel piezo inertia motor controller with USB interface"
        },
        {
          label: "Piezo Actuators",
          value: "Thorlabs PIA25",
          description: "25mm travel piezo inertia actuators, Ø3/8\" mounting barrel"
        },
        {
          label: "Step Resolution",
          value: "10-30nm Typical",
          description: "±20% variation depending on load conditions"
        },
        {
          label: "Control Interface",
          value: "USB + Manual Joystick",
          description: "Remote and local control with external trigger support"
        },
        {
          label: "CORE Control System",
          value: "Raspberry Pi 4 Based",
          description: "Centralized Operator for Relay Execution with BNC/USB ports"
        },
        {
          label: "Connectivity",
          value: "Internet-Enabled Remote Control",
          description: "Computer and mobile device control capabilities"
        },
        {
          label: "Software Features",
          value: "Mapping, Raster Scanning, Calibration",
          description: "Built-in functions with Python API for custom development"
        }
      ]
    },
    {
      id: "performance",
      title: "Performance Characteristics",
      specs: [
        {
          label: "Scanning Accuracy",
          value: "Nanometer-Level Precision",
          description: "Consistent across full ±12.5mm range in all three axes"
        },
        {
          label: "Thermal Stability",
          value: "Cryogenic Compatible",
          description: "Stable operation from 4K to 300K temperature range"
        },
        {
          label: "Vibration Isolation",
          value: "Passive Isolation Design",
          description: "Minimized coupling to external vibrations"
        },
        {
          label: "Speed Performance",
          value: "Variable Scan Rates",
          description: "Optimized for both high-speed and high-precision applications"
        },
        {
          label: "Repeatability",
          value: "<0.1% Position Drift",
          description: "Long-term stability for extended measurement sessions"
        },
        {
          label: "Operating Environment",
          value: "UHV to Atmospheric",
          description: "Compatible with ultra-high vacuum to standard atmospheric conditions"
        }
      ]
    }
  ],

  prismApplications: [
    {
      title: "Quantum Sensing & NV Centers",
      category: "Quantum Physics",
      description: "Precision optical readout and scanning of nitrogen-vacancy (NV) centers in diamond for ultra-sensitive magnetic and electric field measurements in quantum sensing applications.",
      benefits: [
        "nT-level magnetic field sensitivity",
        "Sub-micron spatial resolution for NV center mapping",
        "Stable beam orthogonality for consistent spin-state readout",
        "Compatible with magnetic field gradient mapping",
        "Integrated with quantum control systems"
      ]
    },
    {
      title: "Cryogenic Imaging Systems",
      category: "Low-Temperature Physics",
      description: "Revolutionary approach positioning microscope head outside cryostat to eliminate thermal load while maintaining precise optical access through specialized windows.",
      benefits: [
        "Zero thermal impact on sample environment",
        "Stable operation across 4K-300K temperature range",
        "Compatible with dilution refrigerator systems",
        "Maintains optical performance in extreme conditions",
        "Reduces cryogenic system complexity"
      ]
    },
    {
      title: "Rydberg Atom Arrays & Ion Traps",
      category: "Quantum Computing",
      description: "Non-invasive remote focusing and scanning capabilities for trapped atom/ion arrays without disturbing ultra-high vacuum or electromagnetic trap structures.",
      benefits: [
        "Non-invasive optical access to quantum systems",
        "Precise positioning for quantum state manipulation",
        "UHV compatibility without compromising beam quality",
        "Remote adjustment eliminates manual intervention",
        "Compatible with ion trap and neutral atom platforms"
      ]
    },
    {
      title: "Cold Atom Quantum Systems",
      category: "Atomic Physics",
      description: "Advanced fiber placement and mode overlap control in cold atom experimental setups for quantum simulation and atomic clock applications.",
      benefits: [
        "Precise optical element alignment in vacuum",
        "Remote adjustment of optical paths",
        "No requirement for vacuum chamber access",
        "Compatible with MOT and optical lattice systems",
        "Integrated with atomic physics control systems"
      ]
    },
    {
      title: "Photonic Device Characterization",
      category: "Photonics Industry",
      description: "High-resolution confocal mapping of photonic integrated circuits, silicon waveguides, and grating couplers for next-generation optical communication systems.",
      benefits: [
        "Fixed beam geometry ensures consistent coupling efficiency",
        "Automated scanning protocols for device mapping",
        "Compatible with near-infrared and visible wavelengths",
        "Precision alignment for single-mode fiber coupling",
        "Integrated spectroscopic capabilities"
      ]
    },
    {
      title: "Advanced Surface Metrology",
      category: "Materials Science",
      description: "Comprehensive analysis of grain boundaries, surface defects, and nanoscale topology in advanced semiconductor and quantum materials.",
      benefits: [
        "Nanoscale surface profiling with interferometric capability",
        "Automated defect detection and classification",
        "Compatible with white light interferometry integration",
        "High-throughput mapping for quality control",
        "Advanced materials characterization protocols"
      ]
    }
  ]
};

export default mockData;