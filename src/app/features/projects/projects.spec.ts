import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { Projects } from './projects';

describe('Projects', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders the three confirmed projects without Spaxx', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';

    expect(text).toContain('ShiftPay Tracker');
    expect(text).toContain('O2 Appointment Booking System');
    expect(text).toContain('Expense Tracker');
    expect(text).not.toContain('Spaxx Exam Portal');
  });

  it('renders both ShiftPay screenshots with intrinsic dimensions and lazy loading', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const first = element.querySelector('img[src="/assets/images/projects/shiftpay-tracker-1.webp"]');
    const second = element.querySelector('img[src="/assets/images/projects/shiftpay-tracker-2.webp"]');

    expect(first?.getAttribute('width')).toBe('1913');
    expect(first?.getAttribute('height')).toBe('903');
    expect(first?.getAttribute('loading')).toBe('lazy');
    expect(second?.getAttribute('width')).toBe('1920');
    expect(second?.getAttribute('height')).toBe('885');
    expect(second?.getAttribute('loading')).toBe('lazy');
  });

  it('keeps active-development projects free from fake links and case studies', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const developmentCards = [...element.querySelectorAll('.development-card')];

    expect(developmentCards).toHaveLength(2);
    expect(developmentCards.every((card) => card.querySelector('a') === null)).toBe(true);
    expect(element.textContent).not.toContain('Case study');
  });

  it('sets projects page metadata', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    expect(TestBed.inject(Title).getTitle()).toBe('Software Engineering Projects | Nurudeen Bada');
    expect(TestBed.inject(Meta).getTag("property='og:title'")?.content).toContain('Software Engineering Projects');
    expect(TestBed.inject(Meta).getTag("name='twitter:description'")?.content).toContain('Node.js and NestJS');
  });
});
