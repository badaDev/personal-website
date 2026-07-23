import { Component } from '@angular/core';
import { PROFILE } from '../../core/data/portfolio.data';

@Component({ selector: 'app-home', templateUrl: './home.html' })
export class Home {
  protected readonly profile = PROFILE;
}
