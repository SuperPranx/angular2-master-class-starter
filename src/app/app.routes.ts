import { Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactEditorComponent } from './contact-editor/contact-editor.component';

export const APP_ROUTES: Routes = [
  { path: '',            component: ContactListComponent },
  { path: 'contacts/:id', component: ContactDetailComponent },
  { path: 'contact/:id/edit', component: ContactEditorComponent },
  { path: '**', component: ContactListComponent }
]