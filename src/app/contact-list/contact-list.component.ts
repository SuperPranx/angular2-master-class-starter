import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'trm-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Observable<Array<Contact>>;
  
  constructor(private contactsService: ContactsService) {
    
  }
  
  trackById(index:number, contact:Contact) {
    return contact.id;
  }
  
  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

}
