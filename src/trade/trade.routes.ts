/**
 * Trade routes
 *
 * @date 09/21/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Route } from "@angular/router";
import { TradeListPageComponent } from "./trade.list.page";
import { WatchListPageComponent } from "./watch.list.page";

export const TradeRoutes: Route[] = [
  { path: 'trades', component: TradeListPageComponent },
  { path: 'watches', component: WatchListPageComponent },
]

export const TradeComponents = [
  TradeListPageComponent,
  WatchListPageComponent
]
