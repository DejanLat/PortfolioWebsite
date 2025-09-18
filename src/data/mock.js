// src/data/mock.js

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
    title: "Flagship Optical Instrument (Confidential)",
    description:
      "High-level concept preview of a next-generation optical instrument. Technical specifics are available on request.",
    category: "Precision Instruments",
    technologies: ["Optomechanics", "Embedded Control", "Python", "Raspberry Pi"],
    specifications: [
      "Key specifications withheld",
      "Performance details available under NDA",
      "Environmental compatibility on request",
      "Integration options available",
      "Configurable modules"
    ],
    impact: [
      { value: "TBD", label: "Performance" },
      { value: "TBD", label: "Resolution" },
      { value: "vNext", label: "Version" }
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
    "Optical Microscopes & Imaging Systems",
    "Laser Alignment (coherent & incoherent sources)",
    "Optical Fiber Coupling & Test Stations",
    "Beam Splitters, Mirrors, and Optical Benches",
    "Cryostat Integration for Quantum/Low-T Experiments",
    "Oscilloscopes & Function Generators",
    "Digital Multimeters & Electronics Benchtop Tools",
    "Manual & CNC Machining Tools"
  ],
  frameworks: [
    "Fusion 360 (CAD & FEA Simulation)",
    "SOLIDWORKS (Mechanical Drafting)",
    "Blender (Scientific Rendering & Publication Graphics)",
    "LabVIEW (Control Software & Automation)",
    "Python (Instrumentation APIs & Data Analysis)",
    "React (Portfolio & UI Development)",
    "SQL / BigQuery (Data Handling & Processing)",
    "Microsoft PowerBI (Visualization & Reporting)"
  ],
  languages: [
    "Python (Instrumentation Control & Data Processing)",
    "MATLAB (Simulation & Modeling)",
    "C++ (Embedded & Hardware Interfaces)",
    "JavaScript / React (Web Development)",
    "R (Statistical Analysis)",
    "SQL (Database Management)",
    "LabVIEW G (Graphical Programming)"
  ],
  soft: [
    "Cross-disciplinary Collaboration",
    "Creative Problem Solving",
    "Rapid Prototyping & Adaptability",
    "Technical Communication",
    "Leadership in Small Teams",
    "Strong Work Ethic"
  ],
  engineering: [
    "Optical System Design & Alignment",
    "Cryogenic & Quantum Sensing Setups",
    "Mechanical Design & Precision Machining",
    "Electronic Circuit Assembly & Debugging",
    "Process Optimization & Workflow Automation",
    "Scientific Visualization & Rendering (Blender)"
  ]
},

experience: [
  {
    company: "Axivion Instruments",
    role: "CTO & Founder",
    engagement: "Self-employed / Startup",
    period: "Sept 2025 – Present",
    category: "Startup • Scientific Instruments",
    imageBase: "image1experience", // <- add this
    //image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a", // clean optics lab
    keyMetrics: [
      { value: "PRISM", description: "Provisional Patent" },
      { value: "1 lab", description: "Deployed in active use (IQC)" },
      { value: "Pitched", description: "Photonics North Ottawa 2025" }
    ],
    achievements: [
      "Launched Axivion to commercialize PRISM, backed by faculty shareholders providing executive advisory guidance",
      "Drafted a provisional patent for PRISM; filing and IP strategy in progress",
      "Defined productization roadmap (PRISM hardware + CORE Python control platform) and brand presence for early customers",
      "Led technical specs, supplier engagement, and manufacturing readiness for first machined version"
    ]
  },
{
    company: "Institute for Quantum Computing (IQC)",
    role: "Nano Photonics & Quantum Optics Lab Member",
    engagement: "Casual / On-call",
    period: "May 2025 – Present",
    category: "Spin-out Support • IP & Commercialization",
    imageBase: "image2experience", // <- add this
    // image: "...",               // (optional)
    keyMetrics: [
      { value: "PN 2025", description: "Presented PRISM at Photonics North" },
      { value: "IP docs", description: "Supported patent prep & records" },
      { value: "Spin-out", description: "Assisted transition to market" }
    ],
    achievements: [
      "Presented PRISM at Photonics North 2025 Startup Competition (Ottawa)",
      "Assisted with IP documentation and commercialization planning",
      "Supported lab → product transition for early spin-out work"
    ],
    affiliationNote: "Continuing part-time affiliation alongside studies."
  },
  {
    company: "Institute for Quantum Computing (IQC)",
    role: "Research Engineer: Prototyping & Instrumentation",
        engagement: "Co-op",
    period: "Sep 2024 – Apr 2025",
    category: "Quantum Optics & Instrumentation",
    imageBase: "image3experience", // <- add this
    // image: "...",               // (optional)
    keyMetrics: [
      { value: "V5", description: "CNC-ready, lab-reliable PRISM build" },
      { value: "FEA", description: "Stiffness & modal validation" },
      { value: "Raster", description: "LabVIEW control integrated" }
    ],
    achievements: [
      "Advanced PRISM from concept to a reliable research system used in-lab",
      "Produced CNC-ready drawings; coordinated machining and tolerance stack-ups",
      "Implemented LabVIEW raster-scan control with piezo and imaging feedback",
      "Created publication-ready renders (Blender); refurbished spectrometer (Arduino + 3D prints)"
    ]
  },
  {
    company: "Institute for Quantum Computing (IQC)",
    role: "Research Assistant: Optical Systems & Machining",
    engagement: "Casual / On-call",
    period: "May – Aug 2024",
    category: "Research • Quantum Optics",
  imageBase: "image4experience", // <- add this
    // image: "...",               // (optional)
    keyMetrics: [
      { value: "5+", description: "Custom fixtures & tools built" },
      { value: "Alignment", description: "Optical bring-up & test" },
      { value: "3D Printing", description: "Custom Parts" }
    ],
    achievements: [
      "Built custom lab hardware; performed optical alignment for experiments",
      "Refined early components (fiber couplers, camera rings) feeding into PRISM’s first working version",
      "Supported daily lab workflows with rapid prototyping and documentation"
    ]
  },
  {
    company: "Institute for Quantum Computing (IQC)",
    role: "Research Assistant",
        engagement: "Co-op",
    period: "Jan – Apr 2024",
    category: "Foundations • Photonics",
    imageBase: "image5experience", // <- add this
    // image: "...",               // (optional)
    keyMetrics: [
      { value: "Concept", description: "Seeded PRISM feasibility" },
      { value: "Lumerical", description: "Waveguide simulations" },
      { value: "Hands-on", description: "Machining, soldering, microscopy" }
    ],
    achievements: [
      "Contributed to early concept exploration for a low-cost precision imaging system (became PRISM)",
      "Modeled waveguides in Ansys Lumerical; supported photonics experiments",
      "Built foundational skills in machining, soldering, and laser/optical alignment"
    ]
  },
  {
    company: "Pirlitor Machine and Tool Ltd",
    role: "Manufacturing Engineering Co-op",
        engagement: "Co-op",
    period: "May – Aug 2023",
    category: "Aerospace & Defense",
    imageBase: "image6experience", // <- add this
    // image: "...",               // (optional) // machining/CNC
    keyMetrics: [
      { value: "20%", description: "Order-intake capacity increase" },
      { value: "80%", description: "Process efficiency improvement" },
      { value: "800+", description: "Shipping cards automated" }
    ],
    achievements: [
      "Built comprehensive production processes for aerospace parts (Viking Air), advanced drone components (APS), and precision IMAX parts",
      "Increased order-intake capacity by 20% via better customer planning interfaces and internal routing",
      "Automated 800+ shipping cards in a critical 3-day window using custom Excel/VBA macros (≈69 s/card saved)",
      "Standardized scalable process documentation and workflows adopted by current/future staff"
    ]
  }
],


projects: [
  {
    title: "PRISM (Axivion Instruments)",
    description:
      "Configurable periscope-relay scanning microscope (objective-scanning). Designed for stable, precise motion with clean integration into standard lab workflows. Click to view details; full specifications are shared directly.",
    image: "https://images.unsplash.com/photo-1579684256060-d5a308109e21",
    technologies: [
      "Optomechanics",
      "Piezo Actuation",
      "Python",
      "LabVIEW",
      "System Integration"
    ],
    specifications: [
      "3-axis coordinated motion",
      "≈13± mm range per axis",
      "< 50 nm typical step",
      "Piezo-driven actuation",
      "Modular interfaces; retrofit-friendly",
      "Predictable alignment across travel",
      "APIs: Python / LabVIEW"
    ],
    patentStatus: "Provisional patent filing underway",
    featured: true,
    github: null,
    demo: null,
    category: "Research & Development",
    slug: "prism"
  },

  {
    title: "Customer Analytics Pipeline",
    description:
      "GB-scale SQL/BigQuery with R visualizations. Built a lean pipeline for membership insights and reporting.",
    image: "https://images.unsplash.com/photo-1613375973044-6dd5beac01d2",
    technologies: ["Google BigQuery", "SQL", "R", "ggplot2"],
    specifications: [
      "Optimized large BigQuery datasets for faster queries",
      "SQL extraction for usage and membership insights",
      "R/ggplot2 dashboards and visual summaries",
      "Actionable recommendations in R Markdown"
    ],
    featured: false,
    github: "https://github.com/DejanLatkovic/Case-study-Bikes",
    demo: null,
    category: "Data Science & Analytics"
  },

  {
    title: "Snake Mechanics & Profiling",
    description:
      "Core game mechanics, collision handling, barrier reset system, and a simple profiling pass.",
    image: "https://images.unsplash.com/photo-1748261759887-faa2a9d76471",
    technologies: ["Python", "Pygame"],
    specifications: [
      "Grid-based movement and growth",
      "Wall and self-collision handling",
      "Hidden-coordinate barrier reset system",
      "Color-cycling at ~66 ms per frame"
    ],
    featured: false,
    github: "https://github.com/DejanLatkovic/Snake-Pygame",
    demo: null,
    category: "Game Development"
  },
   {
  title: "Car Modding",
  description:
    "OEM-grade retrofits: 13-speaker/480W MOST-fiber audio, full interior lighting with hidden controllers, OEM anti-theft integration, and major service upgrades. Click to view build page.",
  image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c", // placeholder
  technologies: ["3D Printing", "Automotive Wiring", "Fiber Optics (MOST)", "CAD/Fusion 360", "Soldering"],
  specifications: [
    "MOST fiber audio retrofit: 13 speakers / 480 W amp",
    "Custom 3D-printed door brackets + trimmed panels",
    "Interior RGB lighting (seats, doors, trims) w/ controllers",
    "OEM anti-theft retrofit using BMW wiring schematics"
  ],
  featured: false,
  github: null,
  demo: null,
  category: "Automotive Engineering",
  slug: "car-modding"
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
        value: "Confidential",
        description: "Working title in use; final naming to be announced."
      },
      {
        label: "Core Innovation",
        value: "Under NDA",
        description: "High-level principle available upon request."
      },
      {
        label: "Primary Applications",
        value: "Research & Industrial",
        description: "Suitable for advanced microscopy/optics environments."
      },
      {
        label: "Performance Class",
        value: "Lab-validated (details withheld)",
        description: "Quantitative metrics available under NDA."
      },
      {
        label: "Control Architecture",
        value: "Modular, software-defined",
        description: "API and UI overview on request."
      }
    ]
  },
  {
    id: "optical",
    title: "Optical Performance Specifications",
    specs: [
      {
        label: "Optical Path",
        value: "Confidential",
        description: "System topology withheld; overview under NDA."
      },
      {
        label: "Beam Stability",
        value: "Lab-validated (summary only)",
        description: "Detailed tolerances provided in datasheet."
      },
      {
        label: "Mirror/Relay Strategy",
        value: "Configurable",
        description: "Component choices and constraints available on request."
      },
      {
        label: "Optical Access",
        value: "Retrofittable",
        description: "Integration options for standard lab setups."
      },
      {
        label: "Angular Stability",
        value: "Quantified (withheld)",
        description: "Numerical specs available under NDA."
      },
      {
        label: "Focus & Range",
        value: "Software-controlled",
        description: "Control modes and limits in datasheet."
      }
    ]
  },
  {
    id: "mechanical",
    title: "Mechanical Engineering Specifications",
    specs: [
      {
        label: "Translation Architecture",
        value: "Modular stages",
        description: "Platform details available on request."
      },
      {
        label: "Form Factor",
        value: "Bench/retrofit compatible",
        description: "Mounting patterns and adapters on request."
      },
      {
        label: "Precision",
        value: "Lab-characterized",
        description: "Flatness, load, and repeatability under NDA."
      },
      {
        label: "Materials",
        value: "Engineering-grade alloys",
        description: "Exact stackup and treatments withheld."
      },
      {
        label: "Mass & Inertia",
        value: "Optimized for stability",
        description: "Modal/FEA results available under NDA."
      },
      {
        label: "Adjustment",
        value: "Manual & automated options",
        description: "Drive options and pitches on request."
      }
    ]
  },
  {
    id: "control",
    title: "Control Systems & Electronics",
    specs: [
      {
        label: "Primary Controller",
        value: "USB/Ethernet options",
        description: "Channel count and topology under NDA."
      },
      {
        label: "Actuation",
        value: "Precision motion",
        description: "Actuator model specifics withheld."
      },
      {
        label: "Step Characteristics",
        value: "Lab-validated",
        description: "Resolution and variance tables in datasheet."
      },
      {
        label: "Interfaces",
        value: "API + UI",
        description: "External trigger and scripting support."
      },
      {
        label: "Modular Hub",
        value: "Edge device compatible",
        description: "Embedded control roadmap available on request."
      },
      {
        label: "Connectivity",
        value: "Local & remote options",
        description: "Security and access models under NDA."
      },
      {
        label: "Software Features",
        value: "Scanning • Mapping • Calibration",
        description: "Feature matrices available on request."
      }
    ]
  },
  {
    id: "performance",
    title: "Performance Characteristics",
    specs: [
      {
        label: "Accuracy",
        value: "High precision",
        description: "Quantitative data withheld."
      },
      {
        label: "Thermal Stability",
        value: "Configurable",
        description: "Supported environments on request."
      },
      {
        label: "Vibration",
        value: "Passive/active options",
        description: "Isolation strategy available under NDA."
      },
      {
        label: "Speed",
        value: "Application-dependent",
        description: "Scan rates and modes on request."
      },
      {
        label: "Repeatability",
        value: "Lab-validated",
        description: "Long-term drift data under NDA."
      },
      {
        label: "Operating Environment",
        value: "From controlled lab to specialized setups",
        description: "UHV/cryo specifics withheld."
      }
    ]
  }
],

  prismApplications: [
  {
    title: "Quantum & Advanced Research",
    category: "Research",
    description:
      "Applicable to advanced measurement and imaging workflows in precision labs.",
    benefits: [
      "High-level compatibility with common research setups",
      "Stable operation in controlled environments",
      "Flexible integration with existing instrumentation",
      "Non-disruptive upgrade path",
      "API access for custom workflows"
    ]
  },
  {
    title: "Low-Temperature / Specialized Environments",
    category: "Specialized Systems",
    description:
      "Designed to interface with specialized environments; specifics available on request.",
    benefits: [
      "Minimal environmental impact configuration",
      "Integration options documented in datasheet",
      "Serviceable without exposing sensitive hardware",
      "Supports automated procedures",
      "Roadmap available under NDA"
    ]
  },
  {
    title: "Photonics & Device Characterization",
    category: "Industry",
    description:
      "Suitable for device mapping and characterization at a high level.",
    benefits: [
      "Consistent alignment strategies",
      "Automatable scanning sequences",
      "Broad wavelength compatibility options",
      "Precision positioning workflows",
      "Reporting/export options"
    ]
  }
]
};

export default mockData;