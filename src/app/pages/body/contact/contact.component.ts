import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      name: ["", Validators.compose([Validators.required])],
      email: ["", Validators.compose([Validators.required])],
      location: ["", Validators.compose([Validators.required])],
      message: ["", Validators.compose([Validators.required])]
    })
  }

  sendMessage(data) {
    const messageData: Contact = {
      name: data.name,
      email: data.email,
      location: data.location,
      message: data.message,
      date: new Date(),
    }
    this.contactService.sendMessgae(messageData).subscribe(
      (res) => {
        this.contactForm.reset();
        alertify.success("Message Sent Successfully!");
      }, 
      (error) => {
        this.contactForm.reset();
        alertify.error("Message not sent!");
      }
    )
    this.changeIsLoading();
  }

  changeIsLoading() {
    this.messageSent = !this.messageSent;
  }
}
