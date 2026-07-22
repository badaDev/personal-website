import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiConfig } from 'src/app/core/apiConfig';
import { Contact } from '../models/contact';
import { ContactService } from './contact.service';

describe('ContactService', () => {
  let service: ContactService;
  let httpTestingController: HttpTestingController;
  let apiConfig: ApiConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiConfig]
    });
    service = TestBed.inject(ContactService);
    httpTestingController = TestBed.inject(HttpTestingController);
    apiConfig = TestBed.inject(ApiConfig);
  });

  afterEach(() => httpTestingController.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should post a contact message to the configured endpoint', () => {
    const message: Contact = {
      name: 'Test User',
      email: 'test@example.com',
      location: 'London',
      message: 'Hello',
      date: new Date()
    };

    service.sendMessage(message).subscribe();

    const request = httpTestingController.expectOne(apiConfig.message);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(message);
    request.flush({});
  });
});
