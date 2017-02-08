import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'

@Component({
  selector: 'trm-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Observable<Array<Contact>>;
  terms$: Subject<string> = new Subject<string>();
  
  constructor(private contactsService: ContactsService) {}
  
  trackById(index:number, contact:Contact) {
    return contact.id;
  }
  
  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
    this.terms$.debounceTime(400)
               .distinctUntilChanged()
               .subscribe(term => this.search(term));
  }
  
  search(term: string) {
    this.contacts = this.contactsService.search(term);
  }

}
