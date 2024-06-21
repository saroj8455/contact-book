import { Component } from '@angular/core';
import { PrimeconfigModule } from '../../primeconfig/primeconfig.module';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [PrimeconfigModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
})
export class ErrorComponent {}
