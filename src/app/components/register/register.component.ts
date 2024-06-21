import { PrimeconfigModule } from './../../primeconfig/primeconfig.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [PrimeconfigModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {}
