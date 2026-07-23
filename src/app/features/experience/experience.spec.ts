import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { Experience } from './experience';

describe('Experience', () => {
  const companies = [
    'Blockchain Advisors Ltd',
    'Techforce Inc Ltd',
    'BAfashion',
    'Zarttech',
    'Global Accelerex Ltd',
    'Jbitss Tech',
  ];
  const roles = [
    'Frontend Software Engineer (Contract)',
    'Frontend Engineer (Project-Based)',
    'Frontend Developer',
    'Angular Developer',
    'Software Developer',
  ];
  const dateRanges = [
    ['June 2026', 'Present'],
    ['October 2025', 'May 2026'],
    ['March 2025', 'August 2025'],
    ['March 2024', 'March 2025'],
    ['March 2022', 'March 2024'],
    ['March 2019', 'February 2022'],
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experience],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders all employers in most-recent-first order', () => {
    const fixture = TestBed.createComponent(Experience);
    fixture.detectChanges();
    const entries = [...(fixture.nativeElement as HTMLElement).querySelectorAll('.timeline-entry h2')];

    expect(entries.map((entry) => entry.textContent?.trim())).toEqual(companies);
  });

  it('renders every confirmed role title and date range', () => {
    const fixture = TestBed.createComponent(Experience);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const text = element.textContent ?? '';

    for (const role of roles) expect(text).toContain(role);
    for (const range of dateRanges) {
      expect(text).toContain(range[0]);
      expect(text).toContain(range[1]);
    }
    expect(element.querySelectorAll('.timeline-entry')).toHaveLength(6);
    expect(element.querySelector('.timeline-entry ul')).toBeNull();
  });

  it('contains no restricted employment-preference content', () => {
    const fixture = TestBed.createComponent(Experience);
    fixture.detectChanges();
    const text = ((fixture.nativeElement as HTMLElement).textContent ?? '').toLowerCase();

    for (const term of ['location', 'visa', 'sponsorship', 'relocation', 'notice period', 'salary']) {
      expect(text).not.toContain(term);
    }
  });

  it('clearly groups full-stack growth and in-progress learning', () => {
    const fixture = TestBed.createComponent(Experience);
    fixture.detectChanges();
    const groups = [...(fixture.nativeElement as HTMLElement).querySelectorAll('.skill-group')];
    const fullStack = groups.find((group) => group.querySelector('h2')?.textContent?.includes('Full-stack'));
    const expanding = groups.find((group) => group.querySelector('h2')?.textContent?.includes('Currently expanding'));

    expect(fullStack?.textContent).toContain('Node.js');
    expect(fullStack?.textContent).toContain('NestJS');
    expect(expanding?.textContent).toContain('C#');
    expect(expanding?.textContent).toContain('.NET');
    expect(expanding?.textContent).toContain('In Progress');
  });

  it('sets Experience page metadata', () => {
    const fixture = TestBed.createComponent(Experience);
    fixture.detectChanges();

    expect(TestBed.inject(Title).getTitle()).toBe('Experience | Nurudeen O. Bada');
    expect(TestBed.inject(Meta).getTag("property='og:title'")?.content).toBe('Experience | Nurudeen O. Bada');
    expect(TestBed.inject(Meta).getTag("name='twitter:description'")?.content).toContain('Angular');
  });
});
