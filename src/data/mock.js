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
    company: "Axivion Instruments",
    role: "CTO & Founder",
    period: "September 2025 – Present",
    category: "Startup • Scientific Instruments",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a", // clean optics lab
    keyMetrics: [
      { value: "PRISM", description: "Provisional Patent" },
      { value: "1 lab", description: "Deployed in active use (IQC)" },
      { value: "Pitch", description: "Photonics North 2025" }
    ],
    achievements: [
      "Founded Axivion to commercialize PRISM (Periscopic Relay Imaging Scanning Microscope) with executive advisory support from faculty partners",
      "Drafted a provisional patent for PRISM; filing and IP strategy in progress",
      "Defined productization roadmap (PRISM hardware + CORE Python control platform) and brand presence for early customers",
      "Led technical specs, supplier engagement, and manufacturing readiness for first machined version"
    ]
  },
  {
    company: "Institute for Quantum Computing (IQC), University of Waterloo",
    role: "Research Engineer — Prototyping & Instrumentation",
    period: "January 2025 – September 2025",
    category: "Quantum Optics & Instrumentation",
    image: "https://images.unsplash.com/photo-1559757175-08b3a9be11c6", // precision mechanics
    keyMetrics: [
      { value: "50×", description: "Real magnification imaging validated" },
      { value: "3-axis", description: "Objective-scanning architecture" },
      { value: "Raster", description: "LabVIEW control integrated" }
    ],
    achievements: [
      "Advanced PRISM from handmade V4.5 to CNC-ready V5; produced professional drawings and tolerance stack-ups",
      "Improved stiffness via modal/FEA iterations; reduced bending and increased natural frequency",
      "Integrated raster-scanning software in LabVIEW with piezo control and imaging feedback",
      "Oversaw alignment, documentation, and full-time lab deployment/usage"
    ]
  },
  {
    company: "Institute for Quantum Computing (IQC), University of Waterloo",
    role: "Research Assistant — Optical Systems & Machining",
    period: "January 2024 – December 2024",
    category: "Research • Quantum Optics",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f", // lab instrumentation
    keyMetrics: [
      { value: "51 h", description: "Hand-machining V4.5 build" },
      { value: "FEA", description: "Stiffness & modal optimization" },
      { value: "5+", description: "Custom fixtures & tools built" }
    ],
    achievements: [
      "Originated PRISM concept and designed first prototype in Fusion 360; built and validated the handmade V4.5",
      "Developed LabVIEW raster-scan software and experimental procedures for reflective imaging",
      "Created Blender renders and technical visuals for presentations/publications",
      "Refurbished a spectrometer (electronics + 3D-printed housings) and fabricated custom hardware (diamond mounts, fiber couplers, optical filtering modules)"
    ]
  },
  {
    company: "Pirlitor Machine and Tool Ltd",
    role: "Manufacturing Engineering Co-op",
    period: "May – August 2023",
    category: "Aerospace & Defense",
    image: "https://images.unsplash.com/photo-1581091870622-7b1c1dfdfd07", // machining/CNC
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
    title: "Flagship Optical Instrument (Working Title)",
    description:
      "Concept-stage optical/precision system. This page shows a functional preview while detailed specs remain confidential.",
    image: "https://images.unsplash.com/photo-1579684256060-d5a308109e21",
    technologies: [
      "Optomechanics",
      "Embedded Control",
      "Python",
      "Modular Design",
      "System Integration"
    ],
    specifications: [
      "Architecture & performance details withheld",
      "Compatibility and interfaces available on request",
      "Environmental configuration options available",
      "Control software roadmap in progress",
      "Datasheet available under NDA"
    ],
    featured: true,
    github: false,
    demo: false,
    category: "Research & Development",
    slug: "prism"
  },
   {
  title: "Data Analysis Capstone Project",
  description: "Analyzed customer usage data to identify strategies for increasing annual memberships, using SQL and R for data processing and visualization.",
  image: "https://images.unsplash.com/photo-1613375973044-6dd5beac01d2",
  technologies: ["Google BigQuery", "SQL", "R", "ggplot2"],
  specifications: [
    "Cleaned and optimized large datasets in BigQuery to improve query performance",
    "Wrote SQL queries to extract insights from customer usage data",
    "Created data visualizations in R using ggplot2",
    "Compiled findings into an R Markdown report with actionable recommendations"
  ],
  featured: false,
  github: "https://github.com/DejanLatkovic/Case-study-Bikes",
  demo: null,
  category: "Data Science & Analytics"
},
{
  title: "Python Game Development - Snake Game Enhancement",
  description: "Classic Snake game built in Python with Pygame, focusing on collision handling, dynamic object resets, and real-time visual feedback.",
  image: "https://images.unsplash.com/photo-1748261759887-faa2a9d76471",
  technologies: ["Python", "Pygame"],
  specifications: [
    "Implemented grid-based movement and growth mechanics",
    "Added collision handling for walls and self-intersection",
    "Developed a reset system for barrier objects using hidden coordinates",
    "Introduced real-time snake color cycling every 66 ms",
    "Improved debugging and troubleshooting skills through iterative testing"
  ],
  featured: false,
  github: "https://github.com/DejanLatkovic/Snake-Pygame",
  demo: null,
  category: "Game Development"
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