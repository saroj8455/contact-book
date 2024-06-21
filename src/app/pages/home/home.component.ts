import { Component } from '@angular/core';
import { PrimeconfigModule } from '../../primeconfig/primeconfig.module';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PrimeconfigModule, AuthComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'contact-book';
}
