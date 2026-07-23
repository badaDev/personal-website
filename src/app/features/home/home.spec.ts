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
    expect(TestBed.inject(Meta).getTag("property='og:title'")?.content).toContain('Frontend Software Engineer');
  });

  it('shows verified contact links without a CV or profile placeholders', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const text = element.textContent ?? '';

    expect(text).not.toContain('Download CV');
    expect(text).not.toContain('details to confirm');
    expect(element.querySelector('a[href="mailto:nolanrewaju@gmail.com"]')).toBeTruthy();
    expect(element.querySelector('a[href="https://github.com/badaDev"]')).toBeTruthy();
  });

  it('renders ShiftPay and intentional coming-soon project states', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const image = element.querySelector('img[src="/assets/images/projects/shiftpay-tracker-2.webp"]');

    expect(image?.getAttribute('loading')).toBe('lazy');
    expect(element.textContent).toContain('ShiftPay Tracker');
    expect(element.querySelectorAll('.coming-soon-card')).toHaveLength(2);
    expect(element.querySelector('a[href="https://shiftpay-tracker.vercel.app/login"]')?.getAttribute('rel')).toBe('noopener noreferrer');
    expect(element.textContent).not.toContain('Case study');
  });
});
