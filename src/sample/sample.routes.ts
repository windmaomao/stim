/**
 * Sample routes
 *
 * @date 08/28/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Route } from "@angular/router";
import { SampleDashboardPageComponent } from "./dashboard.page.component";
import { SampleDiagramPageComponent } from "./diagram.page.component";
import { SampleDiagram2PageComponent } from "./diagram2.page.component";
import { SampleTablePageComponent } from "./table.page";

export const sampleRoutes: Route[] = [
  { path: 'dashboard', component: SampleDashboardPageComponent },
  { path: 'diagram', component: SampleDiagramPageComponent },
  { path: 'diagram2', component: SampleDiagram2PageComponent },
  { path: 'table', component: SampleTablePageComponent },
]

export const sampleComponents = [
  SampleDashboardPageComponent,
  SampleDiagramPageComponent,
  SampleDiagram2PageComponent,
  SampleTablePageComponent,
]
