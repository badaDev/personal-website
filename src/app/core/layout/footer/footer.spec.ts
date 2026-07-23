import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Footer } from './footer';

describe('Footer', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Footer], providers: [provideRouter([])] }).compileComponents();
  });

  it('shows restrained primary routes and verified contact links', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.textContent).toContain('Nurudeen O. Bada');
    expect(element.querySelector('a[href="mailto:nolanrewaju@gmail.com"]')).toBeTruthy();
    for (const url of ['https://github.com/badaDev', 'https://www.linkedin.com/in/nurudeen-bada-457a43200/']) {
      const link = element.querySelector(`a[href="${url}"]`);
      expect(link?.getAttribute('target')).toBe('_blank');
      expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
    }
  });

  it('contains no Gallery or restricted personal content', () => {
    const text = ((TestBed.createComponent(Footer).nativeElement as HTMLElement).textContent ?? '').toLowerCase();
    for (const term of ['gallery', 'location', 'visa', 'sponsorship', 'availability', 'work preference']) {
      expect(text).not.toContain(term);
    }
  });
});
