import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACT_DATA } from './data/contact-data';

@Injectable()
export class ContactsService {
  
  private contacts: Contact[] = CONTACT_DATA;
  getContacts() {
    return this.contacts;
  }
  
  getContact(id:String) {
    return this.contacts.find(contact => contact.id.toString() === id);
  }
}
