import { Component, input } from '@angular/core';
import { PortfolioProject } from '../../core/data/portfolio.models';
import { TechnologyBadge } from '../technology-badge/technology-badge';

@Component({
  selector: 'app-project-card',
  imports: [TechnologyBadge],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  readonly project = input.required<PortfolioProject>();
}
