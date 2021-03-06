import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { TabsComponent } from '../tabs/tabs/tabs.component'
import { TabComponent } from '../tabs/tab/tab.component'
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contact-editor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.css']
})
export class ContactEditorComponent implements OnInit {
  
  private contact: Contact;

  constructor(private activatedRoute: ActivatedRoute,
              private contactsService: ContactsService,
              private router: Router,
              private eventBusService: EventBusService) { }

  ngOnInit() {
    this.activatedRoute.data
        .map(data => data['contact'])
        .subscribe(contact => this.contact = contact);
  }
  
  save(contact: Contact) {
    this.contactsService.updateContact(contact).subscribe(res => this.router.navigate(['/contacts',contact.id]));
  }

  cancel(contact: Contact) {
    this.router.navigate(['/contacts',contact.id]);
  }

}
