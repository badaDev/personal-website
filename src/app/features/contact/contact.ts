import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, OnInit, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { CONTACT_METHODS, PROFILE } from '../../core/data/portfolio.data';
import { Reveal } from '../../shared/directives/reveal';
import { SectionHeading } from '../../shared/section-heading/section-heading';

interface ContactFormValue {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
}

const meaningfulLength = (minimum: number): ValidatorFn =>
  (control: AbstractControl<string>): ValidationErrors | null =>
    control.value.trim().length >= minimum ? null : { meaningfulLength: { minimum } };

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterLink, Reveal, SectionHeading],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly profile = PROFILE;
  protected readonly contactMethods = CONTACT_METHODS;
  protected submitted = false;
  protected preparedMailto: string | null = null;
  protected readonly form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, meaningfulLength(2), Validators.maxLength(80)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email, Validators.maxLength(254)],
    }),
    subject: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, meaningfulLength(3), Validators.maxLength(120)],
    }),
    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, meaningfulLength(20), Validators.maxLength(2000)],
    }),
  });

  ngOnInit(): void {
    const title = 'Contact | Nurudeen O. Bada';
    const description = 'Contact Nurudeen O. Bada to discuss software engineering, Angular, TypeScript, full-stack product development and collaboration.';

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }

  protected showError(controlName: keyof ContactFormValue): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.touched || this.submitted);
  }

  protected prepareEmail(): void {
    this.submitted = true;
    this.preparedMailto = null;
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      queueMicrotask(() => {
        this.host.nativeElement.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      });
      return;
    }

    const value: ContactFormValue = {
      name: this.form.controls.name.value.trim(),
      email: this.form.controls.email.value.trim(),
      subject: this.form.controls.subject.value.trim(),
      message: this.form.controls.message.value.trim(),
    };
    const body = `Name: ${value.name}\nEmail: ${value.email}\n\nMessage:\n${value.message}`;
    this.preparedMailto = `mailto:${this.profile.email}?subject=${encodeURIComponent(value.subject)}&body=${encodeURIComponent(body)}`;

    const emailLink = this.document.createElement('a');
    emailLink.href = this.preparedMailto;
    emailLink.click();
  }
}
