/**
 * Trade routes
 *
 * @date 09/21/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Route } from "@angular/router";
import { TradeListPageComponent } from "./trade.list.page";
// import { AccountEditDialogComponent } from "./account.edit.dialog";

export const TradeRoutes: Route[] = [
  { path: 'trades', component: TradeListPageComponent },
  // { path: 'statements/:year/:month', component: AccountStatementPageComponent }
]

export const TradeComponents = [
  TradeListPageComponent,
  // AccountEditDialogComponent
]
