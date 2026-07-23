import { Component } from '@angular/core';
import { PROJECTS } from '../../core/data/portfolio.data';

@Component({ selector: 'app-projects', templateUrl: './projects.html' })
export class Projects {
  protected readonly projects = PROJECTS;
}
