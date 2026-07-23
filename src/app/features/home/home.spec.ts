import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { Home } from './home';

describe('Home', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders every planned homepage section', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('.hero')).toBeTruthy();
    expect(element.querySelector('.credibility')).toBeTruthy();
    expect(element.querySelector('.expertise-section')).toBeTruthy();
    expect(element.querySelector('.projects-section')).toBeTruthy();
    expect(element.querySelector('.experience-section')).toBeTruthy();
    expect(element.querySelector('.mentorship-section')).toBeTruthy();
    expect(element.querySelector('.final-cta')).toBeTruthy();
  });

  it('renders the hero portrait with intrinsic dimensions and eager loading priority', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('.portrait-frame img') as HTMLImageElement;

    expect(image.getAttribute('width')).toBe('1142');
    expect(image.getAttribute('height')).toBe('1600');
    expect(image.getAttribute('fetchpriority')).toBe('high');
    expect(image.hasAttribute('loading')).toBe(false);
    expect(image.alt).toContain('Nurudeen Bada');
  });

  it('sets homepage title and social metadata', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();

    expect(TestBed.inject(Title).getTitle()).toContain('Software Engineer');
    expect(TestBed.inject(Meta).getTag("property='og:title'")?.content).toContain('Angular Specialist');
  });

  it('does not show unverified CV, GitHub or email links', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';

    expect(text).not.toContain('Download CV');
    expect(text).toContain('Email and GitHub details pending');
  });
});
