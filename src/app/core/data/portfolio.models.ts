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
  readonly imagePath: string | null;
  readonly legacyImageUrl: string | null;
  readonly caseStudyUrl: string | null;
  readonly status: 'published' | 'content-needed';
  readonly featured: boolean;
}

export interface PortfolioProfile {
  readonly name: string;
  readonly role: string;
  readonly biography: readonly string[];
  readonly email: string | null;
  readonly githubUrl: string | null;
  readonly cvPath: string | null;
  readonly location: string | null;
  readonly availability: string | null;
}

export interface ExpertiseItem {
  readonly name: string;
  readonly summary: string;
  readonly level: 'established' | 'developing';
}

export interface ExperienceTheme {
  readonly sector: string;
  readonly summary: string;
  readonly detailStatus: string;
}
