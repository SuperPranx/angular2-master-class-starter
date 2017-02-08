import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contact-detail-view',
  templateUrl: './contact-detail-view.component.html',
  styleUrls: ['./contact-detail-view.component.css']
})
export class ContactDetailViewComponent implements OnInit {

  contact: Contact;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private contactsService: ContactsService, private eventBusService: EventBusService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.contactsService.getContact(id)
      .subscribe(contact => {
        this.contact = contact;
        this.eventBusService.emit('appTitleChange', contact.name + ' Details');
      });
  }
  
  navigateToEditor(contact: Contact) {
    this.router.navigate(['/contact',contact.id,'edit']);
  }
  
  navigateToList() {
    this.router.navigate(['/']);
  }

}
