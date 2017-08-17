/**
 * App routes
 *
 * @date 08/15/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Route } from "@angular/router";
import { AppComponent } from "./app.component";
import { STCrudComponent } from "./crud.component";
import { STDiagramComponent } from "./diagram.component";

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full' , component: STCrudComponent },
  { path: 'item', component: STDiagramComponent },
]

export const appComponents = [
  AppComponent,
  STCrudComponent,
  STDiagramComponent
]
