// src/data/mock.js

const mockData = {
  personalInfo: {
    name: "Dejan Latkovic",
    title: "Nanotechnology Engineering Student",
    university: "University of Waterloo",
    program: "BE Nanotechnology Engineering, Co-op",
    expectedGraduation: "2027"
  },

  

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
    "Onshape (Cloud CAD Collaboration)",
    "Blender (Scientific Rendering & Publication Graphics)",
    "LabVIEW (Control Software & Automation)",
    "Python (Instrumentation APIs & Data Analysis)",
    "React (Portfolio & UI Development)",
    "BigQuery (Data Handling & Processing)",
    "Microsoft PowerBI (Visualization & Reporting)"
  ],
  languages: [
    "Python (Instrumentation Control & Data Processing)",
    "MATLAB (Simulation & Modeling)",
    "LabVIEW (Graphical Programming)",
    "JavaScript / React (Web Development)",
    "R (Statistical Analysis)",
    "SQL (Database Management)"

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
    company: "Axivion Studio",
    role: "Founder & Scientific Visualization Designer",
    engagement: "Self-employed / Studio",
    period: "Jul 2026 – Present",
    category: "Scientific Visualization",
    image: "AxivionStudioWorkExperiencePhoto.jpg",
    imageAlt: "Axivion Studio scientific visualization work",
    imagePosition: "calc(50% + 3px) center",
    imageFilter: "brightness(0.72) saturate(0.78)",
    keyMetrics: [
      { value: "AAAS", description: "Science Advances cover art credit" },
      { value: "Technical", description: "Optics, photonics & hardware fluency" },
      { value: "Client work", description: "Research and commercial visuals" }
    ],
    achievements: [
      "Founded Axivion Studio, a scientific and technical visualization practice serving researchers, laboratories, and advanced hardware teams",
      "Create publication-ready visuals for papers, proposals, journal cover submissions, presentations, websites, and technical communication",
      "Manage projects from technical intake and concept development through rendering, revisions, licensing, and final delivery"
    ]
  },
  {
    company: "Atomic Semi",
    role: "Mechanical Engineering Intern",
    engagement: "Co-op",
    period: "Jan - Apr 2026",
    category: "Precision Engineering",
    image: "AtomicSemiPhoto.jpeg",
    imagePosition: "left",
    keyMetrics: [
      { value: "x4", description: "Systems owned end-to-end" },
      { value: "Docs", description: "Set as intern benchmark" },
      { value: "Impact", description: "Work still in use" }
    ],
    achievements: [
      "End-to-end owner of four hardware systems: laser optics module, cost-optimized automated XY stage, custom microscope camera, and automated substrate loader",
      "Technical documentation set as a positive benchmark for future interns by staff engineer (Daniel LaCroix, Precision Engineering Team)",
      "Full project impact documented in a letter of recommendation; reach out to me directly for a copy"
    ]
  },
  {
    company: "Axivion Instruments",
    role: "CTO & Founder",
    engagement: "Self-employed / Startup",
    period: "May 2025 - Present",
    category: "Entrepreneurship",
    imageBase: "image1experience", // <- add this
    //image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a", // clean optics lab
    keyMetrics: [
      { value: "IQC", description: "PRISM deployed at NPQO Lab" },
      { value: "Patent", description: "Provisional filing underway" },
      { value: "AAAS", description: "Science Advances cover art credit" }
    ],
    achievements: [
      "Founder and CTO of Axivion Instruments, building PRISM - a precision scanning microscope now in active use at IQC's NPQO Lab for Diamond NV center research",
      "Drafted a provisional patent for PRISM; filing and IP strategy in progress",
      "Built CORE - a modular instrument control platform as part of the Axivion software stack"
    ]
  },
  {
    company: "Institute for Quantum Computing (IQC)",
    role: "Research Affiliate",
    engagement: "Casual / On-call",
    affiliationNote: "Nano Photonics and Quantum Optics Lab, IQC",
    period: "May 2025 – Present",
    category: "IP • Commercialization",
    imageBase: "image2experience",
    keyMetrics: [
      { value: "PN 2025", description: "Presented PRISM at Photonics North" },
      { value: "IP docs", description: "Initiated patent prep & records" },
      { value: "Spin-out", description: "Directed transition to market" }
    ],
    achievements: [
      "Presented PRISM at Photonics North 2025 Startup Competition (Ottawa)",
      "Initiated the IP documentation and commercialization planning",
      "Coordinated lab → product transition for early spin-out work"
    ]
  },
  {
    company: "Institute for Quantum Computing (IQC)",
    role: "Research Assistant: Prototyping & Instrumentation",
        engagement: "Co-op",
    period: "Sep 2024 – Apr 2025",
    category: "Prototyping  Instrumentation",
    imageBase: "image3experience", // <- add this
    // image: "...",               // (optional)
    keyMetrics: [
      { value: "V5", description: "CNC-ready, lab-reliable PRISM build" },
      { value: "FEA", description: "Stiffness & modal validation" },
      { value: "Raster", description: "LabVIEW control integrated" }
    ],
    achievements: [
      "Advanced PRISM from concept to a reliable research system used in-lab",
      "Produced CNC-ready drawings; coordinated machining and tolerance specs",
      "Implemented LabVIEW raster-scan control with piezo and imaging feedback",
      "Created publication-ready renders (Blender); refurbished spectrometer (Arduino + 3D prints)"
    ]
  },
  {
    company: "Institute for Quantum Computing (IQC)",
    role: "Research Affiliate",
    engagement: "Casual / On-call",
    affiliationNote: "Nano Photonics and Quantum Optics Lab, IQC",
    period: "May – Aug 2024",
    category: "Development",
  imageBase: "image4experience", // <- add this
    // image: "...",               // (optional)
    keyMetrics: [
      { value: "5+", description: "Custom fixtures & tools built" },
      { value: "Alignment", description: "Optical setup" },
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
    category: "Foundations",
    imageBase: "image5experience", // <- add this
    // image: "...",               // (optional)
    keyMetrics: [
      { value: "Concept", description: "Seeded PRISM feasibility" },
      { value: "Lumerical", description: "Waveguide simulations" },
      { value: "Hands-on", description: "Machining, soldering, microscopy" }
    ],
    achievements: [
      "Realized the early concept exploration for a low-cost precision imaging system (became PRISM)",
      "Modeled waveguides in Ansys Lumerical; supported photonics experiments",
      "Built foundational skills in machining, soldering, and laser/optical alignment"
    ]
  },
  {
    company: "Pirlitor Machine and Tool Ltd",
    role: "Process Planning",
        engagement: "Co-op",
    period: "May – Aug 2023",
    category: "Manufacturing Engineering",
    imageBase: "image6experience", // <- add this
    // image: "...",               // (optional) // machining/CNC
    keyMetrics: [
      { value: "20%", description: "Order-intake capacity increase" },
      { value: "80%", description: "Process efficiency improvement" },
      { value: "800+", description: "Shipping cards automated" }
    ],
    achievements: [
      "Developed routings, work instructions, tooling requirements, and inspection plans for Viking Air, APS (advanced drones), and IMAX precision components",
      "Increased order-intake capacity by 20% via better customer planning interfaces and internal routing",
      "Automated 800+ shipping cards in a critical 3-day window using custom Excel/VBA macros (≈69 s/card saved)",
      "Standardized scalable process documentation and workflows adopted by current/future staff"
    ]
  }
],


publications: [
  {
    category: "Credits",
    title: "Towards Cryogenic Studies of Inverse-Designed Nanostructures in Diamond",
    type: "Poster Presentation",
    date: "June 2026",
    venue: "Photonics North 2026",
    authors:
      "Nicholas Low, Dejan Latkovic, Pratik Adhikary, Behrooz Semnani, Mohammad Soltani, Michal Bajcsy",
    credit:
      "Accepted poster presentation, scheduled for June 3, 2026.",
    affiliations: "University of Waterloo / imec",
    link: "https://event.fourwaves.com/photonicsnorth/abstracts/6f5d9dcd-956c-4e4a-bb53-b52649a40f1d"
  },
  {
    category: "Credits",
    title: "Science Advances Cover Art Credit",
    type: "Cover art / scientific visualization credit",
    date: "May 22, 2026",
    venue: "Science Advances, Vol. 12, Issue 21 - AAAS",
    credit:
      "Credited for cover art accompanying the issue featuring \"Probing individual quantum emitters in bulk semiconductors via photonic nanojets\". Credit: Dejan Latkovic.",
    link: "https://www.science.org/toc/sciadv/12/21",
    links: [
      { label: "Issue", href: "https://www.science.org/toc/sciadv/12/21" },
      { label: "Paper", href: "https://www.science.org/doi/10.1126/sciadv.aea5936" }
    ],
    image: "sciadv.2026.12.issue-21.largecover.jpg"
  }
],


projects: [
  {
    title: "PRISM (Axivion Instruments)",
    description:
      "Periscopic Relay Imaging Scanning Microscope. In active use at IQC's NPQO Lab for Diamond NV center research. Built from scratch, iterated through multiple versions, and deployed as a working research instrument. Comparable commercial systems cost ~$70k.",
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
      "13 mm³ scanning range",
      "< 50 nm typical step",
      "Piezo-driven actuation",
      "Modular interfaces; retrofit-friendly",
      "Predictable optical path",
      "Orthogonal to sample plane",
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
},

{
  title: "Axivion Studio",
  description:
    "Publication-ready scientific and technical visuals for papers, posters, grants, websites, presentations, and journal cover submissions.",
  image: "NewWebPhotos/metasurface-web.webp",
  technologies: ["Blender", "Scientific Visualization", "Technical Renders", "Optics", "Publication Graphics"],
  specifications: [
    "Science Advances cover art / visualization credit",
    "Nanophotonics and metasurface render workflows",
    "PRISM and instrument visualization assets",
    "Material, lighting, and camera setup for technical communication"
  ],
  featured: false,
  github: null,
  demo: null,
  category: "Scientific Communication",
  slug: "renders"
},

{
  title: "Spectrometer Motor Controller Rebuild",
  description:
    "Built a simple control system for a lab spectrometer, combining Arduino and MATLAB to test and rotate the internal mirror.",
  image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837", // placeholder electronics photo
  technologies: ["Arduino", "MATLAB", "3D Modeling", "Soldering"],
  specifications: [
    "Wrote Arduino code to drive the spectrometer’s mirror motor",
    "Started MATLAB–Arduino interface for basic motor control",
    "3D modeled and printed a case for the controller",
    "Soldered and connected motor wiring",
    "Verified correct mirror rotation and basic functionality"
  ],
  featured: false,
  github: false,
  demo: null,
  category: "Optics & Instrumentation"
},
// {asdfasdfasdfasdfasd
//   title: "Blender Visualization",
//   description:
//     "Created detailed Blender models and renders to support lab projects, using 3D visualization for case designs, optics layouts, and presentation figures.",
//   image: "https://images.unsplash.com/photo-1605647533135-5b1b7d4aa9b6", // placeholder Blender-style render
//   technologies: ["Blender", "3D Modeling", "Rendering"],
//   specifications: [
//     "Modeled custom microscope and spectrometer components in Blender",
//     "Produced high-quality renders for presentations, reports, and papers",
//     "Designed and visualized instrument cases and mechanical assemblies",
// //     "Used Blender as a rapid prototyping tool to refine lab designs"
//   ],
//   featured: false,
//   github: false,
//   demo: null,
//   category: "Visualization & Design"
// },

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
