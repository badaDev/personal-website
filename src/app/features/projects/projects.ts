import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { PROFILE, PROJECTS } from '../../core/data/portfolio.data';
import { PortfolioProject } from '../../core/data/portfolio.models';
import { Reveal } from '../../shared/directives/reveal';
import { ProjectCard } from '../../shared/project-card/project-card';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { TechnologyBadge } from '../../shared/technology-badge/technology-badge';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, Reveal, ProjectCard, SectionHeading, TechnologyBadge],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  protected readonly profile = PROFILE;
  protected readonly shiftPay = this.requireProject('ShiftPay Tracker');
  protected readonly activeProjects = PROJECTS.filter((project) => project.status === 'active-development');

  ngOnInit(): void {
    const title = 'Software Engineering Projects | Nurudeen Bada';
    const description = 'Explore Angular and TypeScript projects by Nurudeen Bada, including full-stack applications developed with Node.js and NestJS.';

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }

  private requireProject(name: string): PortfolioProject {
    const project = PROJECTS.find((item) => item.name === name);
    if (!project) {
      throw new Error(`Required project data is missing: ${name}`);
    }
    return project;
  }
}
