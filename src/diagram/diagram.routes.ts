/**
 * Diagram routes
 *
 * @date 08/21/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Route } from "@angular/router";
import { DiagramListPageComponent } from "./list.page.component";
import { DiagramDetailPageComponent } from "./detail.page.component";
import { GuardService } from "../firebase/guard.service";

export const diagramRoutes: Route[] = [
  { path: 'diagrams', component: DiagramListPageComponent, canActivate: [GuardService] },
  { path: 'diagram/:id', component: DiagramDetailPageComponent },
]

export const diagramComponents = [
  DiagramListPageComponent,
  DiagramDetailPageComponent,
]
