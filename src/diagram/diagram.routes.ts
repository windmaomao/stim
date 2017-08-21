/**
 * Diagram routes
 *
 * @date 08/21/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Route } from "@angular/router";
import { DiagramListPageComponent } from "./list.page.component";
import { DiagramDetailPageComponent } from "./detail.page.component";

export const diagramRoutes: Route[] = [
  { path: 'diagrams', component: DiagramListPageComponent },
  { path: 'diagram/:id', component: DiagramDetailPageComponent },
]

export const diagramComponents = [
  DiagramListPageComponent,
  DiagramDetailPageComponent,
]
