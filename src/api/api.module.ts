/**
 * API module
 *
 * @date 08/31/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { DiagramService } from './diagram.service';
import { CvService } from './cv.service';
import { AccountService } from './account.service';
import { TradeService } from './trade.service';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    DataService,
    DiagramService,
    CvService,
    AccountService,
    TradeService,
  ],
  exports: []
})
export class ApiModule { }
