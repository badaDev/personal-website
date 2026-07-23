import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { Header } from './header';

describe('Header', () => {
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([
        { path: '', children: [] },
        { path: 'about', redirectTo: '' },
        { path: 'experience', redirectTo: '' },
        { path: 'projects', redirectTo: '' },
        { path: 'contact', redirectTo: '' },
      ])],
    }).compileComponents();
    await TestBed.inject(Router).navigateByUrl('/');
    fixture = TestBed.createComponent(Header);
    fixture.detectChanges();
  });

  afterEach(() => document.body.classList.remove('mobile-menu-open'));

  it('exposes and updates the mobile navigation state', () => {
    const button = fixture.nativeElement.querySelector('.menu-toggle') as HTMLButtonElement;
    expect(button.getAttribute('aria-expanded')).toBe('false');

    button.click();
    fixture.detectChanges();

    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(button.getAttribute('aria-label')).toBe('Close navigation menu');
    expect(fixture.nativeElement.querySelector('nav').classList).toContain('is-open');
    expect(document.body.classList).toContain('mobile-menu-open');
  });

  it('closes the mobile navigation and restores toggle focus on Escape', async () => {
    const button = fixture.nativeElement.querySelector('.menu-toggle') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();
    await Promise.resolve();

    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(button.getAttribute('aria-label')).toBe('Open navigation menu');
    expect(document.body.classList).not.toContain('mobile-menu-open');
    expect(document.activeElement).toBe(button);
  });

  it('contains exactly the five approved routes and a home brand link', () => {
    const element = fixture.nativeElement as HTMLElement;
    const links = [...element.querySelectorAll('nav a')];

    expect(links.map((link) => link.textContent?.trim())).toEqual(['Home', 'About', 'Experience', 'Projects', 'Contact']);
    expect(element.querySelector('.brand')?.getAttribute('href')).toBe('/');
    expect(element.textContent).not.toContain('Gallery');
  });

  it('closes the menu when a route is selected', () => {
    const button = fixture.nativeElement.querySelector('.menu-toggle') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();

    (fixture.nativeElement.querySelector('a[href="/about"]') as HTMLAnchorElement).click();
    fixture.detectChanges();

    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(document.body.classList).not.toContain('mobile-menu-open');
  });
});
