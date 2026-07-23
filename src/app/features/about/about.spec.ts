import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { About } from './about';

describe('About', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  function render(): HTMLElement {
    const fixture = TestBed.createComponent(About);
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  }

  it('introduces Nurudeen and his unconventional transition into engineering', () => {
    const element = render();
    const text = element.textContent ?? '';

    expect(element.querySelectorAll('h1')).toHaveLength(1);
    expect(text).toContain('Nurudeen O. Bada');
    expect(text).toContain('Frontend-focused Software Engineer expanding into full-stack development with Node.js and NestJS.');
    expect(text).toContain('deliberate career transition');
    expect(text).toContain('Environmental Biology & Fisheries');
    expect(text).toContain('Adekunle Ajasin University');
  });

  it('explains the progression from foundations to commercial frontend engineering', () => {
    const text = render().textContent ?? '';

    for (const technology of ['HTML', 'CSS', 'JavaScript', 'Angular', 'TypeScript']) {
      expect(text).toContain(technology);
    }
    expect(text).toContain('strongest commercial technologies');
    expect(text).toContain('Progress now means more than making a feature work');
    expect(text).toContain('What drives me');
  });

  it('presents confirmed full-stack direction and learning status accurately', () => {
    const element = render();
    const text = element.textContent ?? '';

    for (const technology of ['Node.js', 'NestJS', 'PostgreSQL', 'Prisma', 'C#', '.NET']) {
      expect(text).toContain(technology);
    }
    const expandingGroup = [...element.querySelectorAll('.technology-groups article')]
      .find((group) => group.textContent?.includes('Currently expanding'));
    expect(expandingGroup?.textContent).toContain('In Progress');
  });

  it('communicates grounded principles and responsible AI-assisted engineering', () => {
    const text = render().textContent ?? '';

    expect(text).toContain('Understand before changing');
    expect(text).toContain('Break complexity into smaller steps');
    expect(text).toContain('Build with the next developer in mind');
    expect(text).toContain('AI-assisted engineering');
    expect(text).toContain('review diffs');
    expect(text).toContain('make the final engineering decisions');
  });

  it('explains the mentorship community and why teaching matters', () => {
    const text = render().textContent ?? '';

    expect(text).toContain('Frontend Engineering Mentorship Community');
    expect(text).toContain('Founder and Lead Mentor');
    expect(text).toContain('Why mentoring matters to me');
    expect(text).toContain('build understanding rather than only copy code');
  });

  it('uses verified internal and contact links securely', () => {
    const element = render();

    expect(element.querySelector('a[href="/projects"]')).toBeTruthy();
    expect(element.querySelector('a[href="/experience"]')).toBeTruthy();
    expect(element.querySelector('a[href="mailto:nolanrewaju@gmail.com"]')).toBeTruthy();
    for (const url of ['https://github.com/badaDev', 'https://www.linkedin.com/in/nurudeen-bada-457a43200/']) {
      const link = element.querySelector(`a[href="${url}"]`);
      expect(link?.getAttribute('target')).toBe('_blank');
      expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
    }
  });

  it('uses the alternate portrait with intrinsic dimensions and eager priority', () => {
    const image = render().querySelector('.portrait-wrap img');

    expect(image?.getAttribute('src')).toBe('/assets/images/profile/nurudeen-bada-portrait.jpeg');
    expect(image?.getAttribute('width')).toBe('1142');
    expect(image?.getAttribute('height')).toBe('1600');
    expect(image?.getAttribute('fetchpriority')).toBe('high');
    expect(image?.hasAttribute('loading')).toBe(false);
  });

  it('contains none of the restricted or unsupported personal content', () => {
    const element = render();
    const text = (element.textContent ?? '').toLowerCase();
    const restricted = [
      'gallery', 'two junior developers', 'location', 'visa', 'immigration', 'sponsorship',
      'work preference', 'remote', 'hybrid', 'on-site', 'relocation', 'availability',
      'notice period', 'salary', 'download cv',
    ];

    for (const term of restricted) expect(text).not.toContain(term);
    expect(element.querySelector('a[download]')).toBeNull();
  });

  it('sets complete About-page metadata', () => {
    render();

    expect(TestBed.inject(Title).getTitle()).toBe('About | Nurudeen O. Bada');
    expect(TestBed.inject(Meta).getTag("property='og:description'")?.content).toContain('full-stack development');
    expect(TestBed.inject(Meta).getTag("name='twitter:title'")?.content).toContain('Nurudeen O. Bada');
    expect(TestBed.inject(Meta).getTag("name='twitter:description'")?.content).toContain('mentorship');
  });
});
