import { FormGroup } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { Contact } from './contact';

describe('Contact', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  function createContact() {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();
    return { fixture, component: fixture.componentInstance as any, element: fixture.nativeElement as HTMLElement };
  }

  it('renders the heading and verified contact methods', () => {
    const { element } = createContact();

    expect(element.querySelectorAll('h1')).toHaveLength(1);
    expect(element.textContent).toContain('nolanrewaju@gmail.com');
    expect(element.querySelector('a[href="https://github.com/badaDev"]')).toBeTruthy();
    expect(element.querySelector('a[href="https://www.linkedin.com/in/nurudeen-bada-457a43200/"]')).toBeTruthy();
  });

  it('provides the four reactive form controls with visible labels', () => {
    const { component, element } = createContact();

    expect(component.form).toBeInstanceOf(FormGroup);
    for (const field of ['name', 'email', 'subject', 'message']) {
      const control = element.querySelector(`[formcontrolname="${field}"]`) as HTMLElement | null;
      expect(control).toBeTruthy();
      expect(element.querySelector(`label[for="${control?.id}"]`)?.textContent?.trim()).toBeTruthy();
    }
  });

  it('shows specific errors after an empty submission', () => {
    const { fixture, component, element } = createContact();

    component.prepareEmail();
    fixture.detectChanges();

    expect(component.form.invalid).toBe(true);
    expect(element.querySelectorAll('.field-error')).toHaveLength(4);
    expect(element.querySelectorAll('[aria-invalid="true"]')).toHaveLength(4);
  });

  it('rejects whitespace-only values, invalid email and a short message', () => {
    const { component } = createContact();

    component.form.setValue({ name: '   ', email: 'not-an-email', subject: '   ', message: 'Too short' });
    component.prepareEmail();

    expect(component.form.controls.name.invalid).toBe(true);
    expect(component.form.controls.email.invalid).toBe(true);
    expect(component.form.controls.subject.invalid).toBe(true);
    expect(component.form.controls.message.invalid).toBe(true);
    expect(component.preparedMailto).toBeNull();
  });

  it('prepares a properly encoded mailto containing every submitted value', () => {
    const { fixture, component, element } = createContact();
    const clickSpy = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => undefined);
    const values = {
      name: 'Alex Smith',
      email: 'alex@example.com',
      subject: 'Angular project & collaboration',
      message: 'I would like to discuss an Angular product with you.',
    };

    component.form.setValue(values);
    component.prepareEmail();
    fixture.detectChanges();

    expect(clickSpy).toHaveBeenCalledOnce();
    expect(component.preparedMailto).toContain('mailto:nolanrewaju@gmail.com?subject=Angular%20project%20%26%20collaboration');
    const decoded = decodeURIComponent(component.preparedMailto);
    expect(decoded).toContain(values.name);
    expect(decoded).toContain(values.email);
    expect(decoded).toContain(values.subject);
    expect(decoded).toContain(values.message);
    expect(element.textContent).toContain('email draft has been prepared');
    expect(element.textContent).not.toContain('message has been sent');
  });

  it('does not call a backend, persist values or clear valid input', () => {
    const { component } = createContact();
    vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => undefined);
    const requestSpy = vi.spyOn(XMLHttpRequest.prototype, 'open');
    const localStorageSpy = vi.spyOn(Storage.prototype, 'setItem');
    const values = {
      name: 'Alex Smith',
      email: 'alex@example.com',
      subject: 'Project conversation',
      message: 'This is a sufficiently detailed project enquiry.',
    };

    component.form.setValue(values);
    component.prepareEmail();

    expect(requestSpy).not.toHaveBeenCalled();
    expect(localStorageSpy).not.toHaveBeenCalled();
    expect(component.form.getRawValue()).toEqual(values);
  });

  it('explains the email-client workflow and direct fallback', () => {
    const text = createContact().element.textContent ?? '';

    expect(text).toContain('does not store your details');
    expect(text).toContain('prepares a draft in your email application');
    expect(text).toContain('If your email application does not open');
    expect(text).toContain('Nothing is sent automatically');
  });

  it('contains no prohibited contact details, preferences or fake services', () => {
    const { element } = createContact();
    const text = (element.textContent ?? '').toLowerCase();
    const prohibited = [
      'telephone', 'phone number', 'whatsapp', 'calendly', 'location', 'visa', 'immigration',
      'sponsorship', 'work preference', 'relocation', 'availability', 'notice period', 'salary',
    ];

    for (const term of prohibited) expect(text).not.toContain(term);
    expect(element.querySelector('input[type="tel"]')).toBeNull();
  });

  it('secures every external contact link', () => {
    const externalLinks = [...createContact().element.querySelectorAll('.contact-method[target="_blank"]')];

    expect(externalLinks).toHaveLength(2);
    expect(externalLinks.every((link) => link.getAttribute('rel') === 'noopener noreferrer')).toBe(true);
  });

  it('sets complete Contact-page metadata', () => {
    createContact();

    expect(TestBed.inject(Title).getTitle()).toBe('Contact | Nurudeen O. Bada');
    expect(TestBed.inject(Meta).getTag("property='og:description'")?.content).toContain('Angular');
    expect(TestBed.inject(Meta).getTag("name='twitter:title'")?.content).toBe('Contact | Nurudeen O. Bada');
    expect(TestBed.inject(Meta).getTag("name='twitter:description'")?.content).toContain('collaboration');
  });
});
