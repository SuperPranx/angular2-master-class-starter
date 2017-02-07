import { Injectable } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';

@Injectable()
export class ContactsService {
  
  private contacts: Contact[] = CONTACT_DATA;
  getContacts() {
    return this.contacts;
  }
}
