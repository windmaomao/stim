/**
 * Cv routes
 *
 * @date 08/25/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Route } from "@angular/router";
import { CvItemsPageComponent } from "./items.page.component";
// import { DiagramDetailPageComponent } from "./detail.page.component";

export const cvRoutes: Route[] = [
  { path: 'cvs', component: CvItemsPageComponent },
  // { path: 'diagram/:id', component: DiagramDetailPageComponent },
]

export const cvComponents = [
  CvItemsPageComponent,
  // DiagramDetailPageComponent,
]
