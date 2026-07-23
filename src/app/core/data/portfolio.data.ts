import { PortfolioProfile, PortfolioProject, SocialLink } from './portfolio.models';

export const PROFILE: PortfolioProfile = {
  name: 'Nurudeen Bada',
  role: 'Frontend Developer',
  biography: [
    'Nurudeen Olanrewaju Bada is a frontend developer focused on Angular. His move into technology was driven by an interest in practical, fast-moving software development.',
    'He developed his foundations through independent study and a frontend development bootcamp, then built further experience through freelance client projects and employment opportunities.',
  ],
  email: null,
  githubUrl: null,
  cvPath: null,
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
