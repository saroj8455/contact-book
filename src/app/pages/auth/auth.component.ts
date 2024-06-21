import { Component } from '@angular/core';
import { PrimeconfigModule } from '../../primeconfig/primeconfig.module';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [PrimeconfigModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {}
