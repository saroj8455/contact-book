import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContainerComponent } from './pages/container/container.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// configure/define angular routing path
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  {
    path: '',
    component: ContainerComponent,
    children: [{ path: 'dashboard', component: DashboardComponent }],
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', pathMatch: 'full', component: ErrorComponent },
];

/**
 *
 * wild card route for 404 request and define in the last
 *  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
 */
