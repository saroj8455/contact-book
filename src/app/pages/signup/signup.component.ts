import { Component } from '@angular/core';
import { PrimeconfigModule } from '../../primeconfig/primeconfig.module';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [PrimeconfigModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {}
