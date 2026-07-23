export interface SocialLink {
  readonly label: string;
  readonly url: string;
}

export interface PortfolioProject {
  readonly name: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly liveUrl: string | null;
  readonly repositoryUrl: string | null;
  readonly imagePath?: string;
  readonly imageAlt?: string;
  readonly imageWidth?: number;
  readonly imageHeight?: number;
  readonly caseStudyUrl: string | null;
  readonly status: 'available' | 'active-development';
  readonly featured: boolean;
  readonly role?: string;
  readonly problem?: string;
  readonly features?: readonly string[];
  readonly screenshots?: readonly ProjectScreenshot[];
}

export interface ProjectScreenshot {
  readonly path: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

export interface PortfolioProfile {
  readonly name: string;
  readonly role: string;
  readonly biography: readonly string[];
  readonly email: string;
  readonly githubUrl: string;
  readonly cvPath: string | null;
}

export interface ExpertiseItem {
  readonly name: string;
  readonly summary: string;
  readonly level: 'established' | 'developing';
}

export interface EmploymentRecord {
  readonly company: string;
  readonly role: string;
  readonly startDate: string;
  readonly startLabel: string;
  readonly endDate: string | null;
  readonly endLabel: string;
  readonly industry?: string;
}

export interface TechnologyGroup {
  readonly name: string;
  readonly description?: string;
  readonly technologies: readonly string[];
  readonly status?: 'established' | 'developing';
}

export interface ProfessionalDevelopmentItem {
  readonly name: string;
  readonly status?: 'In Progress';
}

export interface AboutStoryChapter {
  readonly eyebrow: string;
  readonly title: string;
  readonly paragraphs: readonly string[];
}

export interface WorkPrinciple {
  readonly title: string;
  readonly description: string;
}

export interface EducationRecord {
  readonly institution: string;
  readonly qualification: string;
}

export interface MentorshipProfile {
  readonly title: string;
  readonly role: string;
  readonly summary: string;
  readonly motivation: readonly string[];
}
