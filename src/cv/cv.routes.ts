/**
 * Cv routes
 *
 * @date 08/25/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Route } from "@angular/router";
import { CvItemsPageComponent } from "./items.page";
import { CvDetailPageComponent } from "./detail.page";

export const CvRoutes: Route[] = [
  { path: 'cvs', component: CvItemsPageComponent },
  { path: 'cv/:id', component: CvDetailPageComponent },
]

export const CvComponents = [
  CvItemsPageComponent,
  CvDetailPageComponent,
]
