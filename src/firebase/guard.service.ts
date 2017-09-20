/**
 * Can activated component
 *
 * @date 09/18/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class GuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): Observable<boolean>|boolean {
    return this.auth.user$.map((user) => {
      if (user) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    });
  }
}
