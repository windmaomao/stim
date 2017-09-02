/**
 * Account module
 *
 * @date 09/01/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StLayoutModule } from '../layout/layout.module';
import { ApiModule } from '../api/api.module';
import { RouterModule } from '@angular/router';
import { AccountComponents, AccountRoutes } from './account.routes';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    BrowserModule,
    StLayoutModule,
    ApiModule,
    RouterModule.forChild(AccountRoutes),
    // NgxDatatableModule
  ],
  declarations: [
    AccountComponents
  ],
  providers: [],
  bootstrap: []
})
export class AccountModule { }