import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Contact } from './models/contact';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsAppComponent implements OnInit {

  contacts: Contact[];
  
  constructor(private contactsService: ContactsService) {}
  
  trackById(index:number, contact:Contact) {
    return contact.id;
  }
  
  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }
}
