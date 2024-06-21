import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeconfigModule } from './primeconfig/primeconfig.module';
import { ErrorComponent } from './pages/error/error.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeconfigModule, ErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'contact-book';
}
