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
}

export interface PortfolioProfile {
  readonly name: string;
  readonly role: string;
  readonly biography: readonly string[];
  readonly email: string | null;
  readonly githubUrl: string | null;
  readonly cvPath: string | null;
}
