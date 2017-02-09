import { Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactDetailViewComponent } from './contact-detail-view/contact-detail-view.component';
import { ContactEditorComponent } from './contact-editor/contact-editor.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactsResolver } from './shared/contacts.resolver';

export const APP_ROUTES: Routes = [
  { 
    path: '',  
    component: ContactsDashboardComponent,
    children: [
      { path: '', redirectTo: 'contacts/0', pathMatch: 'full' },
      { path: 'contacts/:id', component: ContactDetailViewComponent, resolve: {contact: ContactsResolver} },
      { path: 'contact/:id/edit', component: ContactEditorComponent, resolve: {contact: ContactsResolver} }
    ]
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  }
]