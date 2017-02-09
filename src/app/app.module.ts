import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ContactsService } from './contacts.service';
import { EventBusService } from './event-bus.service';
import { ContactsResolver } from './shared/contacts.resolver';
import { APP_ROUTES } from './app.routes';

import { ContactsAppComponent } from './contacts.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactEditorComponent } from './contact-editor/contact-editor.component';
import { ContactDetailViewComponent } from './contact-detail-view/contact-detail-view.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';
import { EmailValidatorDirective } from './email-validator.directive';

@NgModule({
  declarations: [ContactsAppComponent, ContactListComponent, ContactDetailComponent, ContactEditorComponent, ContactDetailViewComponent, TabsComponent, TabComponent, ContactsDashboardComponent, ContactsCreatorComponent, EmailValidatorDirective],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,
    HttpModule
  ],
  bootstrap: [ContactsAppComponent],
  providers: [
    ContactsService,
    EventBusService,
    ContactsResolver
  ]
})
export class ContactsModule {

}
