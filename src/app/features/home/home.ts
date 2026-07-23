import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import {
  CREDIBILITY_ITEMS,
  EXPERIENCE_THEMES,
  EXPERTISE,
  MENTORSHIP,
  PROFILE,
  PROJECTS,
  SOCIAL_LINKS,
} from '../../core/data/portfolio.data';
import { Reveal } from '../../shared/directives/reveal';
import { ProjectCard } from '../../shared/project-card/project-card';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { TechnologyBadge } from '../../shared/technology-badge/technology-badge';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Reveal, ProjectCard, SectionHeading, TechnologyBadge],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  protected readonly profile = PROFILE;
  protected readonly socialLinks = SOCIAL_LINKS;
  protected readonly credibilityItems = CREDIBILITY_ITEMS;
  protected readonly expertise = EXPERTISE;
  protected readonly featuredProjects = PROJECTS.filter((project) => project.featured).slice(0, 3);
  protected readonly experienceThemes = EXPERIENCE_THEMES;
  protected readonly mentorship = MENTORSHIP;

  ngOnInit(): void {
    const title = 'Nurudeen Bada | Software Engineer & Angular Specialist';
    const description = 'Software Engineer specialising in Angular and TypeScript, with frontend, full-stack, fintech, SaaS, healthcare and developer mentorship experience.';
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
