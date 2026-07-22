import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';

import * as alertify from 'alertifyjs';
import { Contact } from '../models/contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageSent = false;
  submissionError = '';
  isSubmitting = false;
  contactForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
  ) {
    this.initializeForm();
   }

  ngOnInit(): void {
  }

  initializeForm() {
    this.contactForm =  this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      location: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  sendMessage(): void {
    if (this.contactForm.invalid || this.isSubmitting) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const data = this.contactForm.getRawValue();
    const messageData: Contact = {
      name: data.name,
      email: data.email,
      location: data.location,
      message: data.message,
      date: new Date(),
    };

    this.messageSent = false;
    this.submissionError = '';
    this.isSubmitting = true;

    this.contactService.sendMessage(messageData).pipe(
      finalize(() => this.isSubmitting = false)
    ).subscribe({
      next: () => {
        this.contactForm.reset();
        this.messageSent = true;
        alertify.success('Message Sent Successfully!');
      },
      error: () => {
        this.submissionError = 'Your message could not be sent. Please try again.';
        alertify.error('Message not sent!');
      }
    });
  }
}
