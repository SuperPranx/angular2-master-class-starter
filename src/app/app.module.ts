import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ContactsService } from './contacts.service';
import { EventBusService } from './event-bus.service';
import { APP_ROUTES } from './app.routes';

import { ContactsAppComponent } from './contacts.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactEditorComponent } from './contact-editor/contact-editor.component';
import { ContactDetailViewComponent } from './contact-detail-view/contact-detail-view.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { EventBusArgsComponent } from './event-bus-args/event-bus-args.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [ContactsAppComponent, ContactListComponent, ContactDetailComponent, ContactEditorComponent, ContactDetailViewComponent, TabsComponent, TabComponent, EventBusArgsComponent, ContactsDashboardComponent, AboutComponent],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,
    HttpModule
  ],
  bootstrap: [ContactsAppComponent],
  providers: [ContactsService, EventBusService]
})
export class ContactsModule {

}
