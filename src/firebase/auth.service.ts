/**
 * Auth service
 *
 * @date 09/18/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  user: any;
  authenticated: boolean = false;
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user$ = afAuth.authState;
    this.user$.subscribe((user) => {
      this.user = user;
      this.authenticated = user ? true : false;
      console.log(user);
    })
  }

  navigate(place: string) {
    if (place === 'login') {
      return this.router.navigate(['login']);
    }
    this.router.navigate(['/']);
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        this.navigate('');
      })
    ;
  }

  authenticate(email:string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.navigate('');
      })
    ;
  }

  logout() {
    this.afAuth.auth.signOut();
    this.navigate('login');
  }

  signup(email:string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.navigate('login');
      })
    ;
  }
}
