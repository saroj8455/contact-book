import { Component, OnInit } from '@angular/core';
import { PrimeconfigModule } from '../../primeconfig/primeconfig.module';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { generateUUID, isNullOrUndefined } from '../../common/helper';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [PrimeconfigModule, LoginComponent, RegisterComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit {
  verifyUser: any;
  ngOnInit(): void {
    console.log(generateUUID());
  }

  registerUser() {
    const creds = localStorage.getItem('creds');

    // optmize the approach using helper
    const isCreds = isNullOrUndefined(creds);
    if (!isCreds) {
      // check username and password
      const users = JSON.parse(creds as string);
      if (Array.isArray(users)) {
        this.verifyUser = users.filter((user) => user.username === 'test');
        console.log(this.verifyUser);
      }
    }
    // push user info to local storage
    localStorage.setItem(
      'creds',
      JSON.stringify([{ username: 'test', password: 'test' }])
    );
  }
}
