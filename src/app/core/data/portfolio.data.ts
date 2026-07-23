import {
  AboutStoryChapter,
  ContactMethod,
  EducationRecord,
  EmploymentRecord,
  ExpertiseItem,
  MentorshipProfile,
  PortfolioProfile,
  PortfolioProject,
  ProfessionalDevelopmentItem,
  SocialLink,
  TechnologyGroup,
  WorkPrinciple,
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

export const CONTACT_METHODS: readonly ContactMethod[] = [
  {
    label: 'Email',
    value: PROFILE.email,
    url: `mailto:${PROFILE.email}`,
    description: 'Open your email application to write to me directly.',
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'Professional profile',
    url: SOCIAL_LINKS.find((link) => link.label === 'LinkedIn')!.url,
    description: 'Connect with me and view my professional profile.',
    external: true,
  },
  {
    label: 'GitHub',
    value: '@badaDev',
    url: PROFILE.githubUrl,
    description: 'Explore my public development profile and repositories.',
    external: true,
  },
];

export const PROJECTS: readonly PortfolioProject[] = [
  {
    name: 'ShiftPay Tracker',
    description: 'A full-stack shift and earnings management application that helps workers record shifts, calculate working hours and track expected pay, including support for overnight shifts and unpaid breaks.',
    technologies: ['Angular', 'TypeScript', 'NestJS', 'Node.js', 'PostgreSQL', 'Prisma', 'Vercel', 'Render'],
    liveUrl: 'https://shiftpay-tracker.vercel.app/login',
    repositoryUrl: null,
    imagePath: '/assets/images/projects/shiftpay-tracker-2.webp',
    imageAlt: 'ShiftPay Tracker sign-in screen with a pay-tracking form on a dark blue and green background',
    imageWidth: 1920,
    imageHeight: 885,
    caseStudyUrl: null,
    status: 'available',
    featured: true,
    role: 'Designed and developed the application across the Angular frontend, NestJS backend, PostgreSQL database and Prisma data layer.',
    problem: 'Workers need a dependable way to record varied shift patterns and understand their expected earnings, including when shifts cross midnight or include unpaid breaks.',
    features: [
      'Recording and editing work shifts',
      'Separate start and end dates and times',
      'Support for shifts that cross midnight',
      'Unpaid-break deductions',
      'Calculation of total worked hours',
      'Expected-pay calculations',
      'Responsive shift summaries and detail views',
    ],
    screenshots: [
      {
        path: '/assets/images/projects/shiftpay-tracker-2.webp',
        alt: 'ShiftPay Tracker sign-in page introducing shift, overtime and pay tracking alongside the account form',
        width: 1920,
        height: 885,
      },
      {
        path: '/assets/images/projects/shiftpay-tracker-1.webp',
        alt: 'ShiftPay Tracker account creation page with name, email and password fields',
        width: 1913,
        height: 903,
      },
    ],
  },
  {
    name: 'O2 Appointment Booking System',
    description: 'A full-stack appointment booking and management platform for handling services, customers, booking availability and appointments.',
    technologies: ['Angular', 'TypeScript', 'NestJS', 'Node.js', 'PostgreSQL', 'Prisma', 'Neon', 'Vercel', 'Render'],
    liveUrl: null,
    repositoryUrl: null,
    caseStudyUrl: null,
    status: 'active-development',
    featured: true,
    role: 'Product owner and full-stack developer responsible for requirements, architecture and implementation.',
    features: [
      'Administrator authentication',
      'Customer management',
      'Service management',
      'Appointment creation',
      'Booking availability',
      'Upcoming and past appointments',
      'Rescheduling and cancellation',
      'Appointment pricing',
      'Customer booking history',
      'Loyalty notification for a customer’s tenth booking',
    ],
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
  { company: 'Blockchain Advisors Ltd', role: 'Frontend Software Engineer (Contract)', startDate: '2026-06', startLabel: 'June 2026', endDate: null, endLabel: 'Present' },
  { company: 'Techforce Inc Ltd', role: 'Frontend Engineer (Project-Based)', startDate: '2025-10', startLabel: 'October 2025', endDate: '2026-05', endLabel: 'May 2026' },
  { company: 'BAfashion', role: 'Frontend Developer', startDate: '2025-03', startLabel: 'March 2025', endDate: '2025-08', endLabel: 'August 2025' },
  { company: 'Zarttech', role: 'Angular Developer', startDate: '2024-03', startLabel: 'March 2024', endDate: '2025-03', endLabel: 'March 2025' },
  { company: 'Global Accelerex Ltd', role: 'Software Developer', startDate: '2022-03', startLabel: 'March 2022', endDate: '2024-03', endLabel: 'March 2024' },
  { company: 'Jbitss Tech', role: 'Frontend Developer', startDate: '2019-03', startLabel: 'March 2019', endDate: '2022-02', endLabel: 'February 2022' },
];

export const EXPERIENCE_TECHNOLOGY_GROUPS: readonly TechnologyGroup[] = [
  {
    name: 'Frontend',
    technologies: ['Angular', 'TypeScript', 'JavaScript', 'RxJS', 'NgRx', 'HTML', 'CSS', 'SCSS', 'Responsive Web Development', 'REST API Integration'],
    status: 'established',
  },
  {
    name: 'Full-stack development',
    description: 'Currently expanding into full-stack development with Node.js and NestJS.',
    technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'Prisma'],
    status: 'developing',
  },
  {
    name: 'Currently expanding',
    description: 'Technologies currently being learned and developed.',
    technologies: ['C#', '.NET'],
    status: 'developing',
  },
];

export const PROFESSIONAL_DEVELOPMENT: readonly ProfessionalDevelopmentItem[] = [
  { name: 'Nodejs & Nestjs', status: 'In Progress' },
  { name: 'C# and .NET Development', status: 'In Progress' },
  { name: 'Angular: The Complete Guide' },
  { name: 'Angular Material In-Depth' },
  { name: 'NgRx State Management' },
  { name: 'Web Application Development with JavaScript' },
];

export const MENTORSHIP = {
  title: 'Frontend Engineering Mentorship Community',
  summary: 'I founded the Frontend Engineering Mentorship Community to help beginner developers build strong foundations in HTML, CSS, JavaScript, Git and Angular through structured lessons, practical assignments and ongoing guidance.',
  role: 'Founder and Lead Mentor',
  motivation: [
    'I remember that technical concepts can feel overwhelming at first, so I enjoy breaking difficult subjects into smaller, clearer steps.',
    'I want beginners to build understanding rather than only copy code. Teaching this way strengthens my communication, patience and ability to see a problem from another person’s perspective.',
  ],
} as const satisfies MentorshipProfile;

export const EDUCATION: readonly EducationRecord[] = [
  {
    institution: 'Adekunle Ajasin University',
    qualification: 'B.Sc. (Hons) Environmental Biology & Fisheries',
  },
];

export const ABOUT_STORY: readonly AboutStoryChapter[] = [
  {
    eyebrow: 'An unconventional beginning',
    title: 'My route into engineering was a deliberate career transition.',
    paragraphs: [
      'I studied Environmental Biology & Fisheries at Adekunle Ajasin University. My degree was not related to computing, but I do not see that as something to hide. It is part of a journey that taught me careers do not always move in a straight line.',
      'Moving into software engineering meant starting again as a beginner. I learned HTML, CSS, JavaScript, Bootstrap and responsive web development through self-directed study, consistency and practice. Later software-development training introduced Angular & React, and each stage gave me enough confidence to take on the next one.',
    ],
  },
  {
    eyebrow: 'From pages to applications',
    title: 'My thinking grew with the systems I was trusted to build.',
    paragraphs: [
      'I began by learning how pages are structured, styled and made responsive. JavaScript added behaviour; framework-based development then showed me how interfaces become connected applications. Over time, Angular and TypeScript became my strongest commercial technologies.',
      'As I contributed to larger API-driven software across fintech, SaaS, e-commerce and healthcare-related contexts, I started looking beyond whether a screen appeared correct. I became more interested in how data moves, how components fit together, how users experience a workflow, how authentication and state are managed, and how a change affects the rest of an existing codebase.',
    ],
  },
  {
    eyebrow: 'What drives me',
    title: 'Useful software begins with a problem worth understanding.',
    paragraphs: [
      'What keeps me engaged is not collecting frameworks or learning syntax for its own sake. I enjoy understanding how systems work, improving things that are confusing or inefficient, and seeing an idea become an application with a clear purpose.',
      'ShiftPay Tracker grew from the practical need to record shifts and understand expected earnings. O2 Appointment Booking System is taking shape around organising customers, services and appointments. Building products like these encourages me to understand the whole application rather than stopping at the interface.',
    ],
  },
  {
    eyebrow: 'How I have evolved',
    title: 'Progress now means more than making a feature work.',
    paragraphs: [
      'Earlier in my journey, progress often meant completing an isolated task. Today, I think more carefully about how a change fits the wider system, whether the requirements are clear, how another developer will read it, and how it can be tested and maintained.',
      'I have become more comfortable reading unfamiliar code, testing assumptions and receiving review feedback. I still ask questions and I still make corrections. That combination of growing confidence and remaining open to feedback has made collaboration and communication a central part of how I understand engineering.',
    ],
  },
  {
    eyebrow: 'Full-stack direction',
    title: 'I want to understand the product beyond the interface.',
    paragraphs: [
      'Angular and TypeScript remain my strongest commercial foundation, but working with APIs and application data made me increasingly curious about what happens behind the user interface.',
      'I am building deeper knowledge of Node.js, NestJS, API design, authentication, business logic, PostgreSQL, relational data, Prisma and backend architecture. This is not simply about adding technologies to a CV; I want to understand how the interface, API, business rules and database work together as one product. C# and .NET are also part of my ongoing development and remain in progress.',
    ],
  },
  {
    eyebrow: 'AI-assisted engineering',
    title: 'Useful support still requires engineering judgement.',
    paragraphs: [
      'I use AI-assisted tools to analyse requirements, inspect unfamiliar codebases, consider implementation options, break work into smaller tasks, reduce repetitive work, improve documentation and support test creation.',
      'The tool does not take responsibility for the result. I inspect generated changes, review diffs, validate requirements, run the application, check builds and tests, correct faulty assumptions and make the final engineering decisions. AI supports my process; it does not replace understanding the implementation.',
    ],
  },
];

export const WORK_PRINCIPLES: readonly WorkPrinciple[] = [
  { title: 'Understand before changing', description: 'I prefer to understand the existing system, the requirement and the reason behind a feature before changing its implementation.' },
  { title: 'Break complexity into smaller steps', description: 'Large tasks become manageable when they are separated into clear pieces that can be implemented and checked independently.' },
  { title: 'Build with the next developer in mind', description: 'Readable structure, clear naming and maintainable decisions matter because software is rarely handled by only one person.' },
  { title: 'Keep learning honestly', description: 'I am comfortable acknowledging what I do not yet know, asking useful questions and taking deliberate steps to improve.' },
];
