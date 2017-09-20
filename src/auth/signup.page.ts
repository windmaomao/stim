/**
 * Signup page
 *
 * @date 09/19/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component } from '@angular/core';
import { AuthService } from '../firebase/auth.service';

@Component({
  templateUrl: './signup.page.html',
})
export class AuthSignupPageComponent {
  email: string;
  password: string;
  error: string;
  constructor(private auth: AuthService) {}

  signup() {
    this.auth.signup(this.email, this.password).catch(err => {
      console.log('Error', err);
      this.error = err.message || "Unknown error occurred.";
    })
      // .subscribe(res => {
      //   console.log('Success', res);
      // }, err => {
      //   console.log('Error', err);
      // })
  }
}
