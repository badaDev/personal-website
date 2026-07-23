import {
  EmploymentRecord,
  ExpertiseItem,
  PortfolioProfile,
  PortfolioProject,
  SocialLink,
} from './portfolio.models';

export const PROFILE: PortfolioProfile = {
  name: 'Nurudeen Bada',
  role: 'Frontend-focused Software Engineer expanding into full-stack development with Node.js and NestJS',
  biography: [
    'Nurudeen Olanrewaju Bada is a frontend developer focused on Angular. His move into technology was driven by an interest in practical, fast-moving software development.',
    'He developed his foundations through independent study and a frontend development bootcamp, then built further experience through freelance client projects and employment opportunities.',
  ],
  email: 'nolanrewaju@gmail.com',
  githubUrl: 'https://github.com/badaDev',
  cvPath: null,
};

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { label: 'GitHub', url: PROFILE.githubUrl },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nurudeen-bada-457a43200/' },
];

export const PROJECTS: readonly PortfolioProject[] = [
  {
    name: 'ShiftPay Tracker',
    description: 'A full-stack shift and earnings management application that helps workers record shifts, calculate working hours and track expected pay, including support for overnight shifts and unpaid breaks.',
    technologies: ['Angular', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma'],
    liveUrl: 'https://shiftpay-tracker.vercel.app/login',
    repositoryUrl: null,
    imagePath: '/assets/images/projects/shiftpay-tracker-2.webp',
    imageAlt: 'ShiftPay Tracker sign-in screen with a pay-tracking form on a dark blue and green background',
    imageWidth: 1920,
    imageHeight: 885,
    caseStudyUrl: null,
    status: 'available',
    featured: true,
  },
  {
    name: 'O2 Appointment Booking System',
    description: 'A full-stack appointment booking and management platform for handling services, customers, availability and appointments.',
    technologies: ['Angular', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma'],
    liveUrl: null,
    repositoryUrl: null,
    caseStudyUrl: null,
    status: 'active-development',
    featured: true,
  },
  {
    name: 'Expense Tracker',
    description: 'A full-stack expense tracking application for recording transactions, organising spending and reviewing personal financial activity.',
    technologies: [],
    liveUrl: null,
    repositoryUrl: null,
    caseStudyUrl: null,
    status: 'active-development',
    featured: true,
  },
];

export const SKILLS: readonly string[] = [
  'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'React', 'Firebase', 'Git', 'Figma', 'Ionic',
];

export const CREDIBILITY_ITEMS: readonly string[] = [
  'Angular development',
  'Enterprise fintech experience',
  'Full-stack application development',
  'Mentorship & developer training',
];

export const EXPERTISE: readonly ExpertiseItem[] = [
  { name: 'Angular', summary: 'Component architecture, routing, forms and maintainable application delivery.', level: 'established' },
  { name: 'TypeScript', summary: 'Typed application models, safer integrations and scalable frontend code.', level: 'established' },
  { name: 'RxJS', summary: 'Reactive data flows and asynchronous application behaviour.', level: 'established' },
  { name: 'NgRx & state', summary: 'Predictable state-management patterns for complex Angular applications.', level: 'established' },
  { name: 'HTML, CSS & SCSS', summary: 'Responsive, accessible interfaces built from strong web foundations.', level: 'established' },
  { name: 'Ionic', summary: 'Cross-platform interface development using familiar Angular workflows.', level: 'established' },
  { name: 'Git', summary: 'Version-controlled delivery and collaborative development workflows.', level: 'established' },
  { name: 'Node.js', summary: 'Expanding backend capability for full-stack JavaScript and TypeScript applications.', level: 'developing' },
  { name: 'NestJS', summary: 'Building full-stack projects with the TypeScript-based Node.js framework.', level: 'developing' },
];

export const EMPLOYMENT_HISTORY: readonly EmploymentRecord[] = [
  { company: 'Blockchain Advisors Ltd', role: 'Frontend Software Engineer (Contract)', dates: 'June 2026 – Present' },
  { company: 'Techforce Inc Ltd', role: 'Frontend Engineer (Project-Based)', dates: 'October 2025 – May 2026' },
  { company: 'BAfashion', role: 'Frontend Developer', dates: 'March 2025 – August 2025' },
  { company: 'Zarttech', role: 'Angular Developer', dates: 'March 2024 – March 2025' },
  { company: 'Global Accelerex Ltd', role: 'Software Developer', dates: 'March 2022 – March 2024' },
  { company: 'Jbitss Tech', role: 'Frontend Developer', dates: 'March 2019 – February 2022' },
];

export const MENTORSHIP = {
  title: 'Frontend Engineering Mentorship Community',
  summary: 'I founded the Frontend Engineering Mentorship Community to help beginner developers build strong foundations in HTML, CSS, JavaScript, Git and Angular through structured lessons, practical assignments and ongoing guidance.',
  role: 'Founder and Lead Mentor',
} as const;
