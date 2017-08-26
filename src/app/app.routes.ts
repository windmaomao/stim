/**
 * App routes
 *
 * @date 08/15/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Route } from "@angular/router";
import { AppComponent } from "./app.component";
import { STDiagramComponent } from "./diagram.component";
import { STDiagram2Component } from "./diagram2.component";
import { CVEntryComponent } from "./entry.component";

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full' , redirectTo: '/diagrams' },
  { path: 'item', component: STDiagramComponent },
  { path: 'item2', component: STDiagram2Component },
  { path: 'entries', component: CVEntryComponent },
]

export const appComponents = [
  AppComponent,
  STDiagramComponent,
  STDiagram2Component,
  CVEntryComponent
]
