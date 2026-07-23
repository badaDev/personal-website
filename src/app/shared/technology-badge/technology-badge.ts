import { Component, input } from '@angular/core';

@Component({ selector: 'app-technology-badge', template: '<span>{{ label() }}</span>', styleUrl: './technology-badge.scss' })
export class TechnologyBadge {
  readonly label = input.required<string>();
}
