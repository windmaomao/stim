/**
 * Account routes
 *
 * @date 09/01/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Route } from "@angular/router";
import { AccountStatementPageComponent } from "./account.statement.page";
import { AccountEditDialogComponent } from "./account.edit.dialog";

export const AccountRoutes: Route[] = [
  { path: 'accounts', component: AccountStatementPageComponent },
]

export const AccountComponents = [
  AccountStatementPageComponent,
  AccountEditDialogComponent
]
