import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('Application routes', () => {
  it('defines only the five approved public routes plus the wildcard', () => {
    const paths = routes.map((route) => route.path);
    expect(paths).toEqual(['', 'about', 'experience', 'projects', 'contact', '**']);
    expect(JSON.stringify(routes).toLowerCase()).not.toContain('gallery');
    expect(new Set(routes.map((route) => route.title))).toHaveLength(routes.length);
  });

  it('renders the Angular 404 page for an unknown route', async () => {
    await TestBed.configureTestingModule({ imports: [App], providers: [provideRouter(routes)] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);

    await router.navigateByUrl('/does-not-exist');
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).querySelector('app-not-found h1')?.textContent).toContain('This route does not lead anywhere yet');
  });

  it('marks the current navigation route accessibly', async () => {
    await TestBed.configureTestingModule({ imports: [App], providers: [provideRouter(routes)] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);

    await router.navigateByUrl('/about');
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const activeLink = (fixture.nativeElement as HTMLElement).querySelector('header a[href="/about"]');
    expect(activeLink?.classList).toContain('active');
    expect(activeLink?.getAttribute('aria-current')).toBe('page');
  });
});
