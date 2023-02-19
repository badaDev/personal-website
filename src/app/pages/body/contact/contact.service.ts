import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfig } from 'src/app/core/apiConfig';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private httpClient: HttpClient,
    private apiConfig: ApiConfig,
  ) { }

  sendMessgae(message: Contact) {
    return this.httpClient.post(this.apiConfig.message, message);
  }
}
