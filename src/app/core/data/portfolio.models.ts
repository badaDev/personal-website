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
  readonly dates: string;
}
