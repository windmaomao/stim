/**
 * Login page
 *
 * @date 09/19/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component } from '@angular/core';
import { AuthService } from '../firebase/auth.service';

@Component({
  templateUrl: './login.page.html',
})
export class AuthLoginPageComponent {
  email: string;
  password: string;
  error: string;
  constructor(public auth: AuthService) {}

  login() {
    this.auth.authenticate(this.email, this.password).catch(err => {
      this.error = err.message || "Unknown error occurred.";
    })
  }
}
