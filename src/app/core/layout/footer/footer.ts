import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE, SOCIAL_LINKS } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly socialLinks = SOCIAL_LINKS;
  protected readonly email = PROFILE.email;
}
