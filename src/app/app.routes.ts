/**
 * App routes
 *
 * @date 08/15/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Route } from "@angular/router";
import { AppComponent } from "./app.component";

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full' , redirectTo: '/dashboard' },
]

export const appComponents = [
  AppComponent,
]
