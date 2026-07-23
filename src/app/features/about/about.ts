import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import {
  ABOUT_STORY,
  EDUCATION,
  EXPERIENCE_TECHNOLOGY_GROUPS,
  MENTORSHIP,
  PROFESSIONAL_DEVELOPMENT,
  PROFILE,
  SOCIAL_LINKS,
  WORK_PRINCIPLES,
} from '../../core/data/portfolio.data';
import { Reveal } from '../../shared/directives/reveal';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { TechnologyBadge } from '../../shared/technology-badge/technology-badge';

@Component({
  selector: 'app-about',
  imports: [RouterLink, Reveal, SectionHeading, TechnologyBadge],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  protected readonly name = 'Nurudeen O. Bada';
  protected readonly positioning = 'Frontend-focused Software Engineer expanding into full-stack development with Node.js and NestJS.';
  protected readonly profile = PROFILE;
  protected readonly socialLinks = SOCIAL_LINKS;
  protected readonly story = ABOUT_STORY;
  protected readonly principles = WORK_PRINCIPLES;
  protected readonly technologyGroups = EXPERIENCE_TECHNOLOGY_GROUPS;
  protected readonly mentorship = MENTORSHIP;
  protected readonly education = EDUCATION;
  protected readonly professionalDevelopment = PROFESSIONAL_DEVELOPMENT;

  ngOnInit(): void {
    const title = 'About | Nurudeen O. Bada';
    const description = 'The unconventional path of Nurudeen O. Bada into Angular and TypeScript engineering, full-stack development with Node.js and NestJS, and frontend mentorship.';

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }
}
