import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Contact } from './models/contact';
import { CONTACT_DATA } from './data/contact-data';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {
  private contacts: Contact[] = CONTACT_DATA;
  private API_ENDPOINT = "http://localhost:4201";
  
  constructor(private http: Http) {}
  
  getContacts() {
    return this.http.get(`${this.API_ENDPOINT}/api/contacts`)
      .map(res => res.json())
      .map(data => data.items);
  }
  
  getContact(id:String) {
    return this.http.get(`${this.API_ENDPOINT}/api/contacts/${id}`)
      .map(res => res.json())
      .map(data => data.item);
  }
}
