/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpdateServiceService } from './update-service.service';

describe('Service: UpdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateServiceService]
    });
  });

  it('should ...', inject([UpdateServiceService], (service: UpdateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
