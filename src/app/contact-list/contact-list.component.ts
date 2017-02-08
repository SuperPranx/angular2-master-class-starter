import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/merge'

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
    this.contacts = this.terms$.debounceTime(400)
                               .distinctUntilChanged()
                               .switchMap(term => this.contactsService.search(term))
                               .merge(this.contactsService.getContacts());
  }

}
