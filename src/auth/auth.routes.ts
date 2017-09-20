/**
 * Auth routes
 *
 * @date 09/19/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Route } from "@angular/router";
import { AuthLoginPageComponent } from "./login.page";
import { AuthSignupPageComponent } from "./signup.page";

export const AuthRoutes: Route[] = [
  {
    path: 'login', component: AuthLoginPageComponent,
    data: { page: 'full' }
  },
  {
    path: 'signup', component: AuthSignupPageComponent,
    data: { page: 'full' }
  },
]

export const AuthComponents = [
  AuthLoginPageComponent,
  AuthSignupPageComponent
]
