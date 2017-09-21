/**
 * Trade list page component
 *
 * @date 09/21/17
 * @author Fang Jin <windmaomao@gmail.com>
 */

import { Component, ViewChild, OnInit } from '@angular/core';
import { TradeService } from '../api/trade.service';
// import * as _ from 'lodash';
// import { MdDialog } from '@angular/material';
// import { AccountEditDialogComponent } from './account.edit.dialog';
// import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/zip';

@Component({
  templateUrl: './trade.list.page.html',
})
export class TradeListPageComponent implements OnInit {
  trades: any[];
  icons: any;
  constructor(private ds: TradeService) {
    this.icons = {
      long: 'md-trending-up green',
      short: 'md-trending-down lime',
    };
  }
  ngOnInit() {
    Observable.zip(
      this.ds.trades(),
    ).subscribe(([trades]) => {
      this.trades = trades;
      console.log(trades);
    });
  }
}
