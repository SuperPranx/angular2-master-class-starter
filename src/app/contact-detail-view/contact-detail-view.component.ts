import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contact-detail-view',
  templateUrl: './contact-detail-view.component.html',
  styleUrls: ['./contact-detail-view.component.css']
})
export class ContactDetailViewComponent implements OnInit {

  contact: Contact;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private eventBusService: EventBusService) { }

  ngOnInit() {
    this.activatedRoute.data
        .map(data => data['contact'])
        .subscribe(contact => this.contact = contact);
  }
  
  navigateToEditor(contact: Contact) {
    this.router.navigate(['/contact',contact.id,'edit']);
  }
  
  navigateToList() {
    this.router.navigate(['/']);
  }

}
