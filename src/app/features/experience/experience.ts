import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import {
  EMPLOYMENT_HISTORY,
  EXPERIENCE_TECHNOLOGY_GROUPS,
  PROFESSIONAL_DEVELOPMENT,
  PROFILE,
} from '../../core/data/portfolio.data';
import { Reveal } from '../../shared/directives/reveal';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { TechnologyBadge } from '../../shared/technology-badge/technology-badge';

@Component({
  selector: 'app-experience',
  imports: [RouterLink, Reveal, SectionHeading, TechnologyBadge],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  protected readonly employment = EMPLOYMENT_HISTORY;
  protected readonly technologyGroups = EXPERIENCE_TECHNOLOGY_GROUPS;
  protected readonly professionalDevelopment = PROFESSIONAL_DEVELOPMENT;
  protected readonly profile = PROFILE;

  ngOnInit(): void {
    const title = 'Experience | Nurudeen O. Bada';
    const description = 'Explore Nurudeen O. Bada’s professional timeline, Angular and TypeScript foundation, and continued development with Node.js, NestJS, C# and .NET.';

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
