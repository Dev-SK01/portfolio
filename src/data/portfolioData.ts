import {
  PersonalInfo,
  MetricItem,
  ExperienceItem,
  ProjectItem,
  SkillCategory,
  EducationItem,
  CommunityActivity,
  ArchitectureHighlight
} from '../types/portfolio';
import profilePhoto from '../assets/profile.png';

export const personalInfo: PersonalInfo = {
  name: 'Srikanth N',
  headline: 'Software Engineer',
  subHeadline: 'Frontend & Full-Stack Architect | Micro-Frontends, Microservices & LLM Tooling',
  summary: 'Software Engineer with production experience architecting Micro-Frontend systems, building high-throughput Node.js microservices, and shipping fast React/Angular apps. Proven track record of cutting build times by 30%, speeding up initial page loads by 40%, maintaining 95%+ Playwright test coverage, and automating multi-stage Jenkins CI/CD pipelines.',
  email: 'srikanth.n.sde@gmail.com',
  phone: '+91 7094295944',
  location: 'Coimbatore, Tamil Nadu, India',
  linkedin: 'https://www.linkedin.com/in/srikanth-n-software-engineer/',
  github: 'https://dev-sk01.github.io/portfolio/',
  resumePdfUrl: './srikanth_n_software_engineer.pdf',
  avatarUrl: profilePhoto,
};

export const keyMetrics: MetricItem[] = [
  {
    id: 'build-time',
    value: '30%',
    numericValue: 30,
    suffix: '%',
    label: 'Build Time Reduction',
    description: 'Monolithic HRMS build time reduced from ~8 min to ~5.5 min via Module Federation.',
    trend: 'Efficiency boost across 5+ dev teams'
  },
  {
    id: 'page-load',
    value: '40%',
    numericValue: 40,
    suffix: '%',
    label: 'Page Load Speedup',
    description: 'Optimized rendering pipeline for 10K+ records with virtual scrolling & code splitting.',
    trend: 'Fixed UI freezing on legacy devices'
  },
  {
    id: 'test-coverage',
    value: '95%+',
    numericValue: 95,
    suffix: '%+',
    label: 'Playwright Test Coverage',
    description: 'Automated test pyramid preventing untested code from reaching staging.',
    trend: '~60% reduction in regression bugs'
  },
  {
    id: 'rollout-time',
    value: '<10m',
    numericValue: 10,
    suffix: 'm',
    label: 'CI/CD Rollout Time',
    description: 'Slashed manual release time from 45 mins to under 10 mins using Jenkins & Docker.',
    trend: '100% automated deployment process'
  }
];

export const architectureHighlights: ArchitectureHighlight[] = [
  {
    id: 'mfe',
    title: 'Micro-Frontend HRMS Architecture',
    subtitle: 'Module Federation (React + Angular)',
    badgeText: 'Scalability Architecture',
    description: 'Architected a React and Angular Module Federation system serving 5+ independent engineering teams, enabling isolated domain deployments (attendance, payroll, onboarding) without rebuilding monoliths.',
    impactMetrics: [
      '30% reduction in build times (~8 min → ~5.5 min)',
      'Independent releases per business domain',
      'Zero cross-team deployment bottlenecks'
    ],
    techUsed: ['React', 'Angular', 'Webpack Module Federation', 'TypeScript', 'Zustand']
  },
  {
    id: 'cicd',
    title: 'Automated Jenkins CI/CD & Testing Pyramid',
    subtitle: 'Docker Containerization & Multi-Stage Pipelines',
    badgeText: 'DevOps & Reliability',
    description: 'Automated release cycles with multi-stage Jenkins pipelines incorporating Playwright unit tests (95%+ coverage), Vitest E2E flows, and automated Docker image packaging.',
    impactMetrics: [
      'Rollout time reduced from 45 mins to < 10 mins',
      '60% reduction in regression bugs',
      'Zero untested code releases'
    ],
    techUsed: ['Jenkins', 'Docker', 'Playwright', 'Vitest', 'GitHub Actions']
  },
  {
    id: 'ai-agents',
    title: 'AI & LLM Tool Calling Integration',
    subtitle: 'Claude Code Automated Reviews',
    badgeText: 'AI Engineering',
    description: 'Integrated LLM tool calling via Claude Code to automate pull request code reviews, enforce linting standards, and optimize context window efficiency.',
    impactMetrics: [
      'Automated PR code review checks',
      'Accelerated developer feedback loops',
      'Standardized team coding guidelines'
    ],
    techUsed: ['Claude Code', 'LLM Tool Calling', 'Agent Orchestration', 'Node.js']
  },
  {
    id: 'telemetry',
    title: 'Centralized Security & Vault Telemetry',
    subtitle: 'WebSockets & OpenTelemetry',
    badgeText: 'Real-Time Systems',
    description: 'Created and deployed a centralized monitoring dashboard for bank alarms and vault security, streaming instant alerts and live telemetry using WebSockets.',
    impactMetrics: [
      'Sub-second real-time alert delivery',
      'Distributed observability with OpenTelemetry',
      'Multi-site live telemetry monitoring'
    ],
    techUsed: ['WebSockets', 'OpenTelemetry', 'Node.js', 'Express', 'PM2']
  }
];

export const workExperience: ExperienceItem[] = [
  {
    id: 'sporada',
    company: 'Sporada Secure India Pvt. Ltd.',
    role: 'Junior Software Engineer - Full Time',
    type: 'Full Time',
    location: 'Coimbatore, Tamil Nadu',
    period: 'July 2025 – Present',
    highlights: [
      'Architected a React and Angular Module Federation-based Micro-Frontend system for an enterprise HRMS serving 5+ independent teams, enabling isolated domain deployments (attendance, payroll, onboarding) and cutting monolithic build times by 30% (~8 min → ~5.5 min).',
      'Automated the entire release process using Jenkins. Set up a multi-stage CI/CD pipeline handling linting, testing, and Docker builds—eliminating manual deployments and slashing rollout time from 45 mins to under 10 mins.',
      'Containerised Angular and Node.js microservices using Docker, standardising dev/staging/production environments across a 4-developer team. Integrated LLM tool calling via Claude Code to automate code reviews.',
      'Sped up initial page loads by 40% and fixed UI freezing on older devices by combining virtual scrolling, lazy loading, and code-splitting to render 10K+ records smoothly.',
      'Led mobile expansion by packaging existing React apps into production Android APKs using Capacitor, eliminating the need for a separate native mobile team; added PWA service worker caching for offline capability.',
      'Built a full testing pyramid—Playwright unit tests (95%+ coverage) and Vitest E2E flows gated inside Jenkins pipelines, preventing untested code from reaching staging and reducing regression bugs by ~60%.',
      'Engineered Node.js/Express microservices for high-volume trainee records using PM2 process management and OpenTelemetry for distributed tracing & observability.',
      'Developed reusable custom React Hooks and Higher-Order Components (HOC), reducing boilerplate code by ~35%.',
      'Created and rolled out a centralized monitoring dashboard for bank alarms and vaults, using WebSockets to push instant security alerts and live branch telemetry across multiple sites.'
    ],
    skills: [
      'React',
      'Angular',
      'TypeScript',
      'Module Federation',
      'Node.js',
      'Docker',
      'Jenkins',
      'Playwright',
      'Vitest',
      'WebSockets',
      'OpenTelemetry',
      'Capacitor',
      'PWA',
      'Zustand'
    ]
  }
];

export const technicalProjects: ProjectItem[] = [
  {
    id: 'agri-lynx',
    title: 'AGRI LYNX',
    subtitle: 'Direct Farmer-to-Buyer Digital Marketplace',
    period: 'Feb 2024 – May 2024',
    category: 'Full-Stack',
    featured: true,
    techStack: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Tailwind CSS',
      'SQL',
      'JWT',
      'REST APIs',
      'TypeScript',
      'Docker Compose'
    ],
    description: 'Full-stack digital marketplace connecting agricultural producers directly with buyers, featuring live product listings, custom order routing logic, payment verification, and containerized Docker setup.',
    keyContributions: [
      'Built full-stack digital marketplace from the ground up to connect farmers directly with buyers, handling live listings, custom order routing, and final payment verification.',
      'Packaged entire React, Node.js, and MongoDB stack into Docker Compose, enabling instant local environment setup with a single command.',
      'Designed JWT-based authentication and role-based authorization supporting 3 concurrent roles (Farmer, Buyer, Admin) with zero cross-role data leakage.',
      'Led a team of 3 developers across task decomposition, PR reviews, and sprint planning—shipping the MVP 2 weeks ahead of schedule.'
    ],
    githubUrl: 'https://github.com/dev-sk01/portfolio',
    demoUrl: 'https://dev-sk01.github.io/portfolio/'
  },
  {
    id: 'ucer-exam-cell',
    title: 'UCER EXAM CELL',
    subtitle: 'Automated Hall Allocation Engine',
    period: 'Sep 2024 – Jan 2025',
    category: 'Systems & Backend',
    featured: true,
    techStack: [
      'Angular',
      'Node.js',
      'MySQL',
      'Queue Processing',
      'Docker',
      'TypeScript'
    ],
    description: 'High-concurrency automated exam hall allocation engine and multi-hall PDF generation system built for university administrative management.',
    keyContributions: [
      'Designed and built an automated hall allocation engine serving 2,000+ students per exam cycle, cutting allocation processing time from ~4 hours down to under 5 mins.',
      'Implemented a queue-and-threading pipeline for bulk PDF generation across 40+ exam halls, enabling concurrent background processing without blocking the UI.',
      'Decomposed allocation logic into modular constraint-solver components (capacity, department, special requirements), making rules independently testable and extensible.'
    ],
    githubUrl: 'https://github.com/dev-sk01/portfolio',
    demoUrl: 'https://dev-sk01.github.io/portfolio/'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Engineering',
    iconName: 'Layout',
    skills: [
      { name: 'React.js', level: 'Expert', highlight: true },
      { name: 'TypeScript', level: 'Expert', highlight: true },
      { name: 'Angular', level: 'Advanced', highlight: true },
      { name: 'Tailwind CSS', level: 'Expert', highlight: true },
      { name: 'Zustand / Redux', level: 'Expert', highlight: true },
      { name: 'TanStack Query', level: 'Advanced' },
      { name: 'Vite / Webpack', level: 'Advanced', highlight: true },
      { name: 'PWA & Capacitor', level: 'Advanced' },
      { name: 'WCAG Compliance', level: 'Intermediate' },
      { name: 'WebAssembly (WASM)', level: 'Intermediate' }
    ]
  },
  {
    category: 'Backend & APIs',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', level: 'Expert', highlight: true },
      { name: 'Express.js', level: 'Expert', highlight: true },
      { name: 'RESTful APIs', level: 'Expert', highlight: true },
      { name: 'GraphQL', level: 'Advanced' },
      { name: 'WebSockets', level: 'Advanced', highlight: true },
      { name: 'WebRTC', level: 'Intermediate' }
    ]
  },
  {
    category: 'Databases',
    iconName: 'Database',
    skills: [
      { name: 'MongoDB / Mongoose', level: 'Advanced', highlight: true },
      { name: 'MySQL / SQL', level: 'Advanced', highlight: true }
    ]
  },
  {
    category: 'DevOps & CI/CD',
    iconName: 'Cpu',
    skills: [
      { name: 'Jenkins Pipelines', level: 'Advanced', highlight: true },
      { name: 'Docker & Compose', level: 'Advanced', highlight: true },
      { name: 'GitHub Actions', level: 'Advanced' },
      { name: 'PM2', level: 'Advanced' },
      { name: 'Git / GitHub', level: 'Expert' }
    ]
  },
  {
    category: 'Testing & QA',
    iconName: 'CheckCircle2',
    skills: [
      { name: 'Playwright (Unit & E2E)', level: 'Expert', highlight: true },
      { name: 'Vitest', level: 'Advanced', highlight: true },
      { name: 'Cypress', level: 'Intermediate' }
    ]
  },
  {
    category: 'Observability & Analytics',
    iconName: 'Activity',
    skills: [
      { name: 'OpenTelemetry', level: 'Advanced', highlight: true },
      { name: 'Lighthouse Performance', level: 'Advanced' },
      { name: 'Bundle Analysis', level: 'Advanced' }
    ]
  },
  {
    category: 'AI & Developer Tooling',
    iconName: 'Bot',
    skills: [
      { name: 'LLM Tool Calling', level: 'Advanced', highlight: true },
      { name: 'Claude Code Automation', level: 'Advanced', highlight: true },
      { name: 'Agent Orchestration', level: 'Advanced' },
      { name: 'Context Window Tuning', level: 'Advanced' },
      { name: 'Gemini & OpenAI APIs', level: 'Advanced' }
    ]
  },
  {
    category: 'Core Fundamentals',
    iconName: 'Code2',
    skills: [
      { name: 'Micro-Frontends (Module Federation)', level: 'Expert', highlight: true },
      { name: 'System Design (HLD/LLD)', level: 'Advanced', highlight: true },
      { name: 'Data Structures & Algorithms', level: 'Advanced' },
      { name: 'Event-Driven Architecture', level: 'Advanced' },
      { name: 'Agile & Scrum', level: 'Advanced' }
    ]
  }
];

export const educationList: EducationItem[] = [
  {
    institution: 'Anna University College of Engineering',
    degree: 'B.E.',
    field: 'Computer Science & Engineering',
    period: 'Sep 2021 – May 2025',
    grade: 'Aggregate: 78%',
    highlights: [
      'Specialized in System Architecture, Operating Systems, Database Management Systems, and Software Engineering.',
      'Consistently worked on full-stack projects, queue-based automation engines, and campus tech events.'
    ]
  }
];

export const communityAndVolunteer: CommunityActivity[] = [
  {
    organization: 'Google Developer Groups (GDG) Coimbatore',
    role: 'Active Member',
    description: 'Participate in DevFests, technical hackathons, and contribute to community developer workshops.'
  },
  {
    organization: 'IIT FOSSEE Mapathon',
    role: 'Open Source Contributor',
    description: 'Contributed to open geospatial data mapping for Indian public infrastructure.'
  },
  {
    organization: 'Machine Learning & Artificial Intelligence',
    role: 'Certification & Masterclasses',
    description: 'Completed masterclasses focusing on machine learning principles, neural networks, and AI agent integration.'
  }
];
