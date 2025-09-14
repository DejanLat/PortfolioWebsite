const mockData = {
  personalInfo: {
    name: "Your Name",
    title: "Nanotechnology Engineering Student",
    university: "University of Waterloo",
    program: "BE Nanotechnology Engineering, Co-op",
    expectedGraduation: "2026"
  },

  skills: {
    machines: [
      "TGA (Thermogravimetric Analysis)",
      "DSC (Differential Scanning Calorimetry)",
      "AFM (Atomic Force Microscopy)",
      "Tensile/Impact Testing",
      "CNC Machining",
      "DMM (Digital Multimeter)",
      "Oscilloscopes",
      "Function Generators"
    ],
    frameworks: [
      "SOLIDWORKS",
      "Wing Personal IDE",
      "Big Query",
      "MS Office Suite",
      "React",
      "MS PowerBI",
      "Fusion 360"
    ],
    languages: [
      "Python",
      "MATLAB",
      "SQL",
      "R",
      "HTML",
      "JavaScript",
      "CSS",
      "LabVIEW"
    ],
    soft: [
      "Macro Atomization",
      "Time Efficient",
      "Adaptable",
      "Creative Problem Solving",
      "Cooperative",
      "Strong Work Ethic",
      "Effective Teamwork"
    ],
    engineering: [
      "Mechanical Drafting",
      "Circuit Design",
      "Toxicology Analysis",
      "Research Proficiency",
      "Optical System Design",
      "Quantum Sensing",
      "Cryogenic Systems"
    ]
  },

  experience: [
    {
      company: "Pirlitor Machine and Tool Ltd",
      role: "Manufacturing Engineering Co-op",
      period: "May - August 2023",
      achievements: [
        "Built production processes for aerospace parts from VIKING AIR, drone components (APS), and precision IMAX parts",
        "Increased order intake capacity by 20% through optimized process planning between company and customers",
        "Accelerated shipping overhaul by automating 800+ shipping cards in 3 days using custom macros (69s/card reduction)",
        "Optimized critical industrial process by 80% efficiency through advanced macro implementation",
        "Created standardized process framework for current and future employees"
      ]
    },
    {
      company: "UWaterloo Rocketry Design Team",
      role: "Framework Design Engineer",
      period: "January - December 2023",
      achievements: [
        "Part of framework design subsection responsible for testing structural integrity of rocket components",
        "Assisted in dry run procedures for liquid fuel tank plumbing systems",
        "Participated in live fire engine testing operations",
        "Performed decontamination protocols for all test components",
        "Contributed to safety validation and quality assurance processes"
      ]
    },
    {
      company: "Camp Muskoka",
      role: "Leadership Coordinator",
      period: "February 2020",
      achievements: [
        "Organized and led intensive 5-day camp program for high school students",
        "Managed multiple groups of 20-30 participants with small coordinating team",
        "Selected for exclusive leadership role based on demonstrated capabilities",
        "Developed leadership and crisis management skills in high-pressure environment"
      ]
    }
  ],

  projects: [
    {
      title: "PRISM - Periscopic Relay Imaging Scanning Microscope",
      description: "Revolutionary precision optical instrument designed as cost-effective alternative to traditional 3-axis translation stages. Features 49x magnification, nanometer-precision positioning, and applications in quantum sensing and cryogenic imaging.",
      technologies: ["Precision Optics", "Piezo Motors", "Raspberry Pi", "Python", "CNC Machining", "FEA Analysis"],
      featured: true,
      github: true,
      demo: true,
      category: "Research & Development"
    },
    {
      title: "Data Analytics Capstone Project",
      description: "Comprehensive data analysis project focused on converting casual users to annual members. Utilized Big Query for data sanitization and SQL for large dataset processing with actionable insights.",
      technologies: ["Big Query", "SQL", "R", "ggplot2", "Data Visualization"],
      featured: false,
      github: true,
      demo: false,
      category: "Data Science"
    },
    {
      title: "Python Pygame Development",
      description: "Advanced modification of existing Pygame with unique collision detection, dynamic barrier reset system, and visual enhancement features. Developed expertise in debugging and Python optimization.",
      technologies: ["Python", "Pygame", "Algorithm Design", "Game Development"],
      featured: false,
      github: true,
      demo: true,
      category: "Software Development"
    }
  ],

  certifications: [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "August 2022 - January 2023",
      category: "Data Processing"
    },
    {
      title: "Microsoft Certified Power BI Data Analyst Associate",
      issuer: "Microsoft Learn",
      date: "March 2022",
      category: "Data Processing"
    }
  ],

  prismSpecs: [
    {
      id: "overview",
      title: "System Overview",
      specs: [
        {
          label: "System Name",
          value: "PRISM (Periscopic Relay Imaging Scanning Microscope)",
          description: "Originally PrecisionArc Microscope (PAM)"
        },
        {
          label: "Current Version",
          value: "Version 5.0",
          description: "CNC-machined with FEA optimization"
        },
        {
          label: "Primary Application",
          value: "Quantum Sensing & Cryogenic Imaging",
          description: "Specialized for isolated sample environments"
        },
        {
          label: "Key Innovation",
          value: "Beam Orthogonality Preservation",
          description: "Fixed beam path regardless of stage movement"
        }
      ]
    },
    {
      id: "optical",
      title: "Optical Performance",
      specs: [
        {
          label: "Magnification",
          value: "49x Overall",
          description: "Stable magnification for reflective microscopy"
        },
        {
          label: "Beam Stability",
          value: "Fixed Incoming/Outgoing Direction",
          description: "Maintained throughout scanning range"
        },
        {
          label: "Mirror Type",
          value: "Interchangeable Dielectric (MRA25)",
          description: "Thorlabs specification"
        },
        {
          label: "Optical Access",
          value: "External Mounting Compatible",
          description: "Cryostat window compatible"
        }
      ]
    },
    {
      id: "mechanical",
      title: "Mechanical Specifications",
      specs: [
        {
          label: "Translation Stage",
          value: "T60X-25L",
          description: "±12.5mm travel range, 60x60mm platform"
        },
        {
          label: "Platform Size",
          value: "60mm x 60mm",
          description: "Standard mounting interface"
        },
        {
          label: "Stage Thickness",
          value: "18mm",
          description: "Optimized for low-profile applications"
        },
        {
          label: "Moving Flatness",
          value: "<0.003mm",
          description: "Precision crossed-roller bearings"
        },
        {
          label: "Load Capacity",
          value: "Up to 5.0kg",
          description: "Per stage maximum"
        },
        {
          label: "Weight",
          value: "0.30kg per stage",
          description: "Lightweight aluminum construction"
        }
      ]
    },
    {
      id: "control",
      title: "Control Systems",
      specs: [
        {
          label: "Controller (Open Loop)",
          value: "Thorlabs KIM101",
          description: "4-channel piezo inertia motor controller"
        },
        {
          label: "Actuator",
          value: "Thorlabs PIA25",
          description: "25mm travel piezo inertia actuator"
        },
        {
          label: "Step Resolution",
          value: "10-30nm typical",
          description: "±20% variation depending on load"
        },
        {
          label: "Control Interface",
          value: "USB + Manual Joystick",
          description: "Remote and local control options"
        },
        {
          label: "CORE System",
          value: "Raspberry Pi Based",
          description: "Centralized Operator for Relay Execution"
        },
        {
          label: "Connectivity",
          value: "Internet Enabled",
          description: "Remote control via computer or mobile"
        }
      ]
    }
  ],

  prismApplications: [
    {
      title: "Quantum Sensing",
      category: "Research",
      description: "Optical readout and scanning of nitrogen-vacancy (NV) centers in diamond for magnetic and electric field sensing.",
      benefits: [
        "Precise spin-state readout capabilities",
        "Magnetic field gradient mapping",
        "Stable beam orthogonality for consistent measurements"
      ]
    },
    {
      title: "Cryogenic Imaging",
      category: "Research",
      description: "Microscope head positioned outside cryostat to reduce thermal load while maintaining optical access.",
      benefits: [
        "Minimal thermal impact on sample environment",
        "Stable operation in extreme temperature conditions",
        "Compatible with standard cryostat windows"
      ]
    },
    {
      title: "Rydberg Atom Arrays & Ion Traps",
      category: "Quantum Computing",
      description: "Remote focusing and scanning over trapped atom/ion arrays without disturbing vacuum or trap structure.",
      benefits: [
        "Non-invasive optical access",
        "Precise positioning for quantum state manipulation",
        "Compatible with ultra-high vacuum environments"
      ]
    },
    {
      title: "Cold Atom Systems",
      category: "Research",
      description: "Fiber placement and mode overlap control in cold atom experimental setups.",
      benefits: [
        "Precise optical element alignment",
        "Remote adjustment capabilities",
        "No manual vacuum chamber intervention required"
      ]
    },
    {
      title: "Photonic Device Characterization",
      category: "Industry",
      description: "Confocal mapping of photonic integrated circuits, waveguides, and grating couplers.",
      benefits: [
        "Fixed beam geometry for consistent coupling",
        "High-resolution device mapping",
        "Automated scanning protocols"
      ]
    },
    {
      title: "Surface Metrology",
      category: "Quality Control",
      description: "Analysis of grain boundaries and surface defects in semiconductor materials.",
      benefits: [
        "Nanoscale surface profiling capability",
        "Integration potential for white light interferometry",
        "Automated defect detection and mapping"
      ]
    }
  ]
};

export default mockData;