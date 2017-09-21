/**
 * Trade module
 *
 * @date 09/21/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StLayoutModule } from '../layout/layout.module';
import { ApiModule } from '../api/api.module';
import { RouterModule } from '@angular/router';
import { TradeComponents, TradeRoutes } from './trade.routes';

// import { AccountEditDialogComponent } from './account.edit.dialog';

@NgModule({
  imports: [
    // BrowserModule,
    StLayoutModule,
    ApiModule,
    RouterModule.forChild(TradeRoutes),
  ],
  declarations: [
    TradeComponents
  ],
  entryComponents: [
    // AccountEditDialogComponent
  ],
  providers: [],
  bootstrap: []
})
export class TradeModule { }
