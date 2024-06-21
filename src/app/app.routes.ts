import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';

// configure/define angular routing path
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', pathMatch: 'full', component: ErrorComponent },
];

/**
 *
 * wild card route for 404 request and define in the last
 *  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
 */
