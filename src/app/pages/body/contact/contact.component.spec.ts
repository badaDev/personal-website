import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of, Subject, throwError } from 'rxjs';

import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let contactService: jasmine.SpyObj<ContactService>;

  beforeEach(async () => {
    contactService = jasmine.createSpyObj<ContactService>('ContactService', ['sendMessage']);

    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: ContactService, useValue: contactService }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not submit an invalid form', () => {
    component.sendMessage();

    expect(contactService.sendMessage).not.toHaveBeenCalled();
    expect(component.contactForm.touched).toBeTrue();
  });

  it('should require a valid email address', () => {
    component.contactForm.patchValue({ email: 'invalid-email' });

    expect(component.contactForm.controls['email'].hasError('email')).toBeTrue();
  });

  it('should reset the form and show success after a successful request', () => {
    contactService.sendMessage.and.returnValue(of({}));
    component.contactForm.setValue({
      name: 'Test User',
      email: 'test@example.com',
      location: 'London',
      message: 'Hello'
    });

    component.sendMessage();

    expect(component.messageSent).toBeTrue();
    expect(component.submissionError).toBe('');
    expect(component.contactForm.value).toEqual({
      name: null,
      email: null,
      location: null,
      message: null
    });
  });

  it('should retain form values and show an error after a failed request', () => {
    contactService.sendMessage.and.returnValue(throwError(() => new Error('Request failed')));
    const formValue = {
      name: 'Test User',
      email: 'test@example.com',
      location: 'London',
      message: 'Hello'
    };
    component.contactForm.setValue(formValue);

    component.sendMessage();

    expect(component.messageSent).toBeFalse();
    expect(component.submissionError).toContain('could not be sent');
    expect(component.contactForm.value).toEqual(formValue);
  });

  it('should prevent duplicate submissions while a request is pending', () => {
    const request = new Subject<object>();
    contactService.sendMessage.and.returnValue(request.asObservable());
    component.contactForm.setValue({
      name: 'Test User',
      email: 'test@example.com',
      location: 'London',
      message: 'Hello'
    });

    component.sendMessage();
    component.sendMessage();

    expect(contactService.sendMessage).toHaveBeenCalledTimes(1);
    request.complete();
  });
});
