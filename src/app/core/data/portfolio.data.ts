import {
  ExperienceTheme,
  ExpertiseItem,
  PortfolioProfile,
  PortfolioProject,
  SocialLink,
} from './portfolio.models';

export const PROFILE: PortfolioProfile = {
  name: 'Nurudeen Bada',
  role: 'Software Engineer · Angular & TypeScript Specialist',
  biography: [
    'Nurudeen Olanrewaju Bada is a frontend developer focused on Angular. His move into technology was driven by an interest in practical, fast-moving software development.',
    'He developed his foundations through independent study and a frontend development bootcamp, then built further experience through freelance client projects and employment opportunities.',
  ],
  email: null,
  githubUrl: null,
  cvPath: null,
  location: null,
  availability: null,
};

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nurudeen-bada-457a43200/',
  },
];

export const PROJECTS: readonly PortfolioProject[] = [
  {
    name: 'Spaxx Exam Portal',
    description: 'An exam portal that lets users take short subject-based assessments and receive a percentage grade when they finish.',
    technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://spakxx-exam-portal.netlify.app/',
    repositoryUrl: null,
    imagePath: null,
    legacyImageUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-website-f60d7.appspot.com/o/projectImages%2FScreenshot%20(244).png_1681058871061?alt=media&token=c5c1183f-a0f6-4891-bd03-8a5d66745cb6',
    caseStudyUrl: null,
    status: 'published',
    featured: true,
  },
  {
    name: 'Featured project — details needed',
    description: 'Project summary, responsibilities and supporting links require review before publication.',
    technologies: [],
    liveUrl: null,
    repositoryUrl: null,
    imagePath: null,
    legacyImageUrl: null,
    caseStudyUrl: null,
    status: 'content-needed',
    featured: true,
  },
  {
    name: 'Featured project — details needed',
    description: 'Project summary, responsibilities and supporting links require review before publication.',
    technologies: [],
    liveUrl: null,
    repositoryUrl: null,
    imagePath: null,
    legacyImageUrl: null,
    caseStudyUrl: null,
    status: 'content-needed',
    featured: true,
  },
];

export const SKILLS: readonly string[] = [
  'Angular',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'React',
  'Firebase',
  'Git',
  'Figma',
  'Ionic',
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
  { name: 'Node.js', summary: 'Expanding backend capability for full-stack JavaScript applications.', level: 'developing' },
  { name: 'Next.js', summary: 'Developing modern full-stack React and server-rendering capability.', level: 'developing' },
];

export const EXPERIENCE_THEMES: readonly ExperienceTheme[] = [
  {
    sector: 'Fintech',
    summary: 'Enterprise frontend engineering with an emphasis on dependable Angular application development.',
    detailStatus: 'Employer, role dates and project detail to confirm.',
  },
  {
    sector: 'SaaS & healthcare',
    summary: 'Application development experience across SaaS and healthcare-related project contexts.',
    detailStatus: 'Project scope and responsibilities to confirm.',
  },
];

export const MENTORSHIP = {
  title: 'Frontend Engineering Mentorship Community',
  summary: 'A community focused on helping beginner developers build strong frontend foundations through teaching, mentoring and shared learning.',
  role: 'Founder & mentor',
} as const;
