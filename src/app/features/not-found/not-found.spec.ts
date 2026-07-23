import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { NotFound } from './not-found';

describe('NotFound', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [NotFound], providers: [provideRouter([])] }).compileComponents();
  });

  it('renders a helpful 404 with primary portfolio routes', () => {
    const fixture = TestBed.createComponent(NotFound);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('h1')).toHaveLength(1);
    expect(element.querySelector('a[href="/"]')).toBeTruthy();
    expect(element.querySelector('a[href="/projects"]')).toBeTruthy();
    expect(element.querySelector('a[href="/contact"]')).toBeTruthy();
    expect(element.textContent).not.toContain('Gallery');
  });

  it('sets unique 404 metadata', () => {
    const fixture = TestBed.createComponent(NotFound);
    fixture.detectChanges();

    expect(TestBed.inject(Title).getTitle()).toBe('Page Not Found | Nurudeen O. Bada');
    expect(TestBed.inject(Meta).getTag("name='description'")?.content).toContain('could not be found');
    expect(TestBed.inject(Meta).getTag("property='og:title'")?.content).toContain('Page Not Found');
  });
});
