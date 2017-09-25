/**
 * Trade module
 *
 * @date 09/21/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { NgModule } from '@angular/core';
import { StLayoutModule } from '../layout/layout.module';
import { ApiModule } from '../api/api.module';
import { RouterModule } from '@angular/router';
import { TradeComponents, TradeRoutes } from './trade.routes';
import { WatchEditDialogComponent } from './watch.edit.dialog';

@NgModule({
  imports: [
    StLayoutModule,
    ApiModule,
    RouterModule.forChild(TradeRoutes),
  ],
  declarations: [
    TradeComponents
  ],
  entryComponents: [
    WatchEditDialogComponent
  ],
  providers: [],
  bootstrap: []
})
export class TradeModule { }
